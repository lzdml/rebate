<template>
  <div class="container select-none">
    <div class="user_center_header px-4">
      <div class="flex items-center justify-end pt-4 pb-3">
        <div
          class="w-6 h-6 image-render-pixel relative"
          @click="navigateTo('/message')">
          <img
            class="w-full h-full"
            src="/@/assets/images/notice.png"
            alt="" />
          <p class="absolute -right-1.5 top-1 w-4 h-4 flex justify-center items-center bg-c_theme text-white text-xs rounded-full">0</p>
        </div>
        <div
          class="w-6 h-6 image-render-pixel relative ml-6"
          @click="navigateTo('setting')">
          <img
            class="w-full h-full"
            src="/@/assets/images/setting.png"
            alt="" />
        </div>
      </div>

      <div class="rounded-xl bg-white">
        <div class="px-6 pt-6 pb-2 flex items-center">
          <img
            class="w-16 h-16 rounded-full mr-3 object-center object-contain"
            src="/@/assets/images/default_avatar.png"
            alt="" />

          <div
            v-if="!loggedIn"
            class="text-base font-bold text-black">
            登录/注册
          </div>
          <div
            v-if="loggedIn"
            class="flex-1 flex flex-col justify-between items-start py-1">
            <p class="text-base font-bold text-black mb-1">DZL</p>
            <p class="text-xs font-bold text-[rgba(60, 60, 67, 0.6)]">
              手机号:
              <span>17630322331</span>
            </p>
          </div>
        </div>

        <div class="flex pt-7 pb-6">
          <div class="w-1/3 text-center flex flex-col">
            <p class="text-xl font-bold leading-6 text-black mb-2">999</p>
            <p class="text-[14px] font-bold leading-5 text-[#3c3c43]">累计返现</p>
          </div>
          <div class="w-[1px] h-9 bg-[#dfdfdf]"></div>
          <div class="w-1/3 text-center flex flex-col">
            <p class="text-xl font-bold leading-6 text-black mb-2">999</p>
            <p class="text-[14px] font-bold leading-5 text-[#3c3c43]">已结算</p>
          </div>
          <div class="w-[1px] h-9 bg-[#dfdfdf]"></div>
          <div class="w-1/3 text-center flex flex-col">
            <p class="text-xl font-bold leading-6 text-black mb-2">999</p>
            <p class="text-[14px] font-bold leading-5 text-[#3c3c43]">未结算</p>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4">
      <div class="bg-white rounded-xl mb-4 mt-4">
        <div
          class="text-base font-bold text-black py-3 px-4 flex items-center justify-between"
          border="~ solid #eeeeee l-0 t-0 r-0"
          ref="inviteRef"
          @click="handleInvite">
          <div>我的邀请</div>
          <div class="flex items-center text-xs font-400">
            <p class="text-[#666]">查看详情</p>
            <img
              class="w-5 image-render-pixel object-center object-contain"
              src="/@/assets/images/right_arrow.png"
              alt="" />
          </div>
        </div>

        <div class="grid grid-cols-3">
          <div
            class="text-center px-6 py-3 flex flex-col items-center"
            v-for="item in inviteList"
            :key="item.id">
            <p class="leading-6 text-xl mb-2 font-bold text-black">0.00</p>
            <p class="text-xs font-400 text-black whitespace-nowrap">{{ item.name }}</p>
          </div>
        </div>
      </div>

      <div class="rounded-xl bg-white">
        <div
          class="pl-4 pr-5 h-14 flex items-center"
          :class="{ 'van-hairline--bottom': index + 1 != menuList.length }"
          v-for="(item, index) in menuList"
          :ref="`${item.ref}`"
          @click="handleClick(item)"
          :key="item.id">
          <img
            class="w-5 h-5 mr-4 object-center object-contain image-render-pixel"
            :src="useStaticImgUrl(item.icon, 'png')"
            :alt="`图片: ${item.name}`" />
          <div class="text-[14px] font-400 text-black flex-1">{{ item.name }}</div>
          <img
            class="w-5 h-5 object-center object-contain image-render-pixel"
            src="/@/assets/images/right_arrow.png"
            alt="" />
        </div>
      </div>
    </div>

    <CustomModal
      :show="showContactState"
      class="!w-9/10 !rounded-md relative">
      <div>
        <div
          class="absolute right-4 top-4.5"
          @click="setContactState(false)">
          <van-icon
            name="cross"
            size="22px"
            color="#ccc" />
        </div>
        <h2 class="text-center text-base">添加客服</h2>

        <div
          class="w-44 h-44 p-4 bg-c_grey_l m-2 mx-auto rounded-md"
          @click="copy('微信号', { msg: '已复制客服微信号' })">
          <img
            class="w-full h-full object-center object-contain rounded-md"
            src="/@/assets/images/wechat.jpg"
            alt="" />
        </div>
        <div class="text-center text-[#999] text-xs pb-2">
          <p class="mb-1">保存二维码添加私人客服</p>
          <p>
            为你高效解答
            <span>返现流程</span>
          </p>
        </div>
      </div>
    </CustomModal>
  </div>
</template>

<script setup lang="ts" name="My">
  import { useStaticImgUrl } from '/@/utils/index';
  import { useLoading, useTouchFeedback } from '/@/hooks';
  import copy from '/@/utils/copy';

  const loggedIn = ref(true);

  const inviteList = [
    {
      id: 1,
      icon: 'order',
      name: '我的收益',
      path: 'wallet',
      class_name: 'purchase',
    },
    {
      id: 2,
      icon: 'order',
      name: '我的团员',
      path: 'wallet',
      class_name: 'order',
    },
    {
      id: 3,
      icon: 'order',
      name: '团员订单',
      path: 'wallet',
      class_name: 'entry_org',
    },
  ];

  const menuList = [
    {
      id: 4,
      icon: 'my_collection',
      name: '我的收藏',
      path: '/collect',
      ref: 'collectRef',
    },
    {
      id: 1,
      icon: 'concat',
      name: '联系客服',
      ref: 'concatRef',
    },
    {
      id: 2,
      icon: 'complaints',
      name: '来吐槽',
      path: '/complaints',
      ref: 'complaintsRef',
    },

    {
      id: 3,
      icon: 'about_us',
      name: '关于我们',
      path: '/setting',
      ref: 'aboutRef',
    },
  ];

  const router = useRouter();
  const navigateTo = (to: any, query?: any) => {
    router.push({ path: to, query });
  };

  const { loading: showContactState, setLoading: setContactState } = useLoading({ initValue: false });

  function handleClick(item) {
    if (item.icon === 'concat' && item.name === '联系客服') {
      setContactState(true);
    } else {
      navigateTo(item.path);
    }
  }

  const inviteRef = ref<HTMLElement | null>(null);

  useTouchFeedback(inviteRef, 'opacity-80', 'bg-c_grey_l');
  const handleInvite = () => {
    navigateTo('/invite');
  };
</script>

<style scoped lang="less">
  .user_center_header {
    background: linear-gradient(#dd3229, #f9f6f6 80%, #f9f9f9) no-repeat center/cover;
    background-size: 100% 100%;
    background-position: top;
    background-color: #f9f9f9;
  }
</style>

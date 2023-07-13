<template>
  <div class="container pt-13 px-4">
    <div class="fixed top-0 left-0 w-full px-4 py-2 bg-c_grey_l z-10 max-w-187.5 transition-transform left-1/2 -translate-x-1/2">
      <div
        @click="navigateTo('/search')"
        class="flex items-center rounded-full px-3 pl-2"
        border="1px solid c_b">
        <div class="w-8 h-8 flex justify-center items-center">
          <!-- <i class="iconfont icon-search text-gray-400/500"></i> -->
          <img
            class="image-render-auto w-6"
            src="/@/assets/images/search.png"
            alt="" />
        </div>
        <p class="text-gray-400/500 text-[14px]">请搜索商家名称</p>
      </div>
    </div>

    <van-swipe
      class="h-30"
      sm="h-50"
      indicator-color="white">
      <van-swipe-item
        v-for="item in banners"
        :key="item.id"
        class="bg-c_grey">
        <img
          class="w-full h-full image-render-pixel rounded-md"
          src="/@/assets/images/banner.webp"
          :alt="item.name" />
      </van-swipe-item>

      <template #indicator="{ active, total }">
        <div class="absolute transition-transform bottom-2 right-2 text-xs bg-dark-50/30 px-1 text-white">{{ active + 1 }}/{{ total }}</div>
      </template>
    </van-swipe>

    <!-- swipeable -->
    <van-tabs
      v-model:active="activeId"
      color="#f02d2d"
      animated
      class="bg-transparent">
      <van-tab
        v-for="item in menus"
        :key="item.id"
        :title="item.name">
        <div
          class="w-full whitespace-nowrap overflow-x-auto py-1"
          scrollbar="~ h-1 rounded">
          <div
            class="w-1/5 inline-flex flex-col justify-center items-center relative"
            v-for="v in item.content"
            @click="openSingleApp(v)"
            :key="v.id">
            <img
              class="w-10 h-10 image-render-pixel rounded-md"
              :src="useStaticImgUrl(`${v.icon}`, 'jpg')"
              :alt="v.name" />
            <span class="text-xs text-[#222222] pt-1.5 font-bold">{{ v.name }}</span>

            <img
              class="absolute right-0 top-0 w-6"
              src="/@/assets/images/hot.jpeg"
              v-if="v.isHot" />
          </div>
        </div>
      </van-tab>
    </van-tabs>

    <div class="mt-3 px-3 py-4 new_invite_container rounded-md relative">
      <div class="gap-x-2 flex items-center mb-3">
        <img
          class="w-14"
          src="/@/assets/images/new.png"
          alt="新人好礼" />
        <p
          class="flex items-center text-white px-1 rounded-full cursor-pointer"
          border="~ solid light-200"
          @click="navigateTo('/use')">
          如何使用
          <i
            style="font-size: 16px"
            class="iconfont icon-tishi_o ml-[2px]"></i>
        </p>
      </div>
      <div class="flex items-center gap-x-2">
        <div
          class="w-1/2 p-2 bg-white rounded-md flex items-center gap-x-2"
          @click="navigateTo('/invite')">
          <img
            class="w-12 h-12 object-center object-cover image-render-pixel rounded-md"
            src="/@/assets/images/zfb.jpeg"
            alt="" />
          <div class="text-xs">
            <p>
              团员完成
              <span class="text-c_theme/80 font-bold">3</span>
              单
            </p>
            <p>
              额外得
              <span class="text-c_theme/80 font-bold">23元</span>
            </p>
            <p class="font-bold">提现秒到账</p>
          </div>
        </div>
        <div class="w-1/2 p-2 bg-white rounded-md flex items-start gap-x-2">
          <img
            class="w-12 h-12 object-center object-cover image-render-pixel rounded-md"
            src="/@/assets/images/qun.jpeg"
            alt="" />

          <div class="text-xs text-c_theme/80 font-bold flex-1 flex flex-col justify-between items-start">
            <p class="mb-2">航哥官方群</p>
            <button class="border-transparent px-1">立即加入</button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center mt-3">
      <p class="mr-1">
        <i
          style="font-size: 16px"
          class="iconfont icon-location"></i>
      </p>
      <div class="text-xs font-bold flex items-center">
        当前定位：
        <p class="bg-c_theme/80 text-white px-2 rounded-sm">{{ '无' }}</p>
      </div>

      <div class="flex flex-1 justify-end items-center text-[#999] font-500">
        只看可抢

        <van-switch
          class="ml-2"
          size="18px"
          active-color="#f02d2d"
          v-model="checked"
          :loading="isLoading" />
      </div>
    </div>

    <div class="nav-container">
      <van-sticky :offset-top="49">
        <div class="flex items-center h-12 text-base text-[#666666] gap-x-2 bg-c_grey_l">
          <div
            v-for="item in navs"
            @click="handleDin(item)"
            :class="{ 'font-bold text-[#333333]': item.id === activeNavId }"
            :key="item.id">
            {{ item.name }}
          </div>
        </div>
        <div
          v-if="activeNavId == 60"
          class="filter-container text-[#666] bg-c_grey_l pb-3">
          <div class="flex items-center gap-x-3">
            <div
              class="flex justify-center items-center px-1.5 text-c_theme/80 text-xs font-bold rounded-md h-7 bg-[#fff7ee]"
              border="~ solid text-c_theme/80">
              {{ getCurrentState }}
              <img
                class="w-3 h-3"
                src="/@/assets/images/down-arrow.png"
                alt="" />
            </div>

            <div class="flex items-center gap-x-3">
              <div
                class="flex justify-center items-center px-1.5 text-xs rounded-md h-7 bg-white border border-solid border-transparent"
                :class="{ 'text-c_theme/80 !bg-[#fff7ee] font-bold border border-solid !border-c_theme/80': v.id === checkFilterId }"
                v-for="v in filterList"
                :key="v.id"
                @click="changeSelect(v)">
                {{ v.name }}
              </div>
            </div>

            <div
              class="flex justify-center items-center px-1.5 text-xs rounded-md h-7 bg-white"
              @click="handleFilter">
              筛选
              <img
                class="w-4 h-4 image-render-pixel"
                src="/@/assets/images/scree-icon.png"
                alt="" />
            </div>
          </div>
        </div>
      </van-sticky>

      <product
        :list="filterProduct"
        @handle-item="onChangeItem" />
    </div>

    <van-popup
      v-model:show="showTop"
      position="bottom"
      round>
      <div class="p-4 pt-0">
        <custom-header
          :show-left="false"
          :is-fixed="false"
          title="筛选条件"
          :border="false">
          <template #right_slot>
            <div
              v-feed-touch
              @click="reset">
              重置
            </div>
          </template>
        </custom-header>

        <div class="flex items-center gap-x-3 my-3 text-[#6A6A6A]">
          <div
            class="flex justify-center items-center text-c_theme/80 text-[14px] font-bold rounded-md px-3 py-1.5 bg-[#fff7ee]"
            border="~ solid text-c_theme/80"
            @click="toggleRecommends">
            {{ getCurrentState }}
            <img
              class="w-3 h-3 ml-1 origin-center"
              transition="all duration-50 ease-linear"
              :class="{ 'transition-transform rotate-180': showRecommend }"
              src="/@/assets/images/down-arrow.png"
              alt="" />
          </div>

          <div class="flex items-center gap-x-3">
            <div
              class="flex justify-center items-center px-3 py-1.5 text-[14px] rounded-md bg-[#f7f7f7] border border-solid border-transparent"
              :class="{ 'text-c_theme/80 !bg-[#fff7ee] font-bold border border-solid !border-c_theme/80': v.id === checkFilterId1 }"
              v-for="v in filterList"
              :key="v.id"
              @click="changeSelect1(v)">
              {{ v.name }}
            </div>
          </div>
        </div>

        <div
          class="mt-3"
          v-show="showRecommend">
          <h4 class="text-base font-bold text-[#000216] leading-5.5 mb-2.5">排序方式</h4>

          <div class="flex items-center gap-x-3 text-[#6a6a6a] text-[14px]">
            <div
              class="flex justify-center items-center px-3 py-1.5 text-[14px] rounded-md bg-[#f7f7f7] border border-solid border-transparent"
              v-for="item in recommends"
              :class="{ 'text-c_theme/80 bg-[#fff7ee] font-bold border border-solid !border-c_theme/80': item.id === recommendId }"
              @click="changeRecommend(item)"
              :key="item.id">
              {{ item.name }}
            </div>
          </div>
        </div>

        <div class="mt-3">
          <h4 class="text-base font-bold text-[#000216] leading-5.5 mb-2.5">平台</h4>

          <div class="flex items-center gap-x-3 text-[#6a6a6a] text-[14px]">
            <div
              class="flex justify-center items-center px-3 py-1.5 text-[14px] rounded-md bg-[#f7f7f7] border border-solid border-transparent"
              v-for="item in platforms"
              :class="{ 'text-c_theme/80 bg-[#fff7ee] font-bold border border-solid !border-c_theme/80': item.id === checkedPlatformId }"
              @click="changePlatform(item)"
              :key="item.id">
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="mt-3">
          <h4 class="text-base font-bold text-[#000216] leading-5.5 mb-2.5">用餐时段</h4>

          <div class="flex items-center flex-wrap gap-x-3 gap-y-3 text-[#6a6a6a] text-[14px]">
            <div
              class="flex justify-center items-center px-3 py-1.5 text-[14px] rounded-md bg-[#f7f7f7] border border-solid border-transparent"
              v-for="item in meals"
              :class="{ 'text-c_theme/80 bg-[#fff7ee] font-bold border border-solid !border-c_theme/80': item.id === checkedMealId }"
              @click="changeMeal(item)"
              :key="item.id">
              {{ item.name }}
            </div>
          </div>
        </div>

        <div class="flex items-center my-3 mt-5 gap-x-3">
          <button
            class="flex-1 border-none text-[14px] py-3 rounded-md"
            v-feed-touch
            @click="reset">
            清空
          </button>
          <button
            v-feed-touch
            @click="confirmFilter"
            class="flex-1 border-none text-[14px] py-3 rounded-md text-white bg-c_theme/80">
            确定
          </button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script setup lang="ts" name="Home">
  import { useStaticImgUrl } from '/@/utils/index';
  import { useLoading } from '/@/hooks';
  // useGeolocation
  import constant from './constant';
  import Message from '/@/utils/msg';
  const message = new Message();

  const router = useRouter();
  const wx = inject('wx');
  console.log('wx :>> ', wx);

  const { banners, menus, navs, recommends, filterLists, meals, platform } = constant;

  const platforms = ref(platform);
  const checkedPlatformId = ref();
  function changePlatform(item) {
    checkedPlatformId.value = item.id;
  }

  const checkedMealId = ref();
  function changeMeal(item) {
    checkedMealId.value = item.id;
  }

  function reset() {
    checkedMealId.value = -1;
    checkedPlatformId.value = -1;
    checkFilterId.value = -1;
    checkFilterId1.value = -1;
    recommendId.value = recommends[0].id;
  }

  async function confirmFilter() {
    onClickOverlay(false);
  }

  const activeId = menus[0].id;

  // const { latitude, longitude, error, desc } = useGeolocation();
  // console.log('object :>> ', latitude, longitude, error, desc);
  const checked = ref(false);
  const isLoading = ref(false);

  const activeNavId = ref(navs[0].id);

  const recommendId = ref(recommends[0].id);
  const getCurrentState = computed(() => {
    const likeList = recommends.filter((item) => item.id === recommendId.value);
    if (likeList && Array.isArray(likeList)) {
      return likeList[0].name;
    }
    return recommends[0].name;
  });
  const changeRecommend = (item) => {
    recommendId.value = item.id;
  };
  const { loading: showRecommend, setLoading: setRecommends, toggle } = useLoading({ initValue: false });
  const toggleRecommends = () => {
    toggle();
  };

  const filterList = ref(filterLists);
  const checkFilterId = ref();
  const changeSelect = (item) => {
    checkFilterId.value = item.id;
  };

  const checkFilterId1 = ref();
  const changeSelect1 = (item) => {
    checkFilterId1.value = item.id;
  };

  const fill = { id: 1, name: '黄焖鸡米饭' };
  const products = ref(new Array(10).fill(fill).map((product, index) => ({ ...fill, id: index + 1, isOver: Math.random() > 0.5 })));

  const filterProduct = computed({
    get: () => {
      return products.value.filter((item) => (checked.value ? !item.isOver : item.id != null));
    },
    set: (val) => {},
  });

  const handleDin = (item) => {
    activeNavId.value = item.id;
  };

  const { loading: showTop, setLoading: onClickOverlay } = useLoading({ initValue: false });

  const handleFilter = () => {
    onClickOverlay(true);
  };

  const onChangeItem = (item) => {
    if (item.isOver) {
      message.setOption({
        type: 'error',
        message: '当前商品已售罄',
      });
      return;
    }
    router.push({
      path: '/detail',
      query: {
        item: JSON.stringify(item),
      },
    });
  };

  const navigateTo = (path, query = {}) => {
    router.push({
      path,
      query,
    });
  };

  const openSingleApp = (item) => {
    console.log('item :>> ', item);
    // wx.navigateToMiniProgram({
    //   appId: 'wxece3a9a4c82f58c9',
    //   path: 'ele-recommend-price/pages/guest/index?inviterId=782101a9&chInfo=ch_wechat_chsub_CopyLink&_ltracker_f=tjyj1_wx_fuceng',
    //   envVersion: 'release',
    //   success: (res) => {
    //     // 打开成功
    //     console.log('打开成功', res);
    //   },
    //   fail: (err) => {
    //     console.log(err);
    //   },
    // });
  };
</script>

<style scoped lang="less">
  :deep(.van-tabs__nav) {
    background-color: transparent;
  }

  .new_invite_container {
    background: linear-gradient(90deg, #ff561f 30%, #ff0e0e 60%, #f02d2d);
  }

  .nav-container {
    :deep(.van-tabs__line) {
      height: 0;
    }

    :deep(.van-tab) {
      text-align: center;
      flex: none;
      font-size: 16px;
      padding: 0;
      padding-right: 8px;
    }

    :deep(.van-tab.van-tab--line.van-tab--active) {
      font-size: 16px;
    }
  }
</style>

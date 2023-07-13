<template>
  <div class="content pt-14 px-4">
    <custom-header
      title="商家入驻"
      @click-left="router.back()" />

    <div class="box bg-white rounded-md mb-3">
      <h4 class="p-4">霸王餐提醒: 如有问题可随时添加客服进行咨询</h4>
      <div class="van-hairline--bottom"></div>
      <div class="p-4">
        <div class="flex flex-col mb-3">
          <div class="text-[14px] font-bold mb-3">
            商家门店名称
            <span class="text-c_theme/80">*</span>
          </div>
          <div class="w-full h-12">
            <input
              class="w-full h-full bg-[#f9f9f9] pl-4 rounded-md placeholder-text-[#6A6A6A] outline-none"
              type="text"
              v-model="settle.storeName"
              placeholder="请输入门店名称" />
          </div>
        </div>
        <div class="flex flex-col mb-3">
          <div class="text-[14px] font-bold mb-3">
            联系人姓名
            <span class="text-c_theme/80">*</span>
          </div>
          <div class="w-full h-12">
            <input
              class="w-full h-full bg-[#f9f9f9] pl-4 rounded-md placeholder-text-[#6A6A6A] outline-none"
              type="text"
              v-model="settle.name"
              placeholder="请输入联系人姓名" />
          </div>
        </div>
        <div class="flex flex-col mb-3">
          <div class="text-[14px] font-bold mb-3">
            联系电话
            <span class="text-c_theme/80">*</span>
          </div>
          <div class="w-full h-12">
            <input
              class="w-full h-full bg-[#f9f9f9] pl-4 rounded-md placeholder-text-[#6A6A6A] outline-none"
              type="text"
              v-model="settle.phone"
              placeholder="请输入联系电话" />
          </div>
        </div>

        <div class="pt-6">
          <button
            v-feed-touch
            class="border-none w-full h-12 rounded-md bg-c_theme/80 text-white text-[14px]">
            提交
          </button>
        </div>
      </div>
    </div>

    <div class="box bg-white rounded-md p-4 text-[14px] text-[#333]">
      <div class="font-bold mb-1">不会操作? 快来添加您的私人客服吧</div>
      <div class="text-xs text-[#777] mb-2">无需担忧步骤繁杂, 让您快速提现</div>
      <button
        v-feed-touch
        @click="setContactState(true)"
        class="border-none bg-c_theme/80 text-white px-3 py-2 rounded-md outline-none">
        添加您的私人客服
      </button>
    </div>

    <CustomModal
      :show="showContactState"
      class="!w-9/10 !max-w-100 !rounded-md relative">
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

<script setup lang="ts" name="Settle">
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import copy from '/@/utils/copy';
  import { useLoading } from '/@/hooks';

  const router = useRouter();

  const settle = reactive({
    name: '',
    storeName: '',
    phone: '',
  });

  const { loading: showContactState, setLoading: setContactState } = useLoading({ initValue: false });
</script>

<style scoped>
  .box {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
</style>

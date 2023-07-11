<template>
  <div class="content select-none">
    <div class="header pb-12">
      <custom-header
        title=""
        class="!bg-transparent mb-4"
        :is-fixed="false"
        :border="false"
        @click-left="router.back()">
        <template #left_slot>
          <van-icon
            name="arrow-left"
            size="22"
            color="#ffffff" />
        </template>
      </custom-header>
      <div class="flex flex-col items-center text-white">
        <p class="flex items-center mb-1">
          <span class="font-bold">累计收入</span>
          <van-icon
            name="arrow"
            size="18" />
        </p>
        <h4>
          ¥
          <span class="text-2xl font-bold">312</span>
        </h4>
      </div>

      <div class="flex items-center pt-3 pb-3 gap-x-3 px-4">
        <div class="flex-1 flex flex-col items-center text-white text-[14px]">
          <p class="mb-1 font-bold">今日收入 (元)</p>
          <p class="text-base">0</p>
        </div>
        <div class="flex-1 flex flex-col items-center text-white text-[14px]">
          <p class="mb-1 font-bold">我的团员 (人)</p>
          <p class="text-base">0</p>
        </div>
        <div class="flex-1 flex flex-col items-center text-white text-[14px]">
          <p class="mb-1 font-bold">团员订单 (单)</p>
          <p class="text-base">0</p>
        </div>
      </div>
    </div>

    <div class="px-4 -mt-8">
      <div class="box rounded-md bg-white">
        <h4 class="text-[14px] font-bold text-[#000216] leading-5.5 py-3 px-4">
          <span>团长邀请</span>
          <span class="text-[#6a6a6a] text-xs ml-3">名下团员下单</span>
        </h4>
        <div class="van-hairline--bottom"></div>
        <div class="flex items-center p-4 px-2">
          <div class="flex flex-col items-center flex-1">
            <p class="text-c_theme/80 font-bold text-base mb-1">6元</p>
            <p class="text-[#6a6a6a]">首单奖励</p>
          </div>
          <div class="flex flex-col items-center flex-1">
            <p class="text-c_theme/80 font-bold text-base mb-1">6元</p>
            <p class="text-[#6a6a6a]">第二单奖励</p>
          </div>
          <div class="flex flex-col items-center flex-1">
            <p class="text-c_theme/80 font-bold text-base mb-1">6元</p>
            <p class="text-[#6a6a6a]">第三单奖励</p>
          </div>
          <div class="flex flex-col items-center flex-1">
            <p class="text-c_theme/80 font-bold text-base mb-1">6元</p>
            <p class="text-[#6a6a6a]">后续奖励</p>
          </div>
        </div>

        <div class="px-6 text-center pb-4">
          <button
            v-feed-touch
            class="w-full h-11 border-none text-white text-[14px] bg-c_theme/80 rounded-md">
            立即分享
          </button>
        </div>
      </div>
      <div class="box rounded-md bg-white mt-3">
        <h4 class="text-[14px] font-bold text-[#000216] leading-5.5 py-3 px-4">
          <span>我的团员</span>
          <span class="text-[#6a6a6a] text-xs ml-3">有效团员共1个</span>
        </h4>
        <div class="van-hairline--bottom"></div>
        <div class="">
          <div
            v-for="(item, index) in inviteList"
            :class="{ 'van-hairline--bottom': index + 1 != inviteList.length }"
            class="px-4 py-3 flex items-center"
            :key="item.id">
            <div class="w-10 h-10 mr-3">
              <img
                class="w-full h-full image-render-pixel object-center object-contain rounded-full"
                src="/@/assets/images/xc.jpg"
                alt="" />
            </div>
            <div class="flex-1 flex flex-col items-start">
              <div class="font-bold mb-3px">{{ item.phone.substr(0, 4) + '****' + item.phone.substr(-4) }}</div>
              <div class="text-xs text-[#6a6a6a]">注册时间: {{ timestampToStandardDateTime(item.date) }}</div>
            </div>
            <div class="font-bold text-[14px]">已下{{ item.num }}单</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Invite">
  import { useRouter } from 'vue-router';
  import { timestampToStandardDateTime } from '/@/utils';

  const router = useRouter();

  const inviteList = ref([
    { id: 1, phone: '15139283828', date: Date.now(), num: 0 },
    { id: 2, phone: '15139283828', date: Date.now(), num: 0 },
  ]);
</script>

<style scoped>
  .header {
    background: url('/@/assets/images/invite-bg.jpeg') no-repeat center/cover;
    background-size: 100% 100%;
  }
  .box {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
</style>

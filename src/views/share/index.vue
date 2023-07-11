<template>
  <div class="container px-4 overflow-hidden pt-4">
    <div
      class="bg-white rounded-md box"
      ref="shareContainer">
      <div class="w-full relative h-0 pb-[100%] rounded-t-md bg-[#f9f9f9]">
        <img
          class="w-full h-full rounded-t-md absolute top-0 left-0 image-render-pixel"
          src="/@/assets/images/share.webp"
          alt="" />
      </div>
      <div class="flex py-6 px-4 justify-between">
        <div class="flex flex-col">
          <p class="flex items-center gap-x-3">
            <img
              class="w-8 h-8 object-center object-cover image-render-pixel rounded-full"
              src="/@/assets/images/share.webp"
              alt="" />
            <span class="font-bold text-base">null的推荐</span>
          </p>
          <p class="text-[#6a6a6a] leading-8">名额有限 扫码立享</p>
        </div>
        <div class="qrcode w-17 h-17 bg-c_grey rounded-md"></div>
      </div>
    </div>

    <div class="flex items-center mt-10 gap-x-10 justify-center">
      <div class="flex flex-col items-center">
        <p class="p-4 rounded-full bg-yellow-300 mb-2">
          <i
            class="iconfont icon-baocun text-white"
            style="font-size: 18px"></i>
        </p>
        <p class="text-[14px] font-bold">保存图片</p>
      </div>
      <div class="flex flex-col items-center">
        <p class="p-4 rounded-full bg-c_theme/80 mb-2">
          <i
            class="iconfont icon-fenxiang text-white"
            style="font-size: 18px"></i>
        </p>
        <p class="text-[14px] font-bold">分享</p>
      </div>
    </div>

    <div class="mt-8 text-xs font-bold">
      <p class="text-c_theme/80 mb-1">
        注：严禁邀请自己的小号，包括但不限于同一设备、同一ip、同一支付宝账号、订单相同收货人和地址等，否则系统将拉黑账号并取消所有的奖励。
      </p>
      <p class="text-[#6a6a6a]">严禁将推广码发到优选官方微信群或其他优选推广员微信群，否则将取消推广资格。</p>
    </div>

    <CustomModal
      :show="false"
      class="!w-88 !rounded-md !p-0">
      <div class="canvas-container">
        <img
          class="h-full w-full object-cover"
          crossorigin="anonymous"
          :src="`${canvasSrc}}?_=${Date.now()}`"
          alt="" />
      </div>
    </CustomModal>
  </div>
</template>

<script setup lang="ts" name="Share">
  import html2canvas from 'html2canvas';
  import { onMounted, ref } from 'vue';

  const shareContainer = ref<HTMLElement | null>(null);
  const canvasSrc = ref('');
  onMounted(async () => {
    const res = await getShareImgBase64(shareContainer.value);
    canvasSrc.value = res as string;
  });

  function getShareImgBase64(container) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // #capture 就是我们要获取截图对应的 DOM 元素选择器
        html2canvas(container, {
          useCORS: true, // 【重要】开启跨域配置
          scale: window.devicePixelRatio < 3 ? window.devicePixelRatio : 2,
          allowTaint: true, // 允许跨域图片
        }).then((canvas) => {
          const imgData = canvas.toDataURL('image/jpeg', 1.0);
          resolve(imgData);
        });
      }, 300);
    });
  }
</script>

<style scoped>
  .box {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
</style>

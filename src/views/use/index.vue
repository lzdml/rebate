<template>
  <div class="content pt-11 bg-c_theme/80 px-3 pb-6">
    <custom-header
      title="新手指导"
      @click-left="router.back()" />

    <div>
      <h3 class="text-white mt-5 relative flex items-center justify-center mb-3">
        <p class="w-6 h-[2px] bg-white rounded-md"></p>
        <p class="mx-2">新手如何极速返现</p>
        <p class="w-6 h-[2px] bg-white rounded-md"></p>
      </h3>

      <div class="bg-white rounded-md px-4 pb-4">
        <div class="py-3 flex items-center">
          <p class="w-6 h-6 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-base font-bold mr-3">1</p>
          <p class="font-bold">抢名额, 后点餐</p>
        </div>

        <div class="w-4/5">
          <img
            class="w-full h-full image-render-pixel"
            src="/@/assets/images/tx/1.jpeg"
            alt="" />
        </div>
        <div class="py-3 flex items-center">
          <p class="w-6 h-6 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-base font-bold mr-3">2</p>
          <p class="font-bold">先领红包, 再去下单</p>
        </div>

        <div class="w-4/5">
          <img
            class="w-full h-full image-render-pixel"
            src="/@/assets/images/tx/2.jpeg"
            alt="" />
        </div>

        <div class="py-3 pb-0 flex items-center">
          <p class="w-6 h-6 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-base font-bold mr-3">3</p>
          <p class="font-bold">提交订单号及订单截图</p>
        </div>
        <div class="text-[#666] text-xs my-1 ml-9">
          <span>需要在</span>
          <span class="text-c_theme font-bold">报名后一小时内</span>
          提交订单编号及订单截图,
          <span class="text-c_theme font-bold">超时视为自动放弃该订单, 平台将自动取消</span>
        </div>

        <div class="w-4/5">
          <img
            class="w-full h-full image-render-pixel"
            src="/@/assets/images/tx/1.jpeg"
            alt="" />
        </div>

        <div class="py-3 pb-0 flex items-center">
          <p class="w-6 h-6 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-base font-bold mr-3">4</p>
          <p class="font-bold">订单送达并体验后提交反馈截图</p>
        </div>
        <div class="text-[#666] text-xs my-1 ml-9">
          <span>禁止事项:</span>
          <span class="text-c_theme font-bold">禁止多平台领取返利</span>
          及任何形式
          <span class="text-c_theme font-bold">联系商家索要红包/返利</span>
          ,
          <span class="text-c_theme font-bold">否则视为用户严重违规, 平台将予以全平台通报并取消该用户后续参与活动的权利</span>
        </div>

        <div class="w-4/5">
          <img
            class="w-full h-full image-render-pixel"
            src="/@/assets/images/tx/1.jpeg"
            alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Use">
  import { useRouter } from 'vue-router';

  const router = useRouter();
</script>

<style scoped></style>

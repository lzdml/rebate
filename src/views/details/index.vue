<template>
  <div class="content pt-14 px-4 relative pb-[calc(80px+env(safe-area-inset-bottom))]">
    <custom-header
      title="活动详情"
      :fixed="true"
      class="z-20"
      @click-left="router.back()" />

    <div class="bg-white rounded-md box">
      <div class="flex gap-x-3 p-4">
        <div class="w-24 h-24 flex-shrink-0 relative z-1">
          <img
            class="w-full h-full image-render-pixel object-center object-contain rounded-md"
            src="http://p1.meituan.net/business/e65284d622dc3750acde4b5a2e9035af189516.jpg"
            alt="" />
        </div>

        <div class="flex-1 w-0">
          <p
            class="whitespace-nowrap text-ellipsis overflow-hidden text-base font-bold text-[#3d3d3d]"
            @click="copy('店铺名称', { msg: '店铺名称已复制', type: 'default' })">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequatur officia omnis molestias, libero esse ratione qui? Sint recusandae
            vitae facilis debitis odit et harum dolores asperiores, totam possimus dicta.
          </p>

          <div class="text-xs text-[#999] mt-1.5 leading-4">
            <span>店铺地址:</span>
            <span>上海大世界嗲输掉牙素上海大世界嗲输掉牙素</span>
          </div>

          <div class="text-xs text-[#999] mt-1.5 font-500 flex items-center justify-between">
            <div>抢单时间：10:00-23:59</div>
            <div>0.1km</div>
          </div>
        </div>
      </div>

      <div class="van-hairline--top"></div>
      <!-- <div class="flex items-center gap-x-3">
        <div class="w-full text-center p-3 font-bold text-base flex-1">剩余{{ '1' }}份 立即参与</div>
      </div> -->
    </div>

    <div class="box bg-white rounded-md mt-3 p-4">
      <h4 class="text-base font-bold text-[#000216] leading-5.5 mb-2.5">活动要求</h4>

      <div
        class="flex mt-3"
        v-for="item in 2"
        :key="item">
        <p class="w-4 h-4 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-xs font-bold mr-3">{{ item }}</p>
        <div class="text-[#666] text-[14px] font-bold">
          <p>
            实付
            <span class="text-c_theme">30</span>
            返
            <span class="text-c_theme">17</span>
            <span class="text-c_theme">满实付, 不满不返</span>
          </p>
        </div>
      </div>
    </div>

    <div class="box bg-white rounded-md mt-3 p-4">
      <h4 class="mb-2.5 flex items-center justify-between">
        <span class="text-base font-bold text-[#000216]">参与活动流程</span>
        <p
          class="text-xs text-[#aaa] flex items-center"
          @click="router.push({ path: '/protocol', query: { type: 'rule' } })">
          <span class="mt-px">详情规则</span>
          <img
            class="w-5 h-5"
            src="/@/assets/images/right_arrow.png"
            alt="" />
        </p>
      </h4>

      <div class="flex gap-x-3">
        <div class="flex flex-col items-center">
          <p class="w-4 h-4 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-xs font-bold">1</p>
          <p
            class="flex-1"
            border="~ dashed c_theme/60"></p>
        </div>
        <div class="mb-3">
          <p class="font-bold text-[14px]">抢名额, 后点餐</p>
          <p class="text-xs text-[#999] mt-2px">抢名额时, 查看活动要求哦!</p>
        </div>
      </div>

      <div class="flex gap-x-3">
        <div class="flex flex-col items-center">
          <p class="w-4 h-4 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-xs font-bold">2</p>
          <p
            class="flex-1"
            border="~ dashed c_theme/60"></p>
        </div>
        <div class="mb-3">
          <p class="font-bold text-[14px]">先领红包，再去下单更优惠哦～</p>
          <div class="flex items-center gap-x-3 mt-1">
            <button class="border-none px-3 py-2 text-xs rounded-md text-[#6a6a6a]">立即领取外卖红包</button>
            <button class="border-none px-3 py-2 text-xs rounded-md bg-c_theme/80 text-white">一键进店下单</button>
          </div>
        </div>
      </div>

      <div class="flex gap-x-3">
        <div class="flex flex-col items-center">
          <p class="w-4 h-4 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-xs font-bold">3</p>
          <p
            class="flex-1"
            border="~ dashed c_theme/60"></p>
        </div>
        <div class="mb-3">
          <p class="font-bold text-[14px]">提交订单号及订单截图</p>
          <p class="text-xs text-[#999] mt-2px">
            需在
            <span class="text-c_theme font-bold">报名后1小时内</span>
            提交,
            <span class="text-c_theme font-bold">超时名额会被取消哦!</span>
          </p>
        </div>
      </div>

      <div class="flex gap-x-3">
        <div class="flex flex-col items-center">
          <p class="w-4 h-4 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-xs font-bold">4</p>
          <p
            class="flex-1"
            border="~ dashed c_theme/60"></p>
        </div>
        <div class="mb-3">
          <p class="font-bold text-[14px]">订单送达并体验后提交订单反馈截图</p>
          <p class="text-xs text-[#999] mt-2px">
            <span class="text-c_theme font-bold">下单当日24点前提交，超时视为自动放弃该订单，平台将自动取消</span>
          </p>
        </div>
      </div>

      <div class="flex gap-x-3">
        <div class="flex flex-col items-center">
          <p class="w-4 h-4 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-xs font-bold">5</p>
          <!-- <p
            class="flex-1"
            border="~ dashed c_theme/60"></p> -->
        </div>
        <div class="mb-3">
          <p class="font-bold text-[14px]">根据平台要求完善信息后, 等待霸王餐极速返现</p>
          <p class="text-xs text-[#999] mt-2px">
            <span class="text-c_theme font-bold">单单极速秒审核, 无需提现秒到账</span>
          </p>
        </div>
      </div>
    </div>

    <div class="box bg-white rounded-md mt-3 p-4">
      <h4 class="mb-2.5 flex items-center justify-between">
        <span class="text-base font-bold text-[#000216]">禁止事项</span>
      </h4>

      <div class="font-bold text-xs text-[#999]">
        <span class="text-c_theme/80">禁止用户多平台领取返利及任何形式联系商家索要红包/返利,</span>
        否则
        <span class="text-c_theme/80">视为用户严重违规, 平台将予以全平台通报并取消该用户后续参与活动的权利</span>
      </div>
    </div>

    <div
      class="fixed left-1/2 transition-transform -translate-x-1/2 max-w-187.5 bottom-0 w-full h-auto px-3 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] z-20 bg-white flex items-center gap-x-3">
      <button class="border-none flex-2 px-6 py-3 rounded-full text-[#6a6a6a]">前往首页</button>
      <button class="border-none flex-1 px-6 py-3 rounded-full bg-c_theme/80 text-white">剩余1份 立即参与</button>
    </div>
  </div>
</template>

<script setup lang="ts" name="Details">
  import { useRouter } from 'vue-router';
  import copy from '/@/utils/copy';

  const router = useRouter();
</script>

<style scoped>
  .box {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
</style>

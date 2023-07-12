<template>
  <div class="p-3 bg-white rounded-md flex gap-x-3">
    <div class="w-24 h-24 flex-shrink-0 relative">
      <img
        class="w-full h-full image-render-pixel object-center object-contain rounded-md"
        src="http://p1.meituan.net/business/e65284d622dc3750acde4b5a2e9035af189516.jpg"
        alt="" />

      <!-- <div
        class="absolute left-0 top-0 w-0 h-0 text-xs"
        border="t-12 r-12 b-12 l-12 solid l-c_theme/80 t-c_theme/80 r-transparent b-transparent">
        已卖完
      </div> -->
    </div>

    <div class="flex-1 w-0">
      <p class="whitespace-nowrap text-ellipsis overflow-hidden text-base font-bold text-[#3d3d3d]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequatur officia omnis molestias, libero esse ratione qui? Sint recusandae vitae
        facilis debitis odit et harum dolores asperiores, totam possimus dicta.
      </p>

      <div class="flex items-center justify-between mt-1.5 text-[#999999] text-xs">
        <p class="flex items-center">
          <img
            class="w-3.5 h-3.5 object-center object-contain image-render-pixel mr-1"
            src="/@/assets/images/mt.jpg"
            alt="" />
          <span>美团</span>
        </p>
        <p>距离: {{ '681' }}m</p>
      </div>

      <div class="flex items-center gap-x-2 my-2">
        <div class="h-5 text-xs px-1 flex justify-center items-center rounded-[4px] bg-[#ff5748] text-white">满40减29</div>
        <div
          class="h-5 text-xs px-1 flex justify-center items-center font-bold rounded-[4px] bg-[#eafbf5] text-[#25c68a]"
          border="~ soldi #25c68a">
          无需评价
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="text-xs text-[#999] mt-1.5 font-500">
          <div>抢单时间：10:00-23:59</div>
          <div class="flex items-center gap-x-1">
            <remaining-quantity />
            还剩0份
          </div>
        </div>
        <div>
          <button
            class="border-none w-16 h-8 flex justify-center items-center rounded-full text-[13px] font-bold text-[#cbcbcb] bg-[#f0f0f0]"
            v-if="item.isOver">
            抢光了
          </button>
          <button
            class="text-white border-none w-16 h-8 flex justify-center items-center rounded-full text-[13px] font-bold bg-c_theme/80"
            v-if="!item.isOver">
            去抢单
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ProductItemModel } from './types';
  defineProps<{
    item: ProductItemModel;
  }>();
</script>

<style scoped></style>

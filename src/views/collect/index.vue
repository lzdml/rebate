<template>
  <div class="content pt-14 px-4">
    <custom-header
      title="我的收藏"
      :border="false"
      class="z-20"
      @click-left="router.back()" />

    <div
      class="bg-white rounded-md box mb-3"
      v-for="item in 10"
      :key="item">
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

      <!-- <div class="flex items-center gap-x-3">
        <div class="w-full text-center p-3 font-bold text-base flex-1">剩余{{ '1' }}份 立即参与</div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts" name="Collect">
  const router = useRouter();
</script>

<style scoped></style>

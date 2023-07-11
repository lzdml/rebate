<template>
  <div class="content">
    <custom-header
      title=""
      :border="false"
      class="!bg-c_grey_l !h-12"
      contentClass="!pr-3 h-full py-2"
      @click-left="router.back()">
      <template #content>
        <div
          class="h-full flex items-center rounded-full px-3 pl-2 w-calc[100%-80px]"
          border="1px solid #666/40">
          <!-- <div class="w-8 h-8 flex justify-center items-center">
            <img
              class="image-render-auto w-6"
              src="/@/assets/images/search.png"
              alt="" />
          </div> -->
          <input
            class="h-full bg-transparent outline-transparent placeholder-text-xs pl-2"
            type="text"
            v-model="keyword"
            placeholder="请输入商家名称" />
        </div>
      </template>

      <template #right_slot>搜索</template>
    </custom-header>

    <div class="empty flex flex-col justify-center items-center mt-30">
      <img
        class="w-50"
        src="/@/assets/images/empty.jpeg"
        alt="" />
      <span class="text-[#777777] font-bold mt-2">空空如也</span>
    </div>
  </div>
</template>

<script setup lang="ts" name="Search">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  const keyword = ref('');
  const router = useRouter();
</script>

<style scoped></style>

<template>
  <div class="content pt-13 px-4">
    <custom-header
      title="消息"
      :border="false"
      @click-left="router.back()" />

    <div class="">
      <div
        class="flex items-center bg-white mb-2 h-14 px-3 justify-between rounded-md"
        v-for="item in message"
        :key="item.id">
        <div class="text-base font-bold">
          {{ item.name }}
        </div>
        <div class="text-[#999999] text-xs">{{ item.date }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Message">
  import { ref } from 'vue';
  import { timestampToStandardDateTime } from '/@/utils';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const fill = { id: 0, date: null, name: '231' };
  const message = ref(new Array(10).fill(fill).map((res, index) => ({ id: index + 1, date: timestampToStandardDateTime(new Date()), name: 'DZL' })));
</script>

<style scoped></style>

<template>
  <div class="content pt-16">
    <custom-header
      title="说点什么"
      @click-left="router.back()" />
    <van-cell-group inset>
      <van-field
        v-model="message"
        rows="4"
        autosize
        size="large"
        type="textarea"
        maxlength="200"
        placeholder="请输入留言"
        show-word-limit />
    </van-cell-group>

    <div class="text-center py-10 w-full px-4">
      <button
        @click="message = ''"
        ref="clearRef"
        class="btn mb-4 h-12 bg-c_theme text-white text-base font-bold border-none w-full rounded-md select-none">
        清除内容
      </button>
      <button
        ref="submitRef"
        @click="message = ''"
        class="h-12 text-base font-bold border-none w-full rounded-md select-none">
        提交吐槽
      </button>
    </div>
  </div>
</template>

<script setup lang="ts" name="Complaints">
  import { useTouchFeedback } from '/@/hooks';
  const message = ref('');
  const router = useRouter();

  const clearRef = ref<HTMLElement | null>(null);
  const submitRef = ref<HTMLElement | null>(null);
  useTouchFeedback(clearRef, 'opacity-80');
  useTouchFeedback(submitRef, 'opacity-80');
</script>

<style scoped></style>

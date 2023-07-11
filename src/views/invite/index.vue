<template>
  <div class="content pt-11">
    <custom-header
      title="邀请列表"
      :border="false"
      @click-left="router.back()" />
  </div>
</template>

<script setup lang="ts" name="Invite">
  import { useRouter } from 'vue-router';

  const router = useRouter();
</script>

<style scoped></style>

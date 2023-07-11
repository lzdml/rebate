<template>
  <div class="container pt-12">
    <custom-header
      :title="title"
      :border="false"
      @click-left="router.back()" />
  </div>
</template>

<script setup lang="ts" name="Protocol">
  import { ProtocolEnum, ProtocolType } from '/@/model/enum';

  const router = useRouter();
  const route = useRoute();
  const type = (route.query.type as ProtocolEnum) ?? ProtocolEnum.privacy;
  const title = computed(() => ProtocolType[type]);
</script>

<style scoped></style>

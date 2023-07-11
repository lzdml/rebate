<template>
  <div class="w-17 h-2 bg-[#ffe0bd] rounded-[4px] relative">
    <div
      class="absolute left-0 top-0 h-full text-c_theme/80"
      :class="{ 'bg-c_theme/80 rounded-tl-[4px] rounded-bl-[4px]': remain !== 0 }"
      :style="{
        width: rateWidth * 100 + '%',
      }"></div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  const props = withDefaults(
    defineProps<{
      total?: number;
      remain?: number;
    }>(),
    {
      total: 3,
      remain: 1,
    },
  );

  const rateWidth = computed(() => props.remain / props.total);
</script>

<style scoped>
  .snap-progress {
  }
</style>

<template>
  <div>
    <product-item
      class="mb-2"
      @click="emit('handleItem', item)"
      v-for="item in list"
      :key="item.id" />
  </div>
</template>

<script setup lang="ts">
  import ProductItem from './product-item.vue';

  interface ProductItemModel {
    id: number;
    [key: string]: unknown;
  }

  defineProps<{
    list: Array<ProductItemModel>;
  }>();

  const emit = defineEmits<{
    (e: 'handleItem', item: ProductItemModel): void;
  }>();
</script>

<style scoped></style>

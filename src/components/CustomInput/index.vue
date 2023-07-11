<template>
  <div class="custom-input">
    <input
      :value="value"
      :placeholder="placeholder"
      @input="handleCustomInput" />
    <button
      class="clear-button"
      v-show="showClearButton"
      @click="clearInput">
      X
    </button>
    <button
      class="search-button"
      @click="search">
      Search
    </button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import useCustomInput from '/@/hooks/useCustomInput';

  export default defineComponent({
    props: {
      value: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
      searchHandler: {
        type: Function,
        required: true,
      },
    },
    emits: ['input'],
    setup(props, { emit }) {
      const { showClearButton, clearInput, search } = useCustomInput({
        initialValue: props.value,
        searchHandler: props.searchHandler,
      });

      const handleCustomInput = (event: InputEvent) => {
        emit('input', (event.target as HTMLInputElement).value);
      };

      return {
        showClearButton,
        clearInput,
        search,
        handleCustomInput,
      };
    },
  });
</script>

<style scoped>
  .custom-input {
    position: relative;
  }

  .clear-button,
  .search-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .clear-button {
    right: 30px;
  }

  .search-button {
    right: 0;
  }
</style>

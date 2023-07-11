import { ref } from 'vue';
import { CustomInputOptions } from './types';

export default function useCustomInput(options: CustomInputOptions) {
  const { initialValue, searchHandler } = options;
  const inputValue = ref(initialValue);
  const showClearButton = ref(false);

  const handleInput = (event: Event) => {
    inputValue.value = (event.target as HTMLInputElement).value;
    showClearButton.value = inputValue.value !== '';
  };

  const clearInput = () => {
    inputValue.value = '';
    showClearButton.value = false;
  };

  const search = () => {
    searchHandler(inputValue.value!);
  };

  return {
    inputValue,
    showClearButton,
    handleInput,
    clearInput,
    search,
  };
}

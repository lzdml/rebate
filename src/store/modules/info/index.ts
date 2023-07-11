import { defineStore } from 'pinia';
import piniaStore from '/@/store/index';
import { InfoState } from './types';

export const useInfoStore = defineStore(
  // 唯一ID
  'info',
  {
    state: () => ({}),
    getters: {},
    actions: {
      updateSettings(partial: Partial<InfoState>) {
        this.$patch(partial);
      },
    },
    persist: [
      {
        key: 'info',
        storage: localStorage,
        paths: ['info'],
      },
    ],
  },
);

export function useAppOutsideStore() {
  return useInfoStore(piniaStore);
}

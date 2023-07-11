import { createPinia } from 'pinia';
import { useAppStore } from './modules/app';
import { useInfoStore } from './modules/info';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export { useAppStore, useInfoStore };
export default pinia;

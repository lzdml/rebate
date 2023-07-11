<template>
  <div class="content pt-11">
    <custom-header
      title="设置"
      @click-left="router.back()" />

    <van-config-provider :theme-vars="themeVars">
      <div>
        <div
          class="h-14 pl-4 pr-5 flex justify-between items-center bg-white text-[14px]"
          @click="navigateTo('/account')"
          ref="acRef">
          <p class="text-[#3c3c43]">账号安全</p>
          <div class="flex items-center">
            <p class="mr-2">31231231231</p>
            <img
              class="w-5"
              src="/@/assets/images/right_arrow.png"
              alt="" />
          </div>
        </div>
        <div class="pl-4 pr-5">
          <div class="van-hairline--top"></div>
        </div>
        <div
          @click="navigateTo('/protocol', { type: 'privacy' })"
          class="h-14 pl-4 pr-5 flex justify-between items-center bg-white text-[14px]">
          <p class="text-[#3c3c43]">隐私政策</p>
          <div class="flex items-center">
            <img
              class="w-5"
              src="/@/assets/images/right_arrow.png"
              alt="" />
          </div>
        </div>
        <div class="pl-4 pr-5">
          <div class="van-hairline--top"></div>
        </div>
        <div
          @click="navigateTo('/protocol', { type: 'serve' })"
          class="h-14 pl-4 pr-5 flex justify-between items-center bg-white text-[14px]">
          <p class="text-[#3c3c43]">服务协议</p>
          <div class="flex items-center">
            <img
              class="w-5"
              src="/@/assets/images/right_arrow.png"
              alt="" />
          </div>
        </div>
      </div>

      <div class="mt-6">
        <van-button
          type="default"
          :border="false"
          class="login_out_btn"
          @click="showLoginOut = true"
          block>
          退出当前账户
        </van-button>
      </div>

      <div class="flex flex-col items-center fixed bottom-20 left-1/2 transition-transform -translate-x-1/2 text-xs text-[#999]">
        <p>鄢陵县盛为网络科技工作室</p>
        <p class="mt-1">
          更新时间:
          <span>2023-07-06 12:12:00</span>
        </p>
      </div>

      <van-popup
        v-model:show="showLoginOut"
        round
        :overlay-style="{
          background: 'rgba(0,0,0,0.4)',
        }"
        position="bottom">
        <div class="flex flex-col">
          <div class="text-xs leading-4.5 text-[rgba(60, 60, 67, 0.6)] text-center px-12 py-4 van-hairline--bottom">
            退出后不会删除任何历史数据，下次登录依然可以使用本账号。
          </div>

          <div
            @click="logout"
            class="text-base text-c_theme h-14 bg-white flex justify-center items-center">
            <p v-if="!loading">退出登录</p>
            <van-loading
              v-if="loading"
              size="22px"
              vertical />
          </div>
          <div class="h-2 bg-c_grey_l"></div>
          <div
            class="text-[#262626] bg-white"
            @click="showLoginOut = false">
            <div
              class="text-base h-14 flex justify-center items-center"
              @click="showLoginOut = false">
              取消
            </div>
          </div>
        </div>
      </van-popup>
    </van-config-provider>
  </div>
</template>

<script setup lang="ts" name="Setting">
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  import { useLoading } from '/@/hooks';
  import { useInfoStore } from '/@/store';
  import { clearToken } from '/@/utils/auth';
  import { sleep } from '/@/utils';

  const router = useRouter();
  const navigateTo = (to: string, query?: any) => router.push({ path: to, query });

  const showLoginOut = ref(false);
  const { loading, setLoading } = useLoading({ initValue: false });
  const infoStore = useInfoStore();

  async function logout() {
    setLoading(true);
    clearToken();
    infoStore.$reset();
    await sleep(1500);
    showLoginOut.value = false;
    router.replace('/login');
  }

  const themeVars = {
    borderColor: '#eeeeee',
  };
</script>

<style scoped>
  .login_out_btn {
    font-size: 17px;
    color: #f02d2d;
    border: none;
    height: 48px;
  }
</style>

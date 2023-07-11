<template>
  <div class="content pt-11">
    <custom-header
      title="账号安全"
      border
      @click-left="router.back()" />

    <van-config-provider :theme-vars="themeVars">
      <div
        class="h-14 pl-4 pr-5 flex justify-between items-center bg-white text-[14px]"
        @click="navigateTo({ type: VerifyPwdEnums.LAST })">
        <p class="text-[#3c3c43]">忘记密码</p>
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
        class="h-14 pl-4 pr-5 flex justify-between items-center bg-white text-[14px]"
        @click="navigateTo({ type: VerifyPwdEnums.FIRST })">
        <p class="text-[#3c3c43]">修改密码</p>
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
      <div class="h-14 pl-4 pr-5 flex justify-between items-center bg-white text-[14px]">
        <p class="text-[#3c3c43]">绑定微信</p>
        <div class="flex items-center">
          <p
            v-if="false"
            class="text-[14px] text-[rgba(60, 60, 67, 0.6)]">
            未绑定
          </p>
          <p
            v-else
            class="text-[14px] text-[rgba(60, 60, 67, 0.6)]">
            212312
          </p>
          <img
            class="w-5"
            src="/@/assets/images/right_arrow.png"
            alt="" />
        </div>
      </div>
    </van-config-provider>
  </div>
</template>

<script setup lang="ts" name="Account">
  import { LocationQueryRaw } from 'vue-router';
  import { VerifyPwdEnums } from './type';

  const router = useRouter();

  const navigateTo = (query?: LocationQueryRaw) => {
    router.push({ name: 'SecureAuth', query });
  };

  const themeVars = {
    borderColor: '#eeeeee',
  };
</script>

<style scoped></style>

<template>
  <div class="content px-4 pt-14">
    <custom-header
      title="钱包详情"
      :border="false"
      @click-left="router.back()" />

    <div class="box rounded-md bg-white">
      <div
        class="px-4"
        :class="{ 'van-hairline--bottom': index + 1 !== payList.length && !item.checked }"
        v-for="(item, index) in payList"
        :key="item.id">
        <p
          class="flex items-center justify-between py-4"
          @click="bindPay(item)">
          <span class="font-bold">{{ item.name }}</span>
          <span
            :class="{ 'rotate-180': item.checked }"
            class="transition-transform origin-center"
            transition="all duration-100 ease-linear">
            <van-icon name="arrow-down" />
          </span>
        </p>

        <div
          v-show="item.checked && item.id === 1"
          :class="{ 'pb-4': index + 1 == payList.length }"
          class="van-hairline--top pt-4">
          <div class="flex flex-col mb-3">
            <div class="text-[14px] font-bold mb-3 flex items-center justify-between">
              <p>
                你的支付宝
                <span class="text-c_theme/80">*</span>
              </p>
              <p class="text-xs text-[#666]">用于你的转账使用</p>
            </div>
            <div class="w-full h-12">
              <input
                class="w-full h-full bg-[#f9f9f9] pl-4 rounded-md placeholder-text-[#6A6A6A] outline-none"
                type="text"
                placeholder="请输入你的支付宝账号" />
            </div>
          </div>

          <div class="flex flex-col mb-3">
            <div class="text-[14px] font-bold mb-3 flex items-center justify-between">
              <p>
                你的真实姓名
                <span class="text-c_theme/80">*</span>
              </p>
              <p class="text-xs text-[#666]">用于验证账号的真实性</p>
            </div>
            <div class="w-full h-12">
              <input
                class="w-full h-full bg-[#f9f9f9] pl-4 rounded-md placeholder-text-[#6A6A6A] outline-none"
                type="text"
                placeholder="请输入你的姓名" />
            </div>
          </div>
        </div>

        <div
          v-show="item.checked && item.id === 2"
          :class="{ 'pb-4': index + 1 == payList.length }"
          class="van-hairline--top pt-4 text-center">
          暂时无法微信提现
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Wallet">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const payList = ref([
    { id: 1, name: '绑定支付宝', checked: true },
    { id: 2, name: '绑定微信', checked: true },
  ]);

  function bindPay(item) {
    item.checked = !item.checked;
  }
</script>

<style scoped>
  .box {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
</style>

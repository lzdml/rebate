<template>
  <div class="content pt-11">
    <custom-header
      :title="currentType"
      :border="false"
      @click-left="router.back()" />

    <van-config-provider :theme-vars="themeVars">
      <div class="p-4">
        <div class="rounded-md bg-white">
          <!-- 忘记密码 -->
          <div v-if="type === VerifyPwdEnums['forget-password']">
            <van-field
              v-model="userInfo.phone"
              :border="false"
              clearable
              label-width="auto"
              placeholder="请输入手机号"
              class="rounded-tl-md rounded-tr-md h-14 flex items-center">
              <template #label>
                <div class="text-black">
                  +86
                  <van-icon name="arrow-down" />
                </div>
              </template>
            </van-field>
            <div class="van-hairline--top"></div>

            <div class="mr-4 flex items-center mt-[1px]">
              <van-field
                v-model="code"
                :border="false"
                clearable
                label-width="auto"
                label-class="ipt_label"
                maxlength="6"
                placeholder="请输入验证码"
                class="rounded-md h-14 flex items-center" />
              <button
                type="button"
                class="text-[14px] text-c_theme border-none bg-transparent whitespace-nowrap"
                :disabled="isStart"
                @click="onStartDown">
                {{ getButtonText }}
              </button>
            </div>
          </div>

          <div v-if="type === VerifyPwdEnums['update-password']">
            <van-field
              v-model="oldPassword"
              :border="false"
              clearable
              label-width="auto"
              placeholder="请输入原密码"
              label-class="ipt_label"
              label="原密码"
              class="rounded-tl-md rounded-tr-md h-14 flex items-center" />
          </div>

          <div class="van-hairline--top mb-[1px]"></div>
          <van-field
            v-model="password"
            :border="false"
            label-width="56"
            :type="pwdShow ? 'password' : 'text'"
            label-class="ipt_label"
            label="新密码"
            clearable
            placeholder="请输入密码"
            class="h-14 flex items-center">
            <template #right-icon>
              <div
                class="w-5 h-5 -mt-1"
                @click="pwdShow = !pwdShow">
                <img
                  v-if="pwdShow"
                  class="w-full h-full image-render-pixel object-contain object-center"
                  src="/@/assets/images/close_eye.png"
                  alt="" />
                <img
                  v-else
                  class="w-full h-full image-render-pixel object-contain object-center"
                  src="/@/assets/images/open_eye.png"
                  alt="" />
              </div>
            </template>
          </van-field>
          <div class="van-hairline--top mb-[1px]"></div>
          <van-field
            v-model="confirm_password"
            :border="false"
            :type="confirmPwdShow ? 'password' : 'text'"
            label-width="56"
            label-class="ipt_label"
            label="确认密码"
            clearable
            placeholder="请再次输入密码"
            class="rounded-bl-md rounded-br-md h-14 flex items-center">
            <template #right-icon>
              <div
                class="w-5 h-5 -mt-1"
                @click="confirmPwdShow = !confirmPwdShow">
                <img
                  v-if="confirmPwdShow"
                  class="w-full h-full image-render-pixel object-contain object-center"
                  src="/@/assets/images/close_eye.png"
                  alt="" />
                <img
                  v-else
                  class="w-full h-full image-render-pixel object-contain object-center"
                  src="/@/assets/images/open_eye.png"
                  alt="" />
              </div>
            </template>
          </van-field>
        </div>

        <div class="pt-10">
          <van-button
            class="confirm_btn"
            type="primary"
            round
            block
            color="#F02D2D"
            v-if="type === VerifyPwdEnums['forget-password']"
            @click="submitPassword">
            提交
          </van-button>
          <van-button
            class="confirm_btn"
            type="primary"
            round
            block
            color="#F02D2D"
            v-if="type === VerifyPwdEnums['update-password']"
            @click="updatePassword">
            提交
          </van-button>
        </div>
      </div>
    </van-config-provider>
  </div>
</template>

<script setup lang="ts" name="SecureAuth">
  import { computed } from 'vue';
  import { LocationQueryValue, useRoute, useRouter } from 'vue-router';
  import { useCode } from '/@/hooks';
  import { VerifyPwdEnums, TitleEnum } from '/@/model/enum';

  const router = useRouter();
  const route = useRoute();
  const type = (route.query.type as LocationQueryValue) ?? TitleEnum['update-password'];
  const currentType = computed(() => TitleEnum[type]);

  const password = ref('');
  const confirm_password = ref('');
  const oldPassword = ref('');
  const pwdShow = ref(true);
  const confirmPwdShow = ref(true);
  const submitPassword = async () => {};
  const updatePassword = async () => {};

  const { isStart, startDown, getButtonText } = useCode();
  const onStartDown = () => {
    startDown();
  };

  const userInfo = {
    phone: '',
  };
  const code = ref('');

  const themeVars = {
    fieldInputDisabledTextColor: '#000000',
    buttonDisabledOpacity: '#F02D2D',
    fieldLabelColor: '#000000',
  };
</script>

<style scoped></style>

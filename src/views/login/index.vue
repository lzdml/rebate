<template>
  <div class="content pt-25">
    <div class="pl-8">
      <h1 class="text-c_theme font-bold mb-2">xx优选</h1>
      <p class="text-[#999]">未注册过的手机号将自动创建账号</p>
    </div>

    <van-config-provider :theme-vars="themeVars">
      <div class="px-4 mb-14">
        <div class="mb-3 rounded-md bg-white mt-10">
          <van-field
            v-model="loginParams.account"
            :border="false"
            clearable
            label-width="auto"
            label-class="ipt_label"
            label="手机号"
            placeholder="请输入手机号"
            class="p-4 h-14 bg-transparent" />
          <div class="van-hairline--top mb-[1px]"></div>
          <div
            class="pr-4 flex items-center"
            v-if="getShow(LoginStateEnum.CODE)">
            <van-field
              v-model="loginParams.code"
              :border="false"
              clearable
              label-width="auto"
              label-class="ipt_label"
              label="验证码"
              maxlength="6"
              placeholder="请输入验证码"
              class="ipt" />
            <button
              class="text-[14px] text-c_theme border-none p-0 bg-transparent whitespace-nowrap"
              :disabled="isStart"
              @click="startDown">
              {{ getButtonText }}
            </button>
          </div>

          <van-field
            v-if="getShow(LoginStateEnum.PASSWORD)"
            v-model="loginParams.pwd"
            :border="false"
            type="password"
            label-width="auto"
            label-class="ipt_label"
            label="密码"
            clearable
            placeholder="请输入密码"
            class="ipt" />
        </div>
        <div class="pl-3 mb-14 flex items-center">
          <div
            class="w-3.5 h-3.5 rounded-full flex justify-center items-center"
            border="~ solid #f02d2d"
            @click="loginParams.agree = !loginParams.agree">
            <div :class="{ 'w-2 h-2 rounded-full bg-c_theme': loginParams.agree }"></div>
          </div>
          <p class="text-xs ml-1.5">
            我已阅读并同意
            <span
              class="text-c_theme"
              @click="navigateTo('Protocol', { type: ProtocolEnum.privacy })">
              《{{ ProtocolType[ProtocolEnum.privacy] }}》
            </span>
            与
            <span
              class="text-c_theme"
              @click="navigateTo('Protocol', { type: ProtocolEnum.serve })">
              《{{ ProtocolType[ProtocolEnum.serve] }}》
            </span>
          </p>
        </div>

        <van-button
          type="primary"
          block
          round
          color="#F02D2D"
          class="login_btn"
          :loading="loading"
          @click="login">
          登录
        </van-button>

        <div class="text-xs font-400 flex items-center justify-center mb-23">
          <p
            class="switch_login_pwd"
            @click="setLoginState(LoginStateEnum.PASSWORD)"
            v-if="getShow(LoginStateEnum.CODE)">
            切换密码登录
          </p>
          <p
            class="switch_login_pwd"
            @click="setLoginState(LoginStateEnum.CODE)"
            v-if="!getShow(LoginStateEnum.CODE)">
            切换验证码登录
          </p>
          <p class="w-px h-2 bg-black mx-3"></p>
          <p
            class="switch_forget_pwd"
            @click="navigateTo('SecureAuth', { type: 'forget-password' })">
            忘记密码
          </p>
        </div>
      </div>
    </van-config-provider>
  </div>
</template>

<script setup lang="ts" name="Login">
  import { useCode, useLoading } from '/@/hooks';
  import { useLoginState, LoginStateEnum } from './useLogin';
  import { router } from '/@/router';
  import { ProtocolEnum, ProtocolType } from '/@/model/enum';
  import { getOtherQuery, sleep } from '/@/utils';
  import { setToken } from '/@/utils/auth';

  const { isStart, startDown, getButtonText } = useCode();

  const loginParams = reactive({
    account: '',
    code: '',
    pwd: '',
    agree: false,
  });

  const { setLoginState, getShow, currentState } = useLoginState();

  const navigateTo = (name: string, query: any) => {
    return router.push({ name, query });
  };

  const state = reactive({
    redirect: '',
    otherQuery: {},
  });
  const route = useRoute();
  console.log('route :>> ', route);
  watch(
    () => route.query,
    (query) => {
      console.log('query :>> ', query);
      if (query) {
        state.redirect = query.redirect?.toString() ?? '';
        state.otherQuery = getOtherQuery(query);
      }
    },
    {
      immediate: true,
    },
  );
  const { loading, setLoading } = useLoading({ initValue: false });
  const login = async () => {
    setLoading(true);
    // currentState 0 验证码登录
    const isCodeLogin = getShow(LoginStateEnum.CODE);
    const isPwdLogin = getShow(LoginStateEnum.PASSWORD);
    setToken('token');
    await sleep(1500);
    setLoading(false);
    const options = { path: state.redirect || '/home', query: state.otherQuery };
    router.replace(options);
  };

  const themeVars = {
    fieldLabelColor: '#000000',
    fieldLabelMarginRight: '24px',
    buttonDisabledOpacity: '#F02D2D',
  };
</script>

<style scoped lang="less">
  .van-cell {
    padding: 16px;
    height: 52px;
    background-color: transparent;

    &_value {
      margin-left: 12px;
    }
  }

  .login_btn {
    font-size: 16px;
    margin-bottom: 24px;
  }
</style>

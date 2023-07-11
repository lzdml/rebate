export enum LoginStateEnum {
  // 验证码登录
  CODE,
  // 密码登录
  PASSWORD,
  // 忘记密码
  // FORGET_PASSWORD,
}

export function useLoginState() {
  const currentState = ref(LoginStateEnum.CODE);

  function getShow(type: LoginStateEnum) {
    return currentState.value === type;
  }

  function setLoginState(state: LoginStateEnum) {
    currentState.value = state;
  }

  return {
    setLoginState,
    currentState,
    getShow,
  };
}

import { authInstance, instance } from "../utils/instance.js";

interface IuserInfo {
  username: any;
  password: string;
}

const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

export const login = async ({ username, password }: IuserInfo) => {
  try {
    const userInfo = { username, password };

    const { data } = await authInstance.post(`/api/auth/login`, userInfo);

    if (data) {
      // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
      authInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.token}`;
      return data;
    }
  } catch (error: any) {
    return error;
  }
};

export const logout = async () => {
  try {
    const { data } = await authInstance.post("/api/auth/logout", {});
    if (data) {
      return data;
    }
  } catch (error: any) {
    console.log(error);
  }
};

export const onSilentRefresh = async (name: string) => {
  await authInstance
    .post(`/api/auth/refresh?username=${name}`)
    .then(onLoginSuccess)
    .catch((error) => {
      // ... 로그인 실패 처리
    });
};

export const onLoginSuccess = (response: any) => {
  const { accessToken } = response.data;

  // accessToken 설정
  authInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;

  // accessToken 만료하기 1분 전에 로그인 연장
  setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
};

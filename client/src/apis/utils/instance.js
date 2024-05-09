import axios from "axios";
import Cookies from "js-cookie";
import { onSilentRefresh } from "../services/user";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const authInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

/* // 요청 인터셉터 추가
authInstance.interceptors.request.use(
  (res) => {
    console.log("인터셉터");
    return res;
  },
  // 200번대 응답이 아닐 경우 처리
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    console.log("인터셉터 에러");
    console.log(status, "status");
    //토큰이 만료되을 때
    if (status === 401) {
      if (error.response.data.ok === false) {
        const originRequest = config;
        //리프레시 토큰 api

        try {
          const response = await onSilentRefresh();
          //리프레시 토큰 요청이 성공할 때
          if (response.status === 200) {
            const newAccessToken = response.data.token;

            axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
            //진행중이던 요청 이어서하기
            originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            //진행중이던 요청 이어서하기
            return axios(originRequest);
          } else {
            // 리프레시 토큰 요청 실패
            window.location.replace("/admin");
            return Promise.reject(error);
          }
        } catch (refreshError) {
          //리프레시 토큰 요청이 실패할때(리프레시 토큰도 만료되었을때 = 재로그인 안내)
          alert("토큰이 만료되었습니다. 로그인 페이지로 이동합니다.");
          console.error("리프레시 토큰 요청 오류:", refreshError);
          window.location.replace("/admin");
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  }
); */

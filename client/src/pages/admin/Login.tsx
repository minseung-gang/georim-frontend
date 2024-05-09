import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import * as Admin from "../../styles/admin/login.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../../apis/services/user";
import { LoginState } from "../../recoil/LoginState";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../asset/images/logo_5.png";
import { authInstance } from "../../apis/utils/instance";

const schema = yup.object().shape({
  id: yup.string().required("아이디를 입력해주세요"),
  pw: yup.string().required("비밀번호를 입력해주세요"),
});

function Login() {
  const { state } = useLocation();
  const [user, setUser] = useRecoilState(LoginState);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const handleLogin = async () => {
    try {
      const { id, pw } = getValues();

      const response = await login({ username: id, password: pw });

      // 유저정보 전역 상태에 저장
      setUser({ username: response.username });
      if (response.ok) {
        navigate("/admin/home");
      } else {
        setError("id", { message: "아이디 혹은 비밀번호를 다시 확인해주세요" });
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Admin.Wrapper>
      <div className="inner">
        <div className="logo_container">
          <img src={Logo} alt="로고 이미지" />
        </div>
        <form method="post" onSubmit={handleSubmit(handleLogin)}>
          <div className="frm_con">
            <div className="input_form">
              <strong className="title">아이디</strong>
              <div>
                <input
                  className="type_id"
                  type="text"
                  autoComplete="username"
                  placeholder="아이디를 입력해주세요."
                  {...register("id")}
                />
              </div>
            </div>
            <div className="input_form">
              <strong className="title">비밀번호</strong>
              <div>
                <input
                  className="type_password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="비밀번호를 입력해주세요."
                  {...register("pw")}
                />
              </div>
            </div>
          </div>
          <div className="error_txt">
            <p>{errors.id?.message || errors.pw?.message}</p>
          </div>
          <div className="button">
            <button
              type="button"
              className="signin_btn large"
              onClick={handleSubmit(handleLogin)}
            >
              로그인
            </button>
          </div>
        </form>
      </div>
      <footer>
        <p>Copyright © 2023. Co.GEORIM.All rights reserved</p>
      </footer>
    </Admin.Wrapper>
  );
}

export default Login;

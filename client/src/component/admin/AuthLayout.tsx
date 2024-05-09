import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { LoginState } from "../../recoil/LoginState";
import { useRecoilValue } from "recoil";

import { onSilentRefresh } from "../../apis/services/user";
const AuthLayout = () => {
  const [refreshCompleted, setRefreshCompleted] = useState(true);
  /*  useEffect(() => {
    async function refreshAndNavigate() {
      try {
        await onSilentRefresh(user.username);
        setRefreshCompleted(true);
      } catch (error) {
        console.error("Error during silent refresh:", error);
      }
    }
    refreshAndNavigate();
  }, []); */
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = useRecoilValue(LoginState);

  useEffect(() => {
    if (!user.username) {
      navigate("/admin", { state: pathname });
    }
  }, []);

  return <div>{refreshCompleted && <Outlet />}</div>;
};

export default AuthLayout;

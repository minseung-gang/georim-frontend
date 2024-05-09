import React, { useEffect } from "react";
import SideBar from "../../component/admin/SideBar";
import * as Styles from "../../styles/admin/home.styled";
import Layout from "../../component/admin/Layout";
import { LoginState } from "../../recoil/LoginState";
import { useRecoilValue } from "recoil";
import { onSilentRefresh } from "../../apis/services/user";
import { authInstance } from "../../apis/utils/instance";

function AdminHome() {
  const user = useRecoilValue(LoginState);
  async function refreshAndNavigate() {
    try {
      const response = await authInstance.get("/auth/me");
      console.log(response, "response");
    } catch (error) {
      console.error("Error during silent refresh:", error);
    }
  }

  return (
    <Layout>
      <div>
        <button onClick={refreshAndNavigate}>테스트</button>
      </div>
    </Layout>
  );
}

export default AdminHome;

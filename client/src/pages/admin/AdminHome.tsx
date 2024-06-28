import React, { useEffect } from "react";
import SideBar from "../../component/admin/SideBar";
import * as Styles from "../../styles/admin/home.styled";
import Layout from "../../component/admin/Layout";
import { LoginState } from "../../recoil/LoginState";
import { useRecoilValue } from "recoil";
import { onSilentRefresh } from "../../apis/services/user";
import { authInstance } from "../../apis/utils/instance";

function AdminHome() {
  return (
    <Layout>
      <div></div>
    </Layout>
  );
}

export default AdminHome;

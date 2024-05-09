import React from "react";
import SideBar from "./SideBar";
import * as Styles from "../../styles/admin/home.styled";
import { logout } from "../../apis/services/user";
import { useNavigate } from "react-router-dom";
import { authInstance } from "../../apis/utils/instance";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  header?: boolean;
  page?: string;
}

function Layout({ children, title, header = true, page }: LayoutProps) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const res = await logout();
    if (res) {
      delete authInstance.defaults.headers.common["Authorization"];
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      navigate("/admin");
    }
  };
  return (
    <Styles.Wrapper $header={header}>
      <div className="inner">
        <SideBar />
        <div className="content">
          {header && (
            <header>
              <div className="header-inner">
                <p className="header-title">{title}</p>
                <div>
                  <button
                    className="logout"
                    type="button"
                    onClick={handleLogout}
                  >
                    로그아웃
                  </button>
                </div>
              </div>
            </header>
          )}
          <main>
            <div className="inner">{children}</div>
          </main>
        </div>
      </div>
    </Styles.Wrapper>
  );
}

export default Layout;

import React from "react";
import * as Styles from "../../styles/admin/SideBar.styled";
import logo from "../../asset/images/logo_4.png";
import DropDown from "../molecule/Dropdown";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { NavigateState } from "../../recoil/provider";

interface SideBarProps {
  active?: string;
}

function SideBar({ active }: SideBarProps) {
  const setState = useSetRecoilState(NavigateState);
  const navigate = useNavigate();
  const moveToPage = (subPage: string, currentPage: string) => {
    setState({
      subPage,
      currentPage,
    });
    navigate("/admin/posts");
  };
  return (
    <Styles.Wrapper>
      <div className="main_logo">
        <a href="/admin/home">
          <img src={logo} alt="로고 이미지" />
        </a>
      </div>
      <nav>
        <DropDown>
          <div className="list">
            <div className="at-category">
              <p>사이트 관리</p>
            </div>
            <div className="at-gnb">
              <div className="at-container">
                <DropDown.Trigger
                  icon1={<Styles.DropUpIcon />}
                  icon2={<Styles.DropDownIcon />}
                >
                  <div className="at-title">
                    <Styles.WritingIcon />
                    <p>컨텐츠 관리</p>
                  </div>
                </DropDown.Trigger>
                <DropDown.Dropdown>
                  <p
                    className="at-lnb"
                    onClick={() => moveToPage("컨텐츠관리", "매물관리")}
                  >
                    매물 관리
                  </p>
                </DropDown.Dropdown>
              </div>
            </div>
          </div>
        </DropDown>
      </nav>
    </Styles.Wrapper>
  );
}

export default SideBar;

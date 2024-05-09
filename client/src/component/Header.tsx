import React, { useEffect, useState, useRef } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import * as Component from "../styles/Header.styled";
import { Link } from "react-router-dom";
import { headerStates } from "../recoil/modal";
import { useRecoilState } from "recoil";
import HamburgerModal from "./HamburgerModal";

function Header() {
  const [headerState, setHeaderState] = useRecoilState(headerStates);
  const { headerHover, headerDefault, headerBlur } = headerState;
  const [isOpened, toggle] = useState(false);
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [offsetX, setOffsetX] = useState(0);

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    const offsetX = e.currentTarget.offsetLeft;
    setHeaderState((prev) => ({ ...prev, headerHover: true }));
    setOffsetX(offsetX);
  };

  const handleMouseLeave = () => {
    setHeaderState((prev) => ({ ...prev, headerHover: false }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.scrollY;
      if (moving <= 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  return (
    <Component.Header
      $active={headerHover} // GNB를 호버했을 때 드롭다운하는 역할
      $default={headerDefault} // 헤더 배경색의 테마를 설정하는 역할(home에서는 기본이 흰색, 이벤트시 검은색으로 돌아감)
      $visible={visible} //헤더의 속성이 fixed인지 아닌지 설정하는 역할
      $blur={headerBlur}
    >
      <Component.Inner $active={headerHover} $visible={visible}>
        <Component.Content>
          <Link to="/">
            <Component.Logo />
          </Link>

          {isBrowser && (
            <Component.Nav>
              <Component.GNB>
                <Component.GnbBar style={{ left: offsetX }} />
                <Component.Menu
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Component.Container className="gnb_text">
                    <Link to="/about" translate="no">
                      ABOUT
                    </Link>
                    <Component.LNB $active={headerHover} $visible={visible}>
                      <Component.LnbItem>
                        <Link to="/about" translate="no">
                          회사소개
                        </Link>
                      </Component.LnbItem>
                      <Component.LnbItem>
                        <Link to="/about/greeting" translate="no">
                          인사말
                        </Link>
                      </Component.LnbItem>
                      <Component.LnbItem>
                        <Link to="/about/philosophy" translate="no">
                          지속가능경영
                        </Link>
                      </Component.LnbItem>
                      <Component.LnbItem>
                        <Link to="/about/history" translate="no">
                          주요연혁
                        </Link>
                      </Component.LnbItem>
                    </Component.LNB>
                  </Component.Container>
                </Component.Menu>
                <Component.Menu
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Component.Container className="gnb_text">
                    <Link to="/business/develop" translate="no">
                      BUSINESS
                    </Link>
                    <Component.LNB $active={headerHover} $visible={visible}>
                      <Component.LnbItem>
                        <Link to="/business/develop" translate="no">
                          개발사업
                        </Link>
                      </Component.LnbItem>
                      <Component.LnbItem>
                        <Link to="/business/sales" translate="no">
                          입주사업
                        </Link>
                      </Component.LnbItem>
                      <Component.LnbItem>
                        <Link to="/business/offer" translate="no">
                          분양사업
                        </Link>
                      </Component.LnbItem>
                    </Component.LNB>
                  </Component.Container>
                </Component.Menu>
                <Component.Menu
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Component.Container className="gnb_text">
                    <Link to="/project/development" translate="no">
                      PROJECTS
                    </Link>
                    <Component.LNB $active={headerHover} $visible={visible}>
                      <Component.LnbItem>
                        <Link to="/project/development" translate="no">
                          시행·개발 실적
                        </Link>
                      </Component.LnbItem>
                      <Component.LnbItem>
                        <Link to="/project/sales" translate="no">
                          입주·분양 실적
                        </Link>
                      </Component.LnbItem>
                    </Component.LNB>
                  </Component.Container>
                </Component.Menu>
                <Component.Menu
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Component.Container className="gnb_text">
                    <Link to="/news/salesApt" translate="no">
                      NEWS
                    </Link>
                    <Component.LNB $active={headerHover} $visible={visible}>
                      <Component.LnbItem>
                        <Link to="/news/salesApt" translate="no">
                          분양정보
                        </Link>
                      </Component.LnbItem>
                      <Component.LnbItem>
                        <Link to="/news" translate="no">
                          보도자료
                        </Link>
                      </Component.LnbItem>
                      <Component.LnbItem>
                        <Link to="/news/promotion" translate="no">
                          홍보영상
                        </Link>
                      </Component.LnbItem>
                    </Component.LNB>
                  </Component.Container>
                </Component.Menu>
                <Component.Menu
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Component.Container className="gnb_text">
                    <Link to="/contact" translate="no">
                      CONTACT
                    </Link>
                    <Component.LNB $active={headerHover} $visible={visible}>
                      <Component.LnbItem>
                        <Link to="/contact" translate="no">
                          문의하기
                        </Link>
                      </Component.LnbItem>
                      <Component.LnbItem>
                        <Link to="/contact/empInfo" translate="no">
                          채용정보
                        </Link>
                      </Component.LnbItem>
                      <Component.LnbItem>
                        <Link to="/contact/directions" translate="no">
                          오시는길
                        </Link>
                      </Component.LnbItem>
                    </Component.LNB>
                  </Component.Container>
                </Component.Menu>
              </Component.GNB>
            </Component.Nav>
          )}

          <Component.Hamburger
            className="ham"
            onClick={() => toggle(!isOpened)}
          />
        </Component.Content>
      </Component.Inner>
      <Component.DropDown $hover={headerHover} $visible={visible} />
      <HamburgerModal isOpened={isOpened} toggle={toggle} />
    </Component.Header>
  );
}

export default Header;

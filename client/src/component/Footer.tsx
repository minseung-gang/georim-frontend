import React from "react";
import Logo from "../asset/images/title2.png";
import * as Ft from "../styles/Footer.styled";
function Footer() {
  return (
    <Ft.Wrapper role="contentinfo">
      <Ft.Inner>
        <Ft.Upper>
          <Ft.Heading translate="no">
            프로젝트의 시작부터{" "}
            <span translate="no">
              <span>성공적인 마무리까지,</span>
              <span>거림이 늘 함께합니다.</span>
            </span>
          </Ft.Heading>
          <Ft.UpperContent>
            <Ft.ContactInfo>
              <div>
                <Ft.SectionTitle>CUSTOMER CENTER</Ft.SectionTitle>
                <Ft.Phone>1577-7493</Ft.Phone>
              </div>
              <Ft.Management>
                <div>
                  <p>상담시간</p>
                  <p>09:30 - 18:00</p>
                </div>
                <div>
                  <p>점심시간</p>
                  <p>12:00 - 13:00</p>
                </div>
              </Ft.Management>
            </Ft.ContactInfo>
            <Ft.Nav>
              <Ft.Gnb>
                <p translate="no">ABOUT</p>
                <Ft.Lnb>
                  <a href="/about" translate="no">
                    회사소개
                  </a>
                  <a href="/about/greeting" translate="no">
                    인사말
                  </a>
                  <a href="/about/philosophy" translate="no">
                    지속가능경영
                  </a>
                  <a href="/about/history" translate="no">
                    주요연혁
                  </a>
                </Ft.Lnb>
              </Ft.Gnb>
              <Ft.Gnb>
                <p translate="no">BUSINESS</p>
                <Ft.Lnb>
                  <a href="/business/develop" translate="no">
                    개발사업
                  </a>
                  <a href="/business/sales" translate="no">
                    입주사업
                  </a>
                  <a href="/business/offer " translate="no">
                    분양사업
                  </a>
                </Ft.Lnb>
              </Ft.Gnb>
              <Ft.Gnb>
                <p translate="no">PROJECT</p>
                <Ft.Lnb>
                  <a href="/project/development" translate="no">
                    시행·개발 실적
                  </a>
                  <a href="/project/sales" translate="no">
                    분양·입주 실적
                  </a>
                </Ft.Lnb>
              </Ft.Gnb>
              <Ft.Gnb>
                <p translate="no">NEWS</p>
                <Ft.Lnb>
                  <a href="/news/salesApt" translate="no">
                    분양정보
                  </a>
                  <a href="/news" translate="no">
                    보도자료
                  </a>
                  <a href="/news/promotion" translate="no">
                    홍보영상
                  </a>
                </Ft.Lnb>
              </Ft.Gnb>
              <Ft.Gnb>
                <p translate="no">CONTACT</p>
                <Ft.Lnb>
                  <a href="/contact" translate="no">
                    문의하기
                  </a>
                  <a href="/contact/empInfo" translate="no">
                    채용정보
                  </a>
                  <a href="/contact/directions" translate="no">
                    오시는길
                  </a>
                </Ft.Lnb>
              </Ft.Gnb>
            </Ft.Nav>
          </Ft.UpperContent>
        </Ft.Upper>
        <Ft.Lower>
          <Ft.FlexColumn className="copyright">
            <Ft.CompanyName>(주)거림</Ft.CompanyName>
            <Ft.Copyright>© 2023. Co.GEORIM.All rights reserved</Ft.Copyright>
          </Ft.FlexColumn>
          <Ft.FlexColumn className="address">
            <address>
              대구광역시 수성구 청수로 26길 46, 10층 1004호(두산동, 앤플레이스)
            </address>
            <Ft.ContactDetails>
              <p className="phone">대표전화 : 1577-7493</p>
              <p className="fax">팩스 : 070-8230-6989</p>
              <p className="email">E-mail : georim8307@naver.com</p>
            </Ft.ContactDetails>
          </Ft.FlexColumn>
          <Ft.LegalLink className="legal">
            <p>개인정보 보호방침</p>
            <p>고객문의</p>
          </Ft.LegalLink>
        </Ft.Lower>
      </Ft.Inner>
    </Ft.Wrapper>
  );
}

export default Footer;

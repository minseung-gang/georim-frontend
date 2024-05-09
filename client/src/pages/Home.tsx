import { headerStates } from "../recoil/modal";
import { useRecoilState, useRecoilValue } from "recoil";
import Banner from "../component/home/Banner";
import BusinessAchievements from "../component/home/BusinessAchievements";
import Projects from "../component/home/Projects";
import SalesInfo from "../component/home/SalesInfo";
import ContactUs from "../component/home/ContactUs";
import { FullPageScroll } from "../component/home/FullFageScroll";
import BrandIdentity from "../component/home/BrandIdentity";
import Cursor from "../component/Cursor";
import styled from "styled-components";
import { isBrowser, isMobile } from "react-device-detect";
import { useEffect } from "react";

function Home() {
  const [headerState, setHeaderState] = useRecoilState(headerStates);

  const handleMouseEnter = () => {
    setHeaderState((prev) => ({ ...prev, headerDefault: true }));
  };
  const handleMouseLeave = () => {
    setHeaderState((prev) => ({ ...prev, headerDefault: false }));
  };

  useEffect(() => {
    if (isBrowser) {
      handleMouseLeave();
    } else {
      handleMouseEnter();
    }
  }, []);

  return (
    <Wrapper>
      <Cursor />
      {isBrowser && (
        <FullPageScroll>
          <Banner />
          <BrandIdentity />
          <BusinessAchievements />
          <Projects />
          <SalesInfo />
          <ContactUs />
        </FullPageScroll>
      )}
      {isMobile && (
        <>
          <Banner />
          <BrandIdentity />
          <BusinessAchievements />
          <Projects />
          <SalesInfo />
          <ContactUs />
        </>
      )}
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  min-height: calc(var(--vh, 1vh) * 100);

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

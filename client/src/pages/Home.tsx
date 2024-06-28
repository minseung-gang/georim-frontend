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
import { useEffect, useMemo, useState } from "react";
import { getPostsByCategory, getPromotionPosts } from "../apis/services/posts";
import { ICardType } from "../types/type";
import Footer from "../component/Footer";

function Home() {
  const [headerState, setHeaderState] = useRecoilState(headerStates);
  const [salesData, setData] = useState<ICardType[]>([]);
  const [promotionData, setPromotionData] = useState([]);

  const handleMouseEnter = () => {
    setHeaderState((prev) => ({ ...prev, headerDefault: true }));
  };
  const handleMouseLeave = () => {
    setHeaderState((prev) => ({ ...prev, headerDefault: false }));
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const sales = await getPostsByCategory("sales");
        const promotions = await getPromotionPosts();
        setData(sales);
        setPromotionData(promotions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (salesData.length === 0) {
      fetchData();
    }
  }, []);

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
          <Projects props={salesData} />
          <SalesInfo props={promotionData} />
          <ContactUs />
          <Footer />
        </FullPageScroll>
      )}
      {isMobile && (
        <>
          <Banner />
          <BrandIdentity />
          <BusinessAchievements />
          <Projects props={salesData} />
          <SalesInfo props={promotionData} />
          <ContactUs />
          <Footer />
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

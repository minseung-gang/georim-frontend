import React, { useEffect, useState } from "react";
import { promotionData } from "../../util/saleData";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { headerStates } from "../../recoil/modal";
import Layout from "../../component/Layout";
import * as Sales from "../../styles/news/saleApartment.styled";
import PromotionCard from "../../component/news/PromotionCard";
import Breadcrumb from "../../component/Breadcrumb";
import {
  getPostsByCategory,
  getPromotionPosts,
} from "../../apis/services/posts";

function SaleApartment() {
  const [state, setState] = useRecoilState(headerStates);
  const [data, setData] = useState([]);

  useEffect(() => {
    setState((prev) => ({ ...prev, headerDefault: false }));
    window.scrollTo(0, 0);
    async function fetchData() {
      try {
        const promotions = await getPromotionPosts();

        setData(promotions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (data?.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <Layout>
      <Sales.Inner>
        <Breadcrumb sections={["NEWS", "분양정보"]} />

        <Sales.ContentSection>
          <Sales.TitleContainer>
            <Sales.SectionTitle
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              translate="no"
            >
              분양정보
            </Sales.SectionTitle>
          </Sales.TitleContainer>

          <Sales.PromotionCard>
            {data.map((item, idx) => {
              return <PromotionCard key={idx} data={item} idx={idx} />;
            })}
          </Sales.PromotionCard>
        </Sales.ContentSection>
      </Sales.Inner>
    </Layout>
  );
}

export default SaleApartment;

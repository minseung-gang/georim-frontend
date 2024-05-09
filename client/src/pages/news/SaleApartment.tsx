import React, { useEffect } from "react";
import { promotionData } from "../../util/saleData";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { headerStates } from "../../recoil/modal";
import Layout from "../../component/Layout";
import * as Sales from "../../styles/news/saleApartment.styled";
import PromotionCard from "../../component/news/PromotionCard";
import Breadcrumb from "../../component/Breadcrumb";

function SaleApartment() {
  const [state, setState] = useRecoilState(headerStates);

  useEffect(() => {
    setState((prev) => ({ ...prev, headerDefault: false }));
    window.scrollTo(0, 0);
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
            {promotionData.map((item, idx) => {
              return <PromotionCard key={idx} data={item} idx={idx} />;
            })}
          </Sales.PromotionCard>
        </Sales.ContentSection>
      </Sales.Inner>
    </Layout>
  );
}

export default SaleApartment;

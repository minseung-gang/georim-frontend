import React, { useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import * as News from "../../styles/news/news.styled";
import { newsData } from "../../util/newsData";
import { useRecoilState } from "recoil";
import { headerStates } from "../../recoil/modal";
import NewsLayout_1 from "../../component/news/newsroom/NewsLayout_1";
import NewsLayout_2 from "../../component/news/newsroom/NewsLayout_2";
import NewsLayout_3 from "../../component/news/newsroom/NewsLayout_3";
import { NewsDataType } from "../../types/type";
import Layout from "../../component/Layout";
import Title from "../../component/Title";
import Breadcrumb from "../../component/Breadcrumb";

function NewsDetail() {
  const [state, setState] = useRecoilState(headerStates);

  useEffect(() => {
    setState((prev) => ({ ...prev, headerDefault: false }));
  }, []);
  const [searchParams] = useSearchParams();

  const buildOrd = parseInt(searchParams.get("build_ord") ?? "") - 1;
  const layoutType = parseInt(searchParams.get("layout_type") ?? "");

  let LayoutComponent: React.ComponentType<{ data: NewsDataType }> | undefined;

  switch (layoutType) {
    case 1:
      LayoutComponent = NewsLayout_1;
      break;
    case 2:
      LayoutComponent = NewsLayout_2;
      break;
    case 3:
      LayoutComponent = NewsLayout_3;
      break;
    default:
      break;
  }

  return (
    <News.Wrapper>
      <News.Inner>
        <Breadcrumb sections={["NEWS", "보도자료"]} />
        <News.DetailContainer>
          <News.DetailTitle>
            <News.TitleText>
              <Title data={newsData[buildOrd].primaryTitle} />
              <Title data={newsData[buildOrd].secondaryTitle} delay={0.25} />
            </News.TitleText>
            <News.PostDate>{newsData[buildOrd].date}</News.PostDate>
          </News.DetailTitle>
          <News.DetailContent>
            {LayoutComponent && <LayoutComponent data={newsData[buildOrd]} />}
          </News.DetailContent>
        </News.DetailContainer>
      </News.Inner>
    </News.Wrapper>
  );
}

export default NewsDetail;

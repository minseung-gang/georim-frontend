import React, { useEffect } from "react";
import * as News from "../../../styles/news/news.styled";
import { NewsDataType } from "../../../types/type";
import { useNavigate } from "react-router-dom";

interface NewsLayoutProps {
  data: NewsDataType;
}

const NewsLayout_1: React.FC<NewsLayoutProps> = ({ data }) => {
  const { img, pageLink, text } = data;
  const navigate = useNavigate();
  useEffect(() => {
    // 페이지 이동 시 스크롤 위치를 최상단으로 이동
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <News.DetailPostLayout>
        <div>
          <img src={img.main} alt="보도자료 메인 이미지" />
        </div>

        <p>{text[0]}</p>

        <News.FlexRow className="cols-fraction-1-4-1">
          {img.sub1?.map((img) => (
            <img src={img} alt="보도자료 참고 이미지" />
          ))}
        </News.FlexRow>
        <p>{text[1]}</p>
        {img.sub2?.map((img) => (
          <img src={img} alt="보도자료 참고 이미지" />
        ))}

        <p>{text[2]}</p>
      </News.DetailPostLayout>
      <News.RelatedArticles>
        <p>*관련 보도자료</p>
        <div>
          {pageLink.map((item, idx) => {
            return (
              <News.ArticleContainer key={idx}>
                <News.PostCompany>{item.company}:</News.PostCompany>
                <News.PostLink href={item.link}>{item.link}</News.PostLink>
              </News.ArticleContainer>
            );
          })}
        </div>
      </News.RelatedArticles>

      <News.BackButton onClick={() => navigate("/news")}>목록</News.BackButton>
    </div>
  );
};

export default NewsLayout_1;

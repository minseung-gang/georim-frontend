import React, { useEffect } from "react";
import { NewsDataType } from "../../../types/type";
import * as News from "../../../styles/news/news.styled";
import { useNavigate } from "react-router-dom";

interface NewsLayoutProps {
  data: NewsDataType;
}

const NewsLayout_2: React.FC<NewsLayoutProps> = ({ data }) => {
  const navigate = useNavigate();
  useEffect(() => {
    // 페이지 이동 시 스크롤 위치를 최상단으로 이동
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <News.DetailPostLayout>
        <div>
          <img src={data.img.main} alt="보도자료 메인 이미지" />
        </div>

        {data.text.map((item, idx) => {
          return <p key={idx}>{item}</p>;
        })}
      </News.DetailPostLayout>
      <News.RelatedArticles>
        <p>*관련 보도자료</p>
        <News.ArticlesForm>
          {data.pageLink.map((item, idx) => {
            return (
              <News.ArticleContainer key={item.company + idx}>
                <News.PostCompany>{item.company}:</News.PostCompany>
                <News.PostLink href={item.link}>{item.link}</News.PostLink>
              </News.ArticleContainer>
            );
          })}
        </News.ArticlesForm>
      </News.RelatedArticles>
      <News.BackButton onClick={() => navigate("/news")}>목록</News.BackButton>
    </div>
  );
};

export default NewsLayout_2;

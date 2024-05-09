import React, { useEffect } from "react";
import * as News from "../../../styles/news/news.styled";
import { NewsDataType } from "../../../types/type";
import { useNavigate } from "react-router-dom";

interface NewsLayoutProps {
  data: NewsDataType;
}

const NewsLayout_1: React.FC<NewsLayoutProps> = ({ data }) => {
  const navigate = useNavigate();
  const { img, imgCaption, pageLink, text } = data;
  useEffect(() => {
    // 페이지 이동 시 스크롤 위치를 최상단으로 이동
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <News.DetailPostLayout>
        <News.FlexColumn className="gp-8-0">
          <img src={img.main} alt="보도자료 메인 이미지" />
          <News.ImgCaption>
            <p className="caption_text">{imgCaption && imgCaption[0]}</p>
          </News.ImgCaption>
        </News.FlexColumn>
        <p>{text[0]}</p>

        <News.FlexColumn className="gp-8-0">
          <News.FlexRow className="grid-columns-1-1-1">
            {img.sub1?.map((img) => (
              <img src={img} alt="보도자료 참고 이미지" />
            ))}
          </News.FlexRow>
          <News.ImgCaption>
            <p className="caption_text">{imgCaption && imgCaption[1]}</p>
          </News.ImgCaption>
        </News.FlexColumn>
        <p>{data.text[1]}</p>

        <News.FlexColumn className="gp-8-0">
          <News.FlexRow className="grid-columns-1-1-1">
            {img.sub2?.map((img) => (
              <img src={img} alt="보도자료 참고 이미지" />
            ))}
          </News.FlexRow>
          <News.ImgCaption>
            <p className="caption_text">{imgCaption && imgCaption[2]}</p>
          </News.ImgCaption>
        </News.FlexColumn>
        <p>{text[2]}</p>

        <News.FlexColumn>
          <p className="bold">{text[3]}</p>
          <p>{text[4]}</p>
        </News.FlexColumn>

        <News.FlexColumn>
          <p className="bold">{text[5]}</p>
          <p>{text[6]}</p>
        </News.FlexColumn>
        <News.FlexColumn className="gp-8-0">
          <News.FlexRow className="grid-columns-1-1-1">
            {img.sub3?.map((img) => (
              <img src={img} alt="보도자료 참고 이미지" />
            ))}
          </News.FlexRow>
          <News.ImgCaption>
            <p className="caption_text">{imgCaption && imgCaption[3]}</p>
          </News.ImgCaption>
        </News.FlexColumn>

        <p>{text[7]}</p>
        <News.FlexColumn>
          <p className="bold">{text[8]}</p>
          <p>{text[9]}</p>
        </News.FlexColumn>
        <News.FlexColumn>
          <p className="bold">{text[10]}</p>
          <p>{text[11]}</p>
        </News.FlexColumn>
        <p>{text[12]}</p>
      </News.DetailPostLayout>
      <News.RelatedArticles>
        <p>*관련 보도자료</p>
        <div>
          <News.ArticlesForm>
            {pageLink.map((item, idx) => {
              return (
                <News.ArticleContainer key={item.company + idx}>
                  <News.PostCompany>{item.company}:</News.PostCompany>
                  <News.PostLink href={item.link}>{item.link}</News.PostLink>
                </News.ArticleContainer>
              );
            })}
          </News.ArticlesForm>
        </div>
      </News.RelatedArticles>

      <News.BackButton onClick={() => navigate("/news")}>목록</News.BackButton>
    </div>
  );
};

export default NewsLayout_1;

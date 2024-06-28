import React, { useEffect, useState, useRef, Suspense } from "react";
import * as News from "../../styles/news/news.styled";
import * as Com from "../../styles/project/project.styled";
import { useRecoilState } from "recoil";
import { headerStates } from "../../recoil/modal";
import { newsData } from "../../util/newsData";
import { useNavigate } from "react-router-dom";
import { NewsDataType } from "../../types/type";
import Image from "../../component/LazyImage";
import Breadcrumb from "../../component/Breadcrumb";

function NewsRoom() {
  const [state, setState] = useRecoilState(headerStates);
  const sortedData = newsData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const data = useRef<NewsDataType[]>(sortedData);
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setState((prev) => ({ ...prev, headerDefault: false }));
  }, []);

  const getFilteredDataHandler = (idx: number) => {
    if (idx === 0) {
      // 전체 버튼일 때는 전체 데이터를 반환
      return newsData;
    } else {
      // 연도별 버튼일 때는 해당 연도 데이터만 필터링하여 반환
      const selectedYear = new Date().getFullYear() - idx + 1; // 선택된 연도 계산
      const filteredData = newsData.filter((item) => {
        const itemYear = Number(item.date.substring(0, 4)); // 데이터의 연도 추출
        return itemYear === selectedYear; // 선택된 연도와 데이터의 연도를 비교하여 필터링
      });
      return filteredData;
    }
  };

  const filterEventHandler = (idx: number) => {
    setActiveIndex(idx);
    if (data.current) {
      const filteredData = getFilteredDataHandler(idx);
      data.current = filteredData;
    }
  };
  const imageVariants = {
    onscreen: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <News.Wrapper>
      <News.Inner>
        <Breadcrumb sections={["NEWS", "보도자료"]} />

        <News.Content>
          <News.TitleBox>
            <News.TitleContainer>
              <News.Title
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                보도자료
              </News.Title>
            </News.TitleContainer>
            <News.TitleContainer>
              <News.SubTitle
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                거림의 새로운 소식을 알려드립니다.
              </News.SubTitle>
            </News.TitleContainer>
          </News.TitleBox>
          <News.Form>
            <News.FilterContainer>
              <News.Button
                className={activeIndex === 0 ? "active" : ""}
                onClick={() => filterEventHandler(0)}
              >
                전체
              </News.Button>
              <News.Button
                className={activeIndex === 1 ? "active" : ""}
                onClick={() => filterEventHandler(1)}
              >
                2024
              </News.Button>
              <News.Button
                className={activeIndex === 2 ? "active" : ""}
                onClick={() => filterEventHandler(2)}
              >
                2023
              </News.Button>
            </News.FilterContainer>

            <News.CardForm>
              {data.current.map((item, idx) => (
                <News.Card
                  href={`/news/pageDetail?build_ord=${item.id}&layout_type=${item.type}`}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{
                    delay: 0.2 + idx * 0.15,
                    duration: 0.5,
                  }}
                  variants={imageVariants}
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  key={item.primaryTitle + idx}
                >
                  <News.ImageContainer>
                    <Image
                      src={item.img.main}
                      alt={item.secondaryTitle}
                      width={380}
                      height={280}
                    />
                  </News.ImageContainer>
                  <News.CardContent>
                    <News.ContentTitle>
                      <p className="underline-hover_target">
                        {item.primaryTitle + " " + item.secondaryTitle}
                      </p>
                    </News.ContentTitle>
                    <News.ContentDate>{item.date}</News.ContentDate>
                  </News.CardContent>
                </News.Card>
              ))}
            </News.CardForm>
          </News.Form>
        </News.Content>
      </News.Inner>
    </News.Wrapper>
  );
}

export default NewsRoom;

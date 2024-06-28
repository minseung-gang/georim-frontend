import React, { useRef, useState, useEffect, useCallback } from "react";
import * as Dev from "../../styles/project/project.styled";
import { useNavigate } from "react-router-dom";
import Skeleton from "./Skeleton";
import { useRecoilState, useRecoilValue } from "recoil";
import Image from "../LazyImage";
import useHoverCursor from "../../hook/useHoverCursor";
import useIntersectionObserver from "../../hook/useIntersectionObserver";
import { State } from "../../reducer/postReducer";
import { ICardType } from "../../types/type";

export interface ICardProps {
  data: ICardType[];
}

function Card({ data }: ICardProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const itemPerPage = 6;
  const pageRef = useRef(1); // 현재 페이지 수
  const totalRef = useRef(Math.round(data.length / itemPerPage)); //총 페이지 수
  const [List, setList] = useState(data.slice(0, itemPerPage)); // 화면에 적용할 리스트
  const listRef = useRef(List); // 필터링된 리스트를 담는 역할
  const { handleHover, handleLeave } = useHoverCursor();

  // 상위 컴포넌트에서 필터링 버튼을 눌렀을 때 필터된 리스트와 총페이지수가 다르기 때문에
  // data props가 변경될 때 함께 바꿔줘야 함
  useEffect(() => {
    setList(data.slice(0, itemPerPage));
    listRef.current = data;
    pageRef.current = 1; // 필터버튼을 누를때마다 현재 페이지 초기화
    totalRef.current = Math.round(data.length / itemPerPage);
  }, [data]);

  const fetchMoreBuildings = () => {
    if (pageRef.current >= totalRef.current) return;
    setIsLoading(true);
    setTimeout(() => {
      const newPage = pageRef.current + 1; // 새로운 페이지 계산
      const startIndex = (newPage - 1) * itemPerPage; // 시작 인덱스 계산
      const additionalData = listRef.current.slice(
        startIndex,
        startIndex + itemPerPage
      ); // 새로운 페이지에 해당하는 데이터 가져오기
      pageRef.current = newPage; // 현재 페이지 업데이트

      if (additionalData.length > 0) {
        setList((prevList) => [...prevList, ...additionalData]);
      }
      setIsLoading(false);
    }, 500);
  };

  const setObservationTarget = useIntersectionObserver(fetchMoreBuildings);

  return (
    <Dev.GridContainer className="card-list">
      {List.map((item, idx) => {
        return (
          <Dev.BuildingsCard
            onClick={() => navigate(`/project/${item.category}/${item.id}`)}
            key={idx}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <Dev.ImageBox>
              <Image
                src={`${process.env.REACT_APP_SERVER_IP}/dir/image/${
                  item.url
                }?${Date.now()}`}
                alt="빌딩 이미지"
                width={380}
                height={280}
              />
            </Dev.ImageBox>
            <Dev.CardContent>
              <div>
                <Dev.BuildingsName>{item.name}</Dev.BuildingsName>
              </div>
              <Dev.ContentInfo>
                <Dev.ContentItem>
                  <Dev.TitleInfo>구분</Dev.TitleInfo>
                  <Dev.ContentDetails>
                    {item.type.join(", ")}
                  </Dev.ContentDetails>
                </Dev.ContentItem>
                <Dev.ContentItem>
                  <Dev.TitleInfo>세대수</Dev.TitleInfo>
                  <Dev.ContentDetails>{item.houseHold}</Dev.ContentDetails>
                </Dev.ContentItem>
                <Dev.ContentItem>
                  <Dev.TitleInfo>규모</Dev.TitleInfo>
                  <Dev.ContentDetails>
                    지하 {item.lowFloor}층 - 지상 {item.highFloor}층
                  </Dev.ContentDetails>
                </Dev.ContentItem>
              </Dev.ContentInfo>
            </Dev.CardContent>
          </Dev.BuildingsCard>
        );
      })}
      {!isLoading ? <div ref={setObservationTarget} /> : <Skeleton />}
    </Dev.GridContainer>
  );
}

export default Card;

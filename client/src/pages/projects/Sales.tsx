import React, { useRef, useState, useEffect } from "react";
import * as Dev from "../../styles/project/project.styled";
import Card from "../../component/project/Card";
import { useRecoilState } from "recoil";
import { headerStates } from "../../recoil/modal";
import { motion } from "framer-motion";
import Breadcrumb from "../../component/Breadcrumb";
import Cursor from "../../component/Cursor";
import useHoverCursor from "../../hook/useHoverCursor";
import { getPostsByCategory } from "../../apis/services/posts";
import { State } from "../../reducer/postReducer";
import { ICardType } from "../../types/type";

function Sales() {
  const [state, setState] = useRecoilState(headerStates);
  const [originalBuildings, setOriginalBuildings] = useState<ICardType[]>([]);
  const [buildings, setBuildings] = useState(originalBuildings);
  const [filteredBuildings, setFilteredBuildings] = useState(buildings);

  useEffect(() => {
    async function getPostsData() {
      const response = await getPostsByCategory("sales");
      setOriginalBuildings(response);
      setFilteredBuildings(response);
    }
    getPostsData();
  }, []);

  useEffect(() => {
    setState((prev) => ({ ...prev, headerDefault: true }));
    window.scrollTo({
      top: 0,
    });
  }, []);

  const [filteredButton, setFilteredButton] = useState(0);
  const buttonList = [
    "전체",
    "오피스텔",
    "아파트",
    "지식산업센터",
    "근린생활시설",
    "숙박시설",
  ];
  const { cursor, handleHover, handleLeave } = useHoverCursor();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // 엔터 키를 눌렀을 때 실행할 함수 호출
      handleSearch();
    }
  };
  useEffect(() => {
    // 이벤트 핸들러 추가
    window.addEventListener("mousemove", cursor);

    // 컴포넌트 언마운트 시 이벤트 핸들러 제거
    return () => {
      window.removeEventListener("mousemove", cursor);
    };
  }, []);

  const handleSearch = () => {
    const inputValue = inputRef.current?.value.toLowerCase().trim();
    if (inputValue) {
      const filteredResult = buildings.filter((item) =>
        item.name.toLowerCase().includes(inputValue)
      );
      setFilteredBuildings(filteredResult); // 검색 결과를 관리하는 상태 업데이트
    } else {
      // 입력값이 없을 경우 모든 데이터를 표시
      setFilteredBuildings(buildings); // buildings 상태로 복원
    }
  };

  //버튼 클릭했을때 실행할 함수 호출
  const clickEventHandler = (text: string, index: number) => {
    setFilteredButton(index);
    if (index !== 0) {
      const filteredData = originalBuildings.filter((item) => {
        return item.type.includes(text);
      });
      setFilteredBuildings(filteredData);
      setBuildings(filteredData);
    } else {
      setBuildings(originalBuildings);
      setFilteredBuildings(originalBuildings);
    }
  };

  return (
    <Dev.Wrapper>
      <Cursor />
      <Dev.Banner className="sales">
        <Dev.BannerTitle>
          <div>
            <motion.h3
              initial={{ y: 90 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              분양 · 입주 실적
            </motion.h3>
          </div>
          <div>
            <motion.p
              initial={{ y: 90 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              새로운 시작이 더 가치 있을 수 있도록 합니다
            </motion.p>
          </div>
          <Dev.ScrollBar />
        </Dev.BannerTitle>
      </Dev.Banner>
      <Dev.Content>
        <Breadcrumb sections={["PROJECTS", "분양·입주"]} right />
        <Dev.BuildingsForm>
          <Dev.ControlGroup>
            <Dev.FilterBtnForm>
              <Dev.FilterBtnBox>
                {buttonList.map((button, idx) => (
                  <Dev.FilteredBtn
                    key={idx}
                    $active={filteredButton === idx}
                    onClick={() => clickEventHandler(button, idx)}
                  >
                    {button}
                  </Dev.FilteredBtn>
                ))}
              </Dev.FilterBtnBox>
            </Dev.FilterBtnForm>
            <Dev.SearchContainer>
              <Dev.ProjectCount>
                총 <span>{filteredBuildings.length}</span>개의 프로젝트가
                있습니다.
              </Dev.ProjectCount>
              <Dev.SearchBtn>
                <input
                  type="text"
                  ref={inputRef}
                  spellCheck={false}
                  placeholder="프로젝트 명으로 검색해 주세요."
                  onKeyDown={handleKeyPress}
                />
                <Dev.SearchIcon onClick={handleSearch} />
              </Dev.SearchBtn>
            </Dev.SearchContainer>
          </Dev.ControlGroup>
          {filteredBuildings.length > 0 ? (
            <Card data={filteredBuildings} />
          ) : (
            <Dev.EmptyMessage>검색된 결과가 없습니다</Dev.EmptyMessage>
          )}
        </Dev.BuildingsForm>
      </Dev.Content>
    </Dev.Wrapper>
  );
}

export default Sales;

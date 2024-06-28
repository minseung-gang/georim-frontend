import React, { useRef, useState, useEffect } from "react";
import * as Dev from "../../styles/project/project.styled";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { headerStates } from "../../recoil/modal";
import { motion } from "framer-motion";
import Breadcrumb from "../../component/Breadcrumb";
import Image from "../../component/LazyImage";
import Cursor from "../../component/Cursor";
import useHoverCursor from "../../hook/useHoverCursor";
import { getPostsByCategory } from "../../apis/services/posts";
import { filter } from "lodash";
import Card from "../../component/project/Card";

function DevelopProjects() {
  const [state, setState] = useRecoilState(headerStates);
  const [buildings, setBuildings] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState(buildings);

  useEffect(() => {
    async function getPostsData() {
      const response = await getPostsByCategory("development");
      setBuildings(response);
      setFilteredData(response);
    }
    getPostsData();
  }, []);

  useEffect(() => {
    setState((prev) => ({ ...prev, headerDefault: true }));
    window.scrollTo({
      top: 0,
    });
  }, []);

  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const { cursor, handleHover, handleLeave } = useHoverCursor();

  useEffect(() => {
    // 이벤트 핸들러 추가
    window.addEventListener("mousemove", cursor);

    // 컴포넌트 언마운트 시 이벤트 핸들러 제거
    return () => {
      window.removeEventListener("mousemove", cursor);
    };
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // 엔터 키를 눌렀을 때 실행할 함수 호출
      handleSearch();
    }
  };

  const handleSearch = () => {
    // 입력된 값에 대한 작업 수행
    const inputValue = inputRef.current?.value.toLowerCase().trim();
    if (inputValue) {
      const filteredResult = buildings.filter((item) =>
        item.name.toLowerCase().includes(inputValue)
      );
      setFilteredData(filteredResult);
    } else if (inputValue == "") {
      setFilteredData(buildings);
    }
  };

  return (
    <Dev.Wrapper>
      <Cursor />
      <Dev.Banner className="develop">
        <Dev.BannerTitle>
          <div>
            <motion.h3
              initial={{ y: 90 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              시행 · 개발 실적
            </motion.h3>
          </div>
          <div>
            <motion.p
              className="banner_subtitle"
              initial={{ y: 90 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              시간이 지날수록 커지는 가치를 생각합니다
            </motion.p>
          </div>
          <Dev.ScrollBar />
        </Dev.BannerTitle>
      </Dev.Banner>
      <Dev.Content>
        <Breadcrumb sections={["PROJECTS", "시행·개발"]} right />

        <Dev.BuildingsForm>
          <Dev.SearchContainer>
            <Dev.ProjectCount>
              총 <span>{filteredData?.length}</span>개의 프로젝트가 있습니다.
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
          {filteredData.length > 0 ? (
            <Card data={filteredData} />
          ) : (
            <Dev.EmptyMessage>검색된 결과가 없습니다</Dev.EmptyMessage>
          )}
        </Dev.BuildingsForm>
      </Dev.Content>
    </Dev.Wrapper>
  );
}

export default DevelopProjects;

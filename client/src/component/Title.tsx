import React, { useEffect, useState } from "react";
import * as Tit from "../styles/project/projectDetail.styled";
import { motion } from "framer-motion";
import styled from "styled-components";

interface TitleProps {
  data: string;
  delay?: number;
}

function Title({ data, delay = 0.1 }: TitleProps) {
  const [titleData, setTitleData] = useState<string>(data);
  useEffect(() => {
    setTitleData(data);
  }, [data]);
  return (
    <Tit.PageTitleContainer>
      {titleData.split(" ").map((item, index) => {
        return (
          <Tit.PageTitle key={item + index}>
            {item.split("").map((char, idx) => {
              return (
                <motion.h3
                  key={char + index}
                  initial={{ y: 70 }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: delay + index * 0.05 + idx * 0.015,
                    duration: 0.5,
                  }}
                >
                  {char}
                </motion.h3>
              );
            })}
          </Tit.PageTitle>
        );
      })}
    </Tit.PageTitleContainer>
  );
}

export default Title;

const Wrapper = styled.div`
  display: flex;
  gap: 0 12px;
`;
const MainTitle = styled.div`
  display: flex;
  overflow: hidden;

  & h3 {
    font-size: 3.125rem;
  }
`;

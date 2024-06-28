import React, { useEffect, useState } from "react";
import styled from "styled-components";

function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickEventHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Top onClick={onClickEventHandler} $isVisible={isVisible}>
      <p>Top</p>
    </Top>
  );
}

export default TopButton;

const Top = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 10%;
  right: 30px;
  cursor: pointer;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  pointer-events: ${(props) => (props.$isVisible ? "visible" : "none")};
  transition: all 0.3s ease-in-out;
  & p{
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    border-radius: 50%;
    border: 1px solid black;
    transition: all 0.3s ease-in-out;
  
    }

  &:hover{
    p{
      background: #000;
      color:white;
    }
  } 
}
`;

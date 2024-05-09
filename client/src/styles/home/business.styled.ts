import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

export const Business = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 13rem 0;
`;

export const BusinessForm = styled.div`
  padding-left: 22.5rem;
  height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5rem 0;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 26rem;
    background: ${({ theme }) => theme.suportColor.background};
  }
`;

export const StikyWrapper = styled.div`
  position: sticky;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  justify-content: center;

  &[data-aos="fade-in"] {
    opacity: 0;
    transition-property: opacity;

    &.aos-animate {
      opacity: 1;
    }
  }
`;

export const BusinessContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;
export const BusinessCaption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  & p {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.blue4};
  }
  & h3 {
    font-weight: 700;
    font-family: "Montserrat";
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.blue1};
    letter-spacing: -1px;
  }
`;

export const BusinessContainer = styled.div`
  display: flex;
  gap: 0 42px;
  box-sizing: border-box;

  &[data-aos="change"] {
    top: 200px;
    position: relative;
    opacity: 0;
    &.aos-animate {
      opacity: 1;
      position: absolute;
      top: 0;
    }
  }
  & > div:nth-child(1) {
    width: 55%;
  }
  & > div:nth-child(2) {
    width: 45%;
  }
`;

export const BusinessOrder = styled.div`
  padding: 5px 8px;
  border-right: 2px solid #e6eef5;
  & > p {
    color: ${({ theme }) => theme.colors.blue2};
    font-weight: 400;
    font-size: 30px;
  }
`;
export const BusinessTitle = styled.p`
  font-size: 3.5rem;
  font-weight: 600;
  letter-spacing: -0.3rem;
`;
export const BusinessDetails = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0 40px;
`;

export const TitleContainer = styled.div`
  display: grid;
  justify-items: start;
  gap: 24px 0;
  & > p {
    width: 100%;
  }
`;
export const BusinessDesc = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  height: 90px;
  font-family: pretendard;
  line-height: 30px;
`;
export const BusinessBtn = styled.button`
  padding: 8px 12px;
  border: 1px solid #000000;
  font-family: pretendard;
  display: flex;
  align-items: center;
  gap: 0 4px;
`;
export const PlusIcon = styled(FiPlus)`
  font-size: 14px;
`;
export const BusinessImageBox = styled.div`
  display: flex;
  gap: 0 20px;
  margin: 65px 0 0 90px;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
  }
`;
export const BusinessImage = styled.div`
  width: 11.7vw;
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    left:0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
 
  }
  &:hover::after {
    background: transparent;
  }
  &:hover img {
    transform: scale(1.1);
  }
  & 
`;
export const SubImage = styled.img`
  width: 100%;
  transition: transform 0.5s ease;
`;
export const MainImage = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-top: 60px solid white;
    border-left: 60px solid white;
    border-right: 60px solid transparent;
    border-bottom: 60px solid transparent;
    width: 0;
    height: 0;
  }
  & img {
    border-radius: 7px 0 0 7px;
    width: 100%;
    height: 100%;
  }
`;

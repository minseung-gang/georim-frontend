import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";

export const Wrapper = styled.div<{ $right?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$right ? "flex-end" : "flex-start")};
  gap: 0 32px;
  padding: 14.5px 12px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    padding: 16px 0;
    gap: 0 30px;
  }
  @media screen and (max-width: 820px) {
    padding: 8px 0;
  }
`;

export const Text = styled.span`
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 20px;
  line-height: 0;
  position: relative;
  color: ${({ theme }) => theme.colors.textBlack};
  cursor: pointer;
  margin: 6px 0;

  @media screen and (max-width: 500px) {
    gap: 0 4px;
  }

  &:last-child {
    font-family: pretendard;
  }
  &:first-child::before {
    display: none;
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-16px, -50%);
    width: 2px;
    height: 16px;
    background: ${({ theme }) => theme.suportColor.border};

    @media screen and (max-width: 1024px) {
      transform: translate(-15px, -50%);
    }
  }
  p {
    font-size: 1.125rem;

    @media screen and (max-width: 1024px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 820px) {
      font-size: 0.875rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 0.75rem;
    }
  }
`;
export const SubDirectory = styled.p`
  color: ${({ theme }) => theme.colors.greyScale1};
`;
export const SubDirectory1 = styled(SubDirectory)`
  width: 140px;

  @media screen and (max-width: 1024px) {
    width: 90px;
  }
  @media screen and (max-width: 500px) {
    width: 75px;
  }
`;
export const SubDirectory2 = styled(SubDirectory)`
  width: 90px;

  @media screen and (max-width: 1024px) {
    width: 80px;
  }
  @media screen and (max-width: 500px) {
    width: 55px;
  }
`;
export const PlusIcon = styled(FaPlus)`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textBlack};

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: calc(100% + 20px);
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    width: 150px;
  }
  @media screen and (max-width: 820px) {
    width: 130px;
    top: calc(100% + 10px);
  }
  @media screen and (max-width: 500px) {
    width: 100px;
  }
`;
export const ModalInner = styled.div`
  padding: 25px 20px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 12px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  gap: 20px 0;
  background: white;
  @media screen and (max-width: 1024px) {
    padding: 20px;
  }
  @media screen and (max-width: 820px) {
    padding: 15px;
    gap: 15px 0;
  }
  @media screen and (max-width: 500px) {
    padding: 16px 12px;
    gap: 12px 0;
  }
`;

export const List = styled.p`
  line-height: 25px;

  &:hover {
    color: ${({ theme }) => theme.colors.blue4};
    font-weight: 700;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 64px 0;

  @media screen and (max-width: 1024px) {
    padding: 20px 0 40px;
  }

  @media screen and (max-width: 500px) {
    padding: 1rem 0 2rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px 0;
`;

export const TitleSection = styled.div`
  text-align: center;
`;

export const PageTitle = styled.h2`
  font-size: calc(39px + 0.9vw);
  line-height: calc(67px + 0.9vw);
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: 4.7vw;
    line-height: 7vw;
  }
  @media screen and (max-width: 820px) {
    font-size: calc(20px + 2vw);
    line-height: calc(38px + 2vw);
  }
`;

export const PageSubTitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textBlack};
  font-weight: 400;

  @media screen and (max-width: 1024px) {
    font-size: calc(11px + 0.5vw);
    line-height: calc(19px + 0.5vw);
  }
  @media screen and (max-width: 820px) {
    font-size: 2vw;
    line-height: 3vw;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.75rem;
    line-height: 1.125rem;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.75rem;
  line-height: 3.125rem;
  font-weight: 700;
  display: flex;
  gap: 0 3px;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    line-height: 2.7rem;
  }

  @media screen and (max-width: 820px) {
    font-size: 1.25rem;
    line-height: 2.25rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.8rem;
  }

  &.border-bottom {
    border-bottom: 1px solid ${({ theme }) => theme.suportColor.background};
  }
  &.py-1 {
    padding-bottom: 16px;

    @media screen and (max-width: 820px) {
      padding-bottom: 12px;
    }

    @media screen and (max-width: 600px) {
      padding-bottom: 8px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px 0;

  & .flex-column {
    display: flex;
    flex-direction: column;
  }
  & .vertical-gap-0 {
    gap: 8px 0;

    @media screen and (max-width: 600px) {
      gap: 4px 0;
    }
  }
  & .vertical-gap-1 {
    gap: 16px 0;
  }
  & .vertical-gap-2 {
    gap: 24px 0;

    @media screen and (max-width: 500px) {
      gap: 14px 0;
    }
  }
  & .vertical-gap-3 {
    gap: 32px 0;
  }
  & .vertical-gap-4 {
    gap: 72px 0;

    @media screen and (max-width: 820px) {
      gap: 90px 0;
    }
    @media screen and (max-width: 600px) {
      gap: 40px 0;
    }
  }
`;

export const TabBox = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.suportColor.border};
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  & > div {
    width: 25%;
  }

  & > div:first-child > p {
    border-radius: 4px 0 0 4px;
  }
  & > div:last-child > p {
    border-radius: 0px 4px 4px 0;
  }
  & > div:first-child > p::before {
    border-left: none;
  }
  & > div:last-child > p::before {
    display: none;
  }
`;
export const TriggerText = styled.p`
  position: relative;
  font-size: 18px;
  line-height: 2rem;
  width: 100%;
  padding: 12px 0;
  text-align: center;
  cursor: pointer;
  font-weight: 300;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.greyScale2};

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.8rem;
    padding: 9.5px 0;
  }
  @media screen and (max-width: 820px) {
    font-size: calc(11px + 0.6vw);
    line-height: calc(24px + 0.6vw);
  }

  &.type_container::before {
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    background: ${({ theme }) => theme.suportColor.border};
  }
`;
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px 0;
  margin-top: 8px;

  @media screen and (max-width: 600px) {
    margin-top: 4px;
  }
`;
export const Grid = styled.div`
  display: grid;

  gap: 0 30px;

  @media screen and (max-width: 1024px) {
    gap: 0 20px;
  }

  @media screen and (max-width: 820px) {
    gap: 0 12px;
  }
  @media screen and (max-width: 600px) {
    gap: 16px 0;
  }

  &.cols-2-1 {
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  &.cols-1-1 {
    grid-template-columns: 1fr;
  }
`;
export const Essential = styled.span`
  color: #fd5656;
  font-size: 1.2rem;
`;

export const Info = styled.p`
  font-size: 1.25rem;
  line-height: 1.875rem;
  font-weight: 600;
  color: #4e5968;

  @media screen and (max-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.6875rem;
  }
  @media screen and (max-width: 820px) {
    font-size: calc(12px + 0.5vw);
    line-height: calc(20px + 0.5vw);
  }
  @media screen and (max-width: 600px) {
    font-size: calc(13px + 0.5vw);
    line-height: calc(26px + 0.5vw);
  }
`;

export const CheckBox = styled.div`
  display: flex;
  gap: 16px 24px;
  padding: 16px 0;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    gap: 16px 32px;
  }
`;
export const InputField = styled.input`
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 4px;
  font-size: 1rem;
  font-family: pretendard;
  color: #4e5968;

  @media screen and (max-width: 1024px) {
    font-size: 0.875rem;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.greyScale3};
    font-size: 1rem;
    font-weight: 300;
    @media screen and (max-width: 1024px) {
      font-size: 0.875rem;
    }
  }
  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  padding: 20px 16px;
  border: 1px solid ${({ theme }) => theme.suportColor.borderline};
  border-radius: 4px;
  font-size: 1rem;
  font-family: pretendard;
  color: #4e5968;
  min-height: 214px;
  resize: none;
  spellcheck: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.greyScale3};
    font-size: 1rem;
    font-weight: 300;
    @media screen and (max-width: 1024px) {
      font-size: 0.875rem;
    }
  }
`;
export const PrivacyCheck = styled.div`
  & h3 {
    font-size: 1.75rem;
    line-height: 3.125rem;
    font-weight: 700;

    @media screen and (max-width: 1024px) {
      font-size: 1.5rem;
      line-height: 2.7rem;
    }

    @media screen and (max-width: 820px) {
      font-size: 1.25rem;
      line-height: 2.25rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 1rem;
      line-height: 1.8rem;
    }
  }
  & dt {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 2rem;
    color: ${({ theme }) => theme.colors.bodyBlack};

    @media screen and (max-width: 1024px) {
      font-size: 0.875rem;
      line-height: 1.575rem;
    }
  }
  & dl {
    padding: 30px 24px;
    border: 1px solid ${({ theme }) => theme.suportColor.borderline};
    border-radius: 4px;

    @media screen and (max-width: 1024px) {
      padding: 24px 16px;
    }
    @media screen and (max-width: 600px) {
      padding: 16px 8px;
    }
  }
`;

export const PrivacyList = styled.ul``;
export const PrivacyDetail = styled.li`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.75rem;
  letter-spacing: -0.02rem;
  color: ${({ theme }) => theme.colors.textBlack};

  @media screen and (max-width: 1024px) {
    font-size: 0.875rem;
    line-height: 1.575rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.75rem;
    line-height: 1.35rem;
  }
  & > span {
    width: 13px;
    display: inline-block;
  }
`;

export const Label = styled.label`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0 12px;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    gap: 0 6px;
  }

  & > .checkmark {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    width: 24px;
    height: 24px;
    border: 1px solid ${({ theme }) => theme.suportColor.borderline};

    @media screen and (max-width: 600px) {
      width: 20px;
      height: 20px;
    }

    svg {
      display: none;
      color: ${({ theme }) => theme.colors.blue4};
    }
  }
  .circle {
    border-radius: 50%;
    overflow: hidden;
    padding: 6px;
    box-sizing: border-box;
  }
  input:checked ~ .checkmark {
    & svg {
      display: block;
    }
  }
  input:checked ~ .circle .checkmark {
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.blue4};
    border-radius: 50%;
  }
  & p {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textBlack};
    line-height: 1.5rem;
    letter-spacing: -0.3px;

    @media screen and (max-width: 600px) {
      font-size: 0.875rem;
    }
  }
`;

export const BtnContainer = styled.div`
  display: flex;

  &.content-center {
    justify-content: center;
  }

  & p {
    position: relative;
    line-height: 1.5rem;
    width: 100%;
    cursor: pointer;
    box-sizing: border-box;
    height: 48px;
    width: 100%;
    padding: 12px 16px;
    border: 1px solid ${({ theme }) => theme.colors.gray3};
    border-radius: 4px;
    font-size: 1rem;
    font-family: pretendard;
  }
`;
export const SubmitBtn = styled.button`
  padding: 12px 32px;
  border: 1px solid ${({ theme }) => theme.suportColor.borderline};
  font-size: 1.125rem;
  line-height: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textBlack};
  font-family: Pretendard;
  transition: all 0.1s ease;

  &:active {
    box-shadow: inset 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 1024px) {
    padding: 8px 32px;
  }
  @media screen and (max-width: 600px) {
    padding: 4px 24px;
    font-size: 1rem;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  margin: 0 auto;
  border-top: 1px solid ${({ theme }) => theme.colors.greyScale4};
  order:7;
`;

export const Inner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 3.5rem 0 4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1500px) {
    max-width: unset;
    width: calc(100% - 60px);
  }

  @media screen and (max-width: 1024px) {
    padding: 3rem 0 2rem;
  }

  @media screen and (max-width: 820px) {
    padding: 2rem 0 2.5rem;
  }
  @media screen and (max-width: 500px) {
    width: calc(100% - 40px);
  }
`;

export const Upper = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-bottom: 56px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyScale4};
  gap: 0 5vw;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 28px 0;
    padding-bottom: 32px;
  }
  @media screen and (max-width: 500px) {
    padding-bottom: 20px;
  }
`;
export const UpperContent = styled.div`
  display: flex;
  width: 100%;
  gap: 0 5vw;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 64px 0;
  }
  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 48px 0;
  }
`;
export const Lower = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 24px 0;
    padding-top: 32px;

    & .copyright {
      order: 3;
      flex-direction: row;
      gap: 0 8px;
      align-items: center;
      & > p {
        line-height: unset;
      }
    }
    & .address {
      order: 1;
    }
    & .legal {
      order: 2;
    }
  }

  @media screen and (max-width: 500px) {
    padding-top: 20px;
    gap: 16px 0;

    & .copyright > p {
      font-size: 0.75rem;
      line-height: 1.125rem;
    }
  }

  & address {
    font-size: 0.8125rem;
    line-height: 0.895rem;
    font-style: normal;

    @media screen and (max-width: 1024px) {
      font-size: 0.75rem;
      line-height: 0.895rem;
    }
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
`;

export const ContactDetails = styled.div`
  display: flex;
  gap: 0 24px;

  @media screen and (max-width: 500px) {
    gap: 0 12px;
    & .phone {
      display: none;
    }
  }

  & p {
    font-size: 0.8125rem;
    @media screen and (max-width: 500px) {
      font-size: 0.75rem;
    }
  }
`;

export const LegalLink = styled.div`
  display: flex;
  gap: 0 3.7vw;
  & p {
    font-size: 0.8125rem;
    line-height: 0.969375rem;
    font-weight: 600;
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    font-size: 0.75rem;
    line-height: 0.895rem;
  }
`;
export const Heading = styled.h3`
  font-size: 1.75rem;
  line-height: 2.6rem;
  min-width: fit-content;

  & > span {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1024px) {
      flex-direction: row;
    }
  }
  @media screen and (max-width: 500px) {
    & span {
      min-width: fit-content;
    }
  }
  @media screen and (max-width: 1260px) {
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.75rem;
    line-height: 2.8rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 1.5rem;
    line-height: 2.375rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.25rem;
    line-height: 2rem;
  }
`;

export const SectionTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  font-family: Montserrat;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.greyScale1};

  @media screen and (max-width: 1260px) {
    font-size: 0.8125rem;
    line-height: 0.990625rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
    line-height: 0.914375rem;
  }
`;
export const CompanyName = styled.p`
  font-size: 0.875rem;
  line-height: 1.044375rem;

  font-weight: 600;
`;

export const Copyright = styled.p`
  font-size: 0.75rem;
  line-height: 0.8625rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray5};
`;
export const Phone = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 43px;
  margin-top: 8px;

  @media screen and (max-width: 1260px) {
    font-size: 1.75rem;
    line-height: 2.088125rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 2.25rem;
    line-height: 2.685rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 2rem;
    line-height: 2.386875rem;
    margin-top: 4px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  min-width: fit-content;
  position: relative;

  @media screen and (max-width: 1280px) {
    padding-bottom: 4px;
  }

  &::before {
    @media screen and (max-width: 1024px) {
      content: "";
      position: absolute;
      bottom: -32px;
      left: 0;
      width: 100%;
      height: 1px;
      background: ${({ theme }) => theme.colors.greyScale4};
    }
    @media screen and (max-width: 820px) {
      bottom: -24px;
    }
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`;

export const Management = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
  & > div {
    display: flex;
    gap: 0 12px;
    & > p {
      font-size: 0.8rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.greyScale2};

      @media screen and (max-width: 500px) {
        font-size: 0.75rem;
      }
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: flex-start;
    gap: 0 7vw;
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    gap: unset;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Gnb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  width: 100px;

  & > p {
    font-weight: 700;
    font-size: 0.9375rem;
    line-height: 1.143125rem;
    font-family: Montserrat;

    @media screen and (max-width: 1260px) {
      font-size: 0.875rem;
      line-height: 1.066875rem;
    }
  }
`;

export const Lnb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;

  @media screen and (max-width: 1260px) {
    gap: 12px 0;
  }

  & a {
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 15.51px;
    color: ${({ theme }) => theme.colors.textBlack};

    &:hover {
      font-weight: 500;
    }
  }
`;

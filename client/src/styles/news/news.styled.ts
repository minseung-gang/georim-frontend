import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 91px auto 0;

  @media screen and (max-width: 1260px) {
    width: calc(100% - 60px);
  }
  @media screen and (max-width: 1024px) {
    margin-top: 81px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 57px;
    width: calc(100% - 40px);
  }
`;

export const Inner = styled.div`
  width: 100%;
  padding: 40px 0 124px;

  @media screen and (max-width: 1024px) {
    padding: 24px 0 40px;
  }
  @media screen and (max-width: 500px) {
    padding: 16px 0 32px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px 0;
  margin-top: 50px;

  @media screen and (max-width: 1024px) {
    margin-top: 64px;
  }
  @media screen and (max-width: 820px) {
    gap: 32px 0;
    margin-top: 72px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 40px;
  }
`;

export const TitleBox = styled.div``;
export const Title = styled(motion.h2)`
  font-size: calc(35px + 1.1vw);
  line-height: calc(63px + 1.1vw);

  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: 4.7vw;
    line-height: 7vw;
  }

  @media screen and (max-width: 820px) {
    font-size: calc(20px + 2vw);
    line-height: calc(38px + 2vw);
  }

  @media screen and (max-width: 500px) {
    font-size: 1.75rem;
    line-height: 2.625rem;
  }
`;
export const TitleContainer = styled.div`
  overflow: hidden;
`;
export const SubTitle = styled(motion.p)`
  font-size: calc(12px + 0.6vw);
  line-height: calc(22px + 0.6vw);
  color: ${({ theme }) => theme.colors.textBlack};
  font-weight: 300;
  margin-top: 4px;

  @media screen and (max-width: 1024px) {
    line-height: calc(21px + 0.6vw);
  }

  @media screen and (max-width: 820px) {
    font-size: calc(11px + 0.6vw);
    line-height: calc(19px + 0.6vw);
  }

  @media screen and (max-width: 500px) {
    font-size: 0.875rem;
    line-height: 1.3125rem;
  }
`;
export const FilterContainer = styled.div`
  display: flex;
  gap: 0 16px;

  @media screen and (max-width: 500px) {
    gap: 0 12px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px 0;

  @media screen and (max-width: 1024px) {
    gap: 32px 0;
  }

  @media screen and (max-width: 820px) {
    gap: 24px 0;
  }
  @media screen and (max-width: 500px) {
    gap: 18px 0;
  }
`;

export const Button = styled.span`
  width: 90px;
  height: 40px;
  font-size: 18px;
  font-weight: 500;
  padding: 6px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.greyScale2};
  background: ${({ theme }) => theme.colors.greyScale4};
  border-radius: 32px;

  @media screen and (max-width: 1024px) {
    width: calc(19px + 7vw);
  }
  @media screen and (max-width: 820px) {
    font-size: 1rem;
    line-height: 1.5rem;
    width: calc(39px + 5vw);
    height: 36px;
  }

  @media screen and (max-width: 500px) {
    width: 64px;
    height: 32px;
    font-size: 0.875rem;
    line-height: 1.3125rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.blue4};
    transition: all 0.3s ease-in-out;
  }
  &.active {
    background: ${({ theme }) => theme.colors.blue1};
    border-radius: 32px;
    color: white;
  }
`;

export const CardForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 56px 30px;
  min-height: 45vh;

  @media screen and (max-width: 1024px) {
    gap: 40px 12px;
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr 1fr;
    gap: 48px 13px;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 32px 0;
  }
`;

export const Card = styled(motion.a)`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  width: 100%;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    gap: 14px 0;
  }

  & .underline-hover_target {
    display: inline;
    position: relative;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size 0.4s ease;
    padding-bottom: 3px;
    transition-property: background-size, color;
  }
  &:hover .underline-hover_target {
    background-position: 0% 100%;
    background-size: 100% 2px;
  }
  &:hover img {
    transform: scale(1.05);
  }
`;
export const ImageContainer = styled.div`
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 1.3 / 1;

  @media screen and (max-width: 500px) {
    aspect-ratio: unset;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
    display: block;
  }
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px 0;
`;

export const ContentTitle = styled.div`
  font-size: calc(14px + 0.42vw);
  line-height: calc(23px + 0.42vw);
  color: ${({ theme }) => theme.colors.titleBlack};
  font-weight: 600;
  position: relative;

  @media screen and (max-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.575rem;
  }

  @meida screen and (max-width: 500px) {
    font-size: 1rem;
    line-height: 1.4rem;
  }
`;

export const ContentDate = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.greyScale2};
  font-weight: 400;

  @media screen and (max-width: 1024px) {
    font-size: 0.875rem;
    line-height: 1.225rem;
  }

  @medi screen and (max-width: 500px) {
    font-size: 0.8125rem;
    line-height: 1.1375rem;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px 0;

  @media screen and (max-width: 1024px) {
    gap: 56px 0;
  }
  @media screen and (max-width: 820px) {
    gap: 40px 0;
  }
  @media screen and (max-width: 500px) {
    gap: 28px 0;
  }
`;

export const DetailTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px 0;
  margin-top: 72px;

  @media screen and (max-width: 1024px) {
    margin-top: 56px;
    gap: 8px 0;
  }
  @media screen and (max-width: 500px) {
    gap: 6px 0;
    margin-top: 42px;
  }
`;
export const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
    background: ${({ theme }) => theme.colors.blue2};
    width: 95px;
    height: 40px;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  & > div {
    font-size: 50px;
    text-align: center;
    line-height: 65px;
    font-weight: 700;
    overflow: hidden;
    display: flex;
    gap: 0 16px;

    @media screen and (max-width: 1024px) {
      gap: 0 8px;
    }
  }

  & h3 {
    font-size: calc(27px + 1.2vw);
    line-height: calc(41px + 1.6vw);

    @media screen and (max-width: 1024px) {
      font-size: 2.25rem;
      line-height: 3.375rem;
    }
    @media screen and (max-width: 820px) {
      font-size: calc(20px + 1.5vw);
      line-height: calc(36px + 1.5vw);
    }
    @media screen and (max-width: 500px) {
      font-size: calc(17px + 1.3vw);
      line-height: calc(28px + 1.3vw);
    }
  }
`;

export const PostDate = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.greyScale2};
  padding: 10px;
  border-top: 1px solid ${({ theme }) => theme.suportColor.border};

  @media screen and (max-width: 820px) {
    font-size: calc(8px + 1vw);
    line-height: calc(14px + 1vw);
    padding: 6px 4px;
  }
`;
export const DetailContent = styled.div``;

export const DetailPostLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px 0;

  @media screen and (max-width: 820px) {
    gap: 20px 0;
  }

  @media screen and (max-width: 500px) {
    gap: 24px 0;
  }

  & p {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.bodyBlack};
    line-height: 36px;
    letter-spacing: -0.02rem;

    @media screen and (max-width: 1024px) {
      font-size: 1.125rem;
      line-height: 2.025rem;
    }

    @media screen and (max-width: 820px) {
      font-size: 1rem;
      line-height: 1.8rem;
      font-weight: 400;
    }

    @media screen and (max-width: 500px) {
      font-size: 0.875rem;
      line-height: 1.575rem;
    }
  }
  & img {
    width: 100%;
    height: 100%;
    max-height: 800px;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
    display: block;
  }
  & .grid-columns-1-1-1 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: unset;
    gap: 0 20px;

    @media screen and (max-width: 1024px) {
      gap: 0 12px;
    }
    @media screen and (max-width: 820px) {
      gap: 0 8px;
    }
    @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 12px 0px;
    }
  }

  & .gp-8-0 {
    gap: 8px 0;
  }
  & .bold {
    font-weight: 600;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: grid;
  gap: 0 20px;

  @media screen and (max-width: 1024px) {
    gap: 0 12px;
  }
  @media screen and (max-width: 820px) {
    gap: 0 10px;
  }
  @media screen and (max-width: 500px) {
    gap: 12px 0;
  }
  &.cols-fraction-1-4-1 {
    grid-template-columns: 1.4fr 1fr;
    @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  }
`;
export const ImgCaption = styled.div`
  display: flex;
  justify-content: flex-end;

  & p {
    font-size: 14px;
    line-height: 25.2px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray6};
    letter-spacing: -0.01rem;

    @media screen and (max-width: 1024px) {
      font-size: 0.75rem;
      line-height: 1.35rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 0.6875rem;
      line-height: 1.2375rem;
    }
  }
`;
export const RelatedArticles = styled.div`
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.suportColor.borderline};
  & > p {
    font-size: 1.25rem;
    line-height: 36px;
    @media screen and (max-width: 1024px) {
      font-size: 1rem;
      line-height: 1.8rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 0.875rem;
      line-height: 1.575rem;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 42px 0 40px;
  }
  @media screen and (max-width: 820px) {
    padding: 40px 0 24px;
  }
  @media screen and (max-width: 500px) {
    gap: 8px 0;
    padding: 32px 0 20px;
  }
`;

export const ArticlesForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
`;
export const ArticleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 12px;

  @media screen and (max-width: 500px) {
    gap: 0 4px;
  }

  & p,
  a {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;

    @media screen and (max-width: 1024px) {
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }

    @media screen and (max-width: 820px) {
      font-size: 0.75rem;
      line-height: 1.125rem;
    }

    @media screen and (max-width: 500px) {
    }
  }
`;

export const PostCompany = styled.p`
  min-width: fit-content;
`;
export const PostLink = styled.a`
  text-decoration: underline;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SkeletonCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  width: 33.3%;
  cursor: pointer;
`;
export const SkeletonImage = styled.div`
  width: 100%;
  aspect-ratio: 1.3/1;
  object-fit: cover;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.greyScale3};
`;
export const SkeletonContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px 0;
`;
export const SkeletonType = styled.div`
  width: 65px;
  height: 26px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.greyScale3};
`;
export const SkeletonTitle = styled.div`
  line-height: 31px;
  background: ${({ theme }) => theme.colors.greyScale3};
  margin-top: 2px;
  width: 100%;
  height: 31px;
`;
export const SkeletonDate = styled.div`
  height: 16px;
  width: 100px;
  background: ${({ theme }) => theme.colors.greyScale3};
`;

export const BackButton = styled.button`
  padding: 10px 26px;
  border-radius: 8px;
  background: #004d8e;
  color: white;
  font-size: 17px;
  letter-spacing: 0.5px;
  font-weight: 400;
  margin-top: 24px;
  float: right;
  font-family: "Pretendard";

  @media screen and (max-width: 1024px) {
    padding: 8px 24px;
    font-size: 1rem;
    margin-top: 42px;
  }
  @media screen and (max-width: 820px) {
    padding: 7.5px 20px;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    margin-top: 24px;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
    line-height: 1.125rem;
    padding: 7px 15px;
    margin-top: 20px;
  }
`;

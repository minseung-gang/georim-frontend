import styled from "styled-components";

export const DotContainer = styled.div<{
  $select?: boolean;
  $darkTheme?: boolean;
}>`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  .svg {
    display: block;
    position: relative;
  }
  .border {
    fill: none;
    stroke-width: 3;
  }

  /*  ${(props) => props.$select && "border: 1px solid white"}; */
  & > div {
    background: ${({ theme, $select, $darkTheme }) =>
      $select
        ? $darkTheme
          ? theme.dark.dots
          : theme.white.dots
        : $darkTheme
        ? "rgba(255,255,255,0.5)"
        : "rgba(22, 49, 114, 0.5)"};
  }
`;

export const Progress = styled.circle<{ $darkTheme: boolean }>`
  fill: none;
  stroke: ${({ $darkTheme, theme }) =>
    $darkTheme ? "white" : theme.colors.blue2};
  stroke-width: 1;
  stroke-dasharray: 125.6;
  stroke-dashoffset: 125.6;
  animation: progress 2s ease-in-out forwards;
  @keyframes progress {
    100% {
      stroke-dashoffset: 0;
    }
  }
`;
export const DotItem = styled.div<{ $select?: boolean; $darkTheme?: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 9999px;
`;

export const DotWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 17px 0;
  right: 40px;
  top: 0;
  z-index: 3;

  @media screen and (max-width: 1536px) {
    right: 20px;
  }
  @media screen and (max-width: 1380px) {
    display: none;
  }
`;

export const TitleSection = styled.div`
  position: fixed;
  top: 50%;
  left: 60px;
  width: 0;
  transform: translateY(-50%) rotate(270deg);

  & p {
    color: white;
    white-space: nowrap;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 1rem;
  }
  @media screen and (max-width: 1536px) {
    display: none;
  }
`;

export const TitleInner = styled.div`
  position: absolute;
  top: 50%;
  transform: translateX(-50%);
`;
export const SectionTitle = styled.p<{ $current: boolean }>``;

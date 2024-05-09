import { useSetRecoilState, useRecoilState } from "recoil";
import * as Com from "../../styles/home/dots.styled";
import { useEffect, useState } from "react";
import { fullpageStates, headerStates } from "../../recoil/modal";

type PDot = {
  index: number;
  currentIndex: number;
  /*   onClick: (index: number) => void; */
};
const Dot: React.FC<PDot> = ({ index, currentIndex /*  onClick */ }) => {
  const selected = index === currentIndex;
  const [headerState] = useRecoilState(headerStates);
  const { headerDefault } = headerState;
  return (
    <Com.DotContainer $select={selected} $darkTheme={headerDefault}>
      <Com.DotItem $select={selected} $darkTheme={headerDefault} />

      {selected && (
        <svg width="20" height="20" className="svg">
          <circle r="8" cx="10" cy="10" className="border"></circle>
          <Com.Progress r="8" cx="10" cy="10" $darkTheme={headerDefault} />
        </svg>
      )}
    </Com.DotContainer>
  );
};

type TDots = {
  limit: number;
  currentIndex: number;
  onDotClick?: (index: number) => void;
};

export const Dots: React.FC<TDots> = ({ limit, currentIndex, onDotClick }) => {
  const setHeaderState = useSetRecoilState(headerStates);
  const [state, setState] = useRecoilState(fullpageStates);

  useEffect(() => {
    if (currentIndex == 1 || currentIndex == 2 || currentIndex == 5) {
      if (currentIndex == 2 || currentIndex == 5) {
        return setHeaderState((prev) => ({
          ...prev,
          headerDefault: true,
          headerBlur: true,
        }));
      }
      return setHeaderState((prev) => ({
        ...prev,
        headerBlur: false,
        headerDefault: true,
      }));
    } else if (currentIndex == 3 || currentIndex == 4) {
      return setHeaderState((prev) => ({
        ...prev,
        headerBlur: false,
        headerDefault: false,
      }));
    }
  }, [currentIndex]);
  const titleList = ["HOME", "BUSINESS AREA", "CAREER", "", "", "CONTACT"];
  return (
    <>
      <Com.DotWrapper>
        {Array(limit)
          .fill("")
          .map((_, index) => (
            <Dot index={index} currentIndex={currentIndex} key={index}></Dot>
          ))}
      </Com.DotWrapper>

      <Com.TitleSection>
        <Com.TitleInner>
          {titleList.map(
            (text, index) =>
              currentIndex == index && (
                <Com.SectionTitle
                  $current={currentIndex == index}
                  key={"text" + index}
                >
                  {text}
                </Com.SectionTitle>
              )
          )}
        </Com.TitleInner>
      </Com.TitleSection>
    </>
  );
};

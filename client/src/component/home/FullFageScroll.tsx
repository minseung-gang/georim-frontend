import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { Dots } from "./Dots";
import { useRecoilState } from "recoil";
import { fullpageStates, headerStates } from "../../recoil/modal";

type PFullPageScroll = {
  onPageChange?: (page: number) => void;
  onLoad?: (limit: number) => void;
} & PropsWithChildren;

export const FullPageScroll: React.FC<PFullPageScroll> = ({
  children,
  onLoad = () => {},
  onPageChange = () => {},
}) => {
  const outerDivRef = useRef<HTMLDivElement>(null);
  const [event, setEvent] = useRecoilState(headerStates);
  const [state, setState] = useRecoilState(fullpageStates);
  const currentPage = useRef<number>(state.currentIndex);
  const canScroll = useRef<boolean>(true);
  const oldTouchY = useRef<number>(0);
  const [_, refresh] = useState<number>(0);
  const touchTimerRef = useRef<NodeJS.Timeout | null>(null);
  let count = 0;

  useEffect(() => {
    setState((prev) => ({ ...prev, currentIndex: currentPage.current }));
  }, [currentPage.current]);

  const scrollDown = () => {
    const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight;

    if (
      outerDivRef.current &&
      pageHeight &&
      canScroll.current &&
      currentPage.current < outerDivRef.current.childElementCount - 1
    ) {
      outerDivRef.current.scrollTo({
        top: pageHeight * (currentPage.current + 1),
        left: 0,
        behavior: "smooth",
      });

      canScroll.current = false;
      setTimeout(() => {
        canScroll.current = true;
      }, 1000);

      currentPage.current++;

      onPageChange(currentPage.current);
      refresh((v) => v + 1);
    }
  };

  const scrollUp = () => {
    const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight;
    if (
      outerDivRef.current &&
      pageHeight &&
      canScroll.current &&
      currentPage.current > 0
    ) {
      outerDivRef.current.scrollTo({
        top: pageHeight * (currentPage.current - 1),
        left: 0,
        behavior: "smooth",
      });

      canScroll.current = false;
      setTimeout(() => {
        canScroll.current = true;
      }, 1000);

      currentPage.current--;

      onPageChange(currentPage.current);
      refresh((v) => v + 1);
    }
  };

  const wheelHandler = (e: WheelEvent) => {
    e.preventDefault();
    if (!canScroll.current) return;
    const { deltaY } = e; // +는 밑 -는 위

    if (deltaY > 0 && outerDivRef.current) {
      // 메인 배너에서 아래로 스크롤할 때
      if (currentPage.current === 0 && count == 0) {
        setState((prev) => ({ ...prev, banner: true }));
        setTimeout(() => {
          setEvent((prev) => ({ ...prev, headerDefault: true }));
        }, 400);
        setTimeout(() => {
          count = 1;
        }, 1000);
        return;
      }
      if (count > 0) {
        scrollDown();
      }
    } else if (deltaY < 0 && outerDivRef.current) {
      // 메인 배너에서 위로 스크롤할 때
      if (currentPage.current === 0 && count == 1) {
        count = 0;
        setState((prev) => ({ ...prev, banner: false }));
        setEvent((prev) => ({ ...prev, headerDefault: false }));
        return;
      }
      scrollUp();
    }
  };

  const scrollHandler = (e: Event) => {
    e.preventDefault();
  };

  const onTouchMove = (e: TouchEvent) => {
    e.preventDefault();
  };

  const onTouchDown = (e: TouchEvent) => {
    // 터치 다운 시 타이머 설정
    touchTimerRef.current = setTimeout(() => {
      // 일정 시간이 지나도록 터치가 유지되지 않으면 타이머를 초기화하고 이벤트를 무시
      touchTimerRef.current = null;
      return;
    }, 300);

    const currentTouchY = e.changedTouches[0].clientY; // 첫 번째 터치 포인트의 Y 좌표
    oldTouchY.current = currentTouchY; // 현재 터치 Y 좌표를 이전 터치 Y 좌표로 설정
  };

  const onTouchUp = (e: TouchEvent) => {
    const currentTouchY = e.changedTouches[0].clientY;
    const isScrollDown: boolean = oldTouchY.current - currentTouchY > 0;

    if (Math.abs(oldTouchY.current - currentTouchY) < 50) return;

    if (isScrollDown) {
      if (currentPage.current === 0 && count === 0) {
        setState((prev) => ({ ...prev, banner: true }));
        setTimeout(() => {
          setEvent((prev) => ({ ...prev, headerDefault: true }));
        }, 400);
        setTimeout(() => {
          count = 1;
        }, 1000);
        return;
      }
      if (count > 0) {
        scrollDown();
      }
    } else {
      if (currentPage.current === 0 && count === 1) {
        count = 0;
        setState((prev) => ({ ...prev, banner: false }));
        setEvent((prev) => ({ ...prev, headerDefault: false }));
        return;
      }
      scrollUp();
    }
  };

  const keyDownHandler = (e: KeyboardEvent) => {
    if (!canScroll.current) return;

    if (e.key === "ArrowDown") {
      if (currentPage.current === 0 && count == 0) {
        setState((prev) => ({ ...prev, banner: true }));
        setTimeout(() => {
          setEvent((prev) => ({ ...prev, headerDefault: true }));
        }, 400);
        setTimeout(() => {
          count = 1;
        }, 1000);
        return;
      }
      scrollDown();
    } else if (e.key === "ArrowUp") {
      if (currentPage.current === 0 && count == 1) {
        count = 0;
        setState((prev) => ({ ...prev, banner: false }));
        setEvent((prev) => ({ ...prev, headerDefault: false }));
        return;
      }
      scrollUp();
    }
  };

  useEffect(() => {
    if (state.banner) {
      setEvent((prev) => ({ ...prev, headerDefault: true }));
      count = 1;
      const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight;
      if (pageHeight) {
        outerDivRef.current.scrollTo({
          top: pageHeight * currentPage.current,
          left: 0,
        });
      }
    }
  }, []);

  useEffect(() => {
    const outer = outerDivRef.current;
    outerDivRef.current?.focus();
    const childCount = outer?.childElementCount;
    const isFooterPresent =
      outer?.lastElementChild?.classList.contains("footer") ?? false;
    if (!outer || !childCount) return;
    /*  onLoad(outerDivRef.current.childElementCount); */
    onLoad(isFooterPresent ? childCount - 1 : childCount);
    refresh((v) => v + 1);
    outer.addEventListener("wheel", wheelHandler);
    outer.addEventListener("scroll", scrollHandler);
    outer.addEventListener("touchmove", onTouchMove);
    outer.addEventListener("touchstart", onTouchDown);
    outer.addEventListener("touchend", onTouchUp);
    outer.addEventListener("keydown", keyDownHandler);
    return () => {
      outer.removeEventListener("wheel", wheelHandler);
      outer.removeEventListener("scroll", scrollHandler);
      outer.removeEventListener("touchmove", onTouchMove);
      outer.removeEventListener("touchstart", onTouchDown);
      outer.removeEventListener("touchend", onTouchUp);
      outer.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  const movePageTo = (index: number) => {
    const num = currentPage.current;
    if (index > num) for (let i = 0; i < index - num; i++) scrollDown();
    else if (index < num) for (let i = 0; i < num - index; i++) scrollUp();
  };

  return (
    <>
      <div
        ref={outerDivRef}
        tabIndex={0}
        style={{ height: "100vh", width: "100%", overflow: "hidden" }}
      >
        {children}
      </div>
      <Dots
        limit={
          (outerDivRef.current && outerDivRef.current?.childElementCount - 1) ||
          0
        }
        currentIndex={currentPage.current}
      />
    </>
  );
};

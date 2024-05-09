import React, { useEffect, useState, useRef } from "react";
import { useTransform, useScroll } from "framer-motion";
import { throttle } from "throttle-debounce-ts";

// Viewport에서 상대 위치를 계산해서 리턴해주는 함수
function useElementViewportPosition(ref: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;

    setPosition([start / pageHeight, end / pageHeight]);
  }, []);

  return { position };
}

/**
 * 컴포넌트가 화면 스크롤에 따라 변하는 효과를 적용하기 위한 훅입니다.
 * @returns {{ carouselRef: React.RefObject<HTMLDivElement>, x: any, ref: React.RefObject<HTMLDivElement> }}
 */
function useScrollHook() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { position } = useElementViewportPosition(ref);
  const [scrollEndPosition, setScrollEndPosition] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const resetCarouselEndPosition = () => {
      if (scrollRef && scrollRef.current) {
        const parent = scrollRef.current.parentElement;
        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;

        const newPosition =
          scrollRef.current.clientWidth -
          window.innerWidth -
          scrollbarWidth +
          (parent as HTMLElement).offsetLeft * 2;
        setScrollEndPosition(-newPosition);
      }
    };

    resetCarouselEndPosition();
    const handleResize = throttle(10, resetCarouselEndPosition);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { scrollRef, ref, position, scrollEndPosition, scrollYProgress };
}

export default useScrollHook;

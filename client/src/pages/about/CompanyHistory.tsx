import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { isBrowser, isMobile } from "react-device-detect";
import * as History from "../../styles/history/history.styled";
import Breadcrumb from "../../component/Breadcrumb";
import BrowserInner from "../../component/about/BrowserInner";
import MobileInner from "../../component/about/MobileInner";

function CompanyHistory() {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);

  useEffect(() => {
    const options = {
      root: null, // viewport를 기준으로 감시
      rootMargin: isMobile ? "-40% 0px 30% 0px" : "-40% 0px -10% 0px",
      threshold: 1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // 현재 진입한 영역의 컨테이너를 찾음
          const container = sectionRefs.find((ref) =>
            ref.current?.contains(entry.target)
          );
          if (container) {
            // 현재 화면에 진입한 섹션을 찾아서 인덱스를 반영
            const newIndex = sectionRefs.findIndex(
              (ref) => ref.current === entry.target
            );
            setActiveSectionIndex(newIndex);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  return (
    <div>
      <History.Banner>
        <History.BannerTitle>
          <div>
            <motion.h3
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              HISTORY OF GEORIM
            </motion.h3>
          </div>
          <div>
            <motion.h3
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              SINCE 2016
            </motion.h3>
          </div>
          <History.ScrollBar />
        </History.BannerTitle>
      </History.Banner>
      <History.Contents>
        <Breadcrumb right sections={["ABOUT", "연혁"]} />
        {isMobile ? (
          <MobileInner index={activeSectionIndex} sectionRefs={sectionRefs} />
        ) : (
          <BrowserInner index={activeSectionIndex} sectionRefs={sectionRefs} />
        )}
      </History.Contents>
    </div>
  );
}

export default CompanyHistory;

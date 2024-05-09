import React, { useEffect, useRef, useState } from "react";
import * as Hom from "../../styles/home/home.styled";
import { throttle } from "throttle-debounce-ts";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { useRecoilState } from "recoil";
import { fullpageStates, headerStates } from "../../recoil/modal";

function Banner() {
  const [event, setEvent] = useRecoilState(fullpageStates);

  const [state, setState] = useRecoilState(headerStates);

  useEffect(() => {
    if (isBrowser) {
      setState((prev) => ({
        ...prev,
        headerDefault: false,
      }));
    } else if (isMobile) {
      setState((prev) => ({
        ...prev,
        headerDefault: true,
      }));
    }
  }, []);

  return (
    <Hom.Banner>
      <Hom.StikyWrapper>
        <Hom.BannerTitle1 $active={event.banner} translate="no">
          <h2>
            <span>다양한 분야,</span>
            <span>폭 넓은 경험으로</span>
          </h2>
          <h2>
            <span>부동산의 모든 가능성을</span> <span>펼치는 기업</span>
          </h2>
        </Hom.BannerTitle1>
        <Hom.BannerTitle2 $active={event.banner} translate="no">
          <h2>
            <span>프로젝트의 시작부터</span>
            <span>성공적인 마무리까지,</span>
          </h2>
          <h2>거림이 늘 함께합니다.</h2>
        </Hom.BannerTitle2>
        <Hom.Video className="video" $active={event.banner}>
          <Hom.Player
            url={process.env.PUBLIC_URL + "/media/banner.mp4"}
            width="100vw"
            height="100%"
            autoPlay
            playing
            muted
            controls={false}
            loop
            playsinline
          />
        </Hom.Video>
        <Hom.ScrollMessage>
          <p translate="no">SCROLL</p>
          <Hom.ScrollBar />
        </Hom.ScrollMessage>
      </Hom.StikyWrapper>
    </Hom.Banner>
  );
}

export default Banner;

import React, { useState, useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { useRecoilState } from "recoil";
import { headerStates } from "../../recoil/modal";
import Layout from "../../component/Layout";
import * as Pro from "../../styles/news/promoVideo.styled";
import { motion } from "framer-motion";
import Breadcrumb from "../../component/Breadcrumb";

function PromoVideo() {
  const [state, setState] = useRecoilState(headerStates);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setState((prev) => ({ ...prev, headerDefault: false }));
  }, []);

  const options: YouTubeProps["opts"] = {
    height: "100vw",
    width: "100%",
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
    },
  };

  const handleVideoReady = () => {
    setVideoLoaded(true);
  };
  return (
    <Pro.Wrpper>
      <Pro.Inner>
        <Breadcrumb sections={["NEWS", "홍보영상"]} />

        <Pro.Content>
          <div>
            <motion.h3
              initial={{ y: 90 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              홍보영상
            </motion.h3>
          </div>

          <Pro.ContentInner>
            <Pro.VideoForm>
              <Pro.Video onLoad={videoLoaded}>
                <YouTube
                  videoId="NAUawPmT3uE"
                  opts={options}
                  onReady={handleVideoReady}
                  onEnd={(e) => {
                    e.target.stopVideo(0);
                  }}
                />
              </Pro.Video>
              <Pro.ContentDetail>
                <Pro.ContentTitle>
                  힐스테이트 동인 센트럴 입지영상
                </Pro.ContentTitle>
                <Pro.ContentDate>2020.04.27</Pro.ContentDate>
              </Pro.ContentDetail>
            </Pro.VideoForm>
          </Pro.ContentInner>
        </Pro.Content>
      </Pro.Inner>
    </Pro.Wrpper>
  );
}

export default PromoVideo;

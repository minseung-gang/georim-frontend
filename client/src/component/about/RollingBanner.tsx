import { useState } from "react";
import * as Rolling from "../../styles/about/rollingBanner.styled";

const slides = [
  { img: process.env.PUBLIC_URL + "/images/news_01_01.png" },
  { img: process.env.PUBLIC_URL + "/images/news_01_02.png" },
  { img: process.env.PUBLIC_URL + "/images/news_01_03.png" },
  { img: process.env.PUBLIC_URL + "/images/news_01_04.png" },
  { img: process.env.PUBLIC_URL + "/images/news_02_01.png" },
  { img: process.env.PUBLIC_URL + "/images/news_03_01.svg" },
  { img: process.env.PUBLIC_URL + "/images/news_04_01.svg" },
];

export default function RollingBanner() {
  const [animate, setAnimate] = useState(true);
  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  return (
    <Rolling.Wrapper className="wrapper">
      <div className="slide_container">
        <ul
          className="slide_wrapper"
          onMouseEnter={onStop}
          onMouseLeave={onRun}
        >
          <div className={"slide original".concat(animate ? "" : " stop")}>
            {slides.map((s, i) => (
              <li key={i} className="list">
                <img className="item" src={s.img} alt="봉사활동 이미지" />
              </li>
            ))}
          </div>
          <div className={"slide clone".concat(animate ? "" : " stop")}>
            {slides.map((s, i) => (
              <li key={i} className="list">
                <img className="item" src={s.img} alt="봉사활동 이미지" />
              </li>
            ))}
          </div>
        </ul>
      </div>
    </Rolling.Wrapper>
  );
}

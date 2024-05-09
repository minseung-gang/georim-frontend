import styled from "styled-components";

export const Wrapper = styled.div`
  &.wrapper {
    .slide_container {
      overflow: hidden;
      position: relative;
      background: white;
      .slide_wrapper {
        display: flex;
        flex-wrap: nowrap;
      }
      .slide {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        position: relative;
        background: white;

        &.original {
          animation: 70s linear infinite running infiniteAnimation1;
          background: white;
        }
        &.clone {
          animation: 70s linear infinite infiniteAnimation2;
          background: white;
        }
        &.stop {
          animation-play-state: paused;
        }

        li {
          margin: 0 15px;
          z-index: 2;
          transition: 0.3s ease-in-out;
          transform: scale(1);
          border-radius: 8px;
          overflow: hidden;

          @media screen and (max-width: 1024px) {
            margin: 0 6px;
          }

          &:hover {
            transform: scale(1.03);
            &::after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.1);
            }
          }
          &.list {
            width: 33vw;
            aspect-ratio: 5.5 / 3.5;

            @media screen and (max-width: 500px) {
              width: auto;
              height: 200px;
            }
          }
          &.small {
            width: 200px;
            height: 200px;
          }

          .item {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }

  @keyframes infiniteAnimation1 {
    0%,
    100% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(-100%);
    }
    50.01% {
      transform: translateX(100%);
    }
  }
  @keyframes infiniteAnimation2 {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-200%);
    }
  }
`;

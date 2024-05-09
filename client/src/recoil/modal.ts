import { atom } from "recoil";

export const modalsState = atom({
  key: "modalsState",
  default: {
    isOpen: false,
    modalType: "",
    props: {},
  },
});

// header: 헤더 드롭다운을 컨트롤 하기 위한 상태
// scale: 홈화면 비디오 크기에 의해 헤더 컬러 업데이트를 위한 상태
// isScroll: 아래로 스크롤 했을 때 false 위로 혹은 멈춰있을때 true
export const headerStates = atom({
  key: "headerStates",
  default: {
    headerHover: false,
    headerDefault: true,
    headerBlur: false,
  },
});

export const fullpageStates = atom({
  key: "fullpageStates",
  default: {
    banner: false,
    currentIndex: 0,
  },
});

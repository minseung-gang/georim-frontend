import { atom } from "recoil";

export const buildingData = atom({
  key: "buildingData",
  default: {
    data: [{}],
  },
});

export const NavigateState = atom({
  key: "naviState",
  default: {
    subPage: "",
    currentPage: "",
  },
});

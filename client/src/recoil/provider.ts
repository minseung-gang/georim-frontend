import { atom } from "recoil";

interface PromotionItem {
  state: {
    type: string;
    name: string;
    url: string;
    image: any;
    price?: number[];
    pricePerRoom?: number[];
    areaPrice?: number[];
  }[];
}

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

export const pyengState = atom<PromotionItem>({
  key: "pyengState",
  default: {
    state: [],
  },
});

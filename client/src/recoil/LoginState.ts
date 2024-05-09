import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorage",
  storage: localStorage,
});

export const LoginState = atom({
  key: "LoginState",
  default: {
    username: "",
  },
  effects_UNSTABLE: [persistAtom],
});

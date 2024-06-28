import React from "react";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { modalsState } from "../../recoil/modal";
import Promotion from "./Promotion";

const GlobalModal = () => {
  const { isOpen, modalType, props } = useRecoilValue(modalsState);

  if (!isOpen) return null;

  const MODAL_COMPONENTS: { [key: string]: JSX.Element } = {
    promotion: <Promotion {...props} />,
  };

  return <div>{MODAL_COMPONENTS[modalType]}</div>;
};

export default GlobalModal;

import React from "react";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { modalsState } from "../../recoil/modal";

const GlobalModal = () => {
  const { isOpen, modalType, props } = useRecoilValue(modalsState);

  if (!isOpen) return null;

  const MODAL_COMPONENTS: { [key: string]: JSX.Element } = {
    // ... (다른 모달 컴포넌트 정의)
  };

  return <div>{MODAL_COMPONENTS[modalType]}</div>;
};

export default GlobalModal;

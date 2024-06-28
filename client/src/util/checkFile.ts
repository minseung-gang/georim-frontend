import { State } from "../reducer/postReducer";

export const handleCheckData = (state: State) => {
  const {
    category,
    name,
    image,
    url,
    type,
    address,
    houseHold,
    lowFloor,
    highFloor,
    floorAreaRatio,
    buildingCoverRatio,
    lotArea,
    totalFloorArea,
    developmentDate,
  } = state;

  // "sales" 카테고리인 경우와 그렇지 않은 경우에 따라 다른 유효성 검사를 수행
  if (category === "sales") {
    if (
      name === "" ||
      url === "" ||
      type.length === 0 ||
      address === "" ||
      houseHold === "" ||
      lowFloor === "" ||
      highFloor === ""
    ) {
      return false;
    }
  } else {
    // "sales" 카테고리가 아닌 경우

    if (
      name === "" ||
      url === "" ||
      type.length === 0 ||
      address === "" ||
      houseHold === "" ||
      lowFloor === "" ||
      highFloor === "" ||
      floorAreaRatio === 0 ||
      buildingCoverRatio === 0 ||
      lotArea === 0 ||
      totalFloorArea === 0 ||
      developmentDate === ""
    ) {
      return false;
    }
  }
  return true;
};

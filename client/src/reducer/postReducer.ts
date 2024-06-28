type Action = {
  type: string;
  payload?: any;
};

export type State = {
  name: string;
  category: string;
  url: string | "";
  view: string | "";
  image: File | null;
  developmentDate: string;
  type: string[];
  address: string;
  houseHold: string;
  lowFloor: string;
  highFloor: string;
  floorAreaRatio: number;
  buildingCoverRatio: number;
  lotArea: number;
  totalFloorArea: number;
  status: number;
  hasPromotion: boolean;
  pyeng: string[];
  fileLink: string;
  homepage: string;
  phone: string | "";
  isDeleted: boolean;
};

export const initialState = {
  name: "",
  category: "",
  url: "",
  view: "",
  image: null,
  developmentDate: "",
  type: [],
  address: "",
  houseHold: "",
  lowFloor: "",
  highFloor: "",
  floorAreaRatio: 0,
  buildingCoverRatio: 0,
  lotArea: 0,
  totalFloorArea: 0,
  status: 0,
  hasPromotion: false,
  pyeng: [],
  fileLink: "",
  homepage: "",
  phone: "",
  isDeleted: false,
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_CATEGORY":
      return { ...state, category: action.payload };
    case "UPDATE_VIEW":
      return { ...state, view: action.payload };
    case "UPDATE_IMAGE":
      return { ...state, image: action.payload };
    case "UPDATE_DEVELOPMENT_DATE":
      return { ...state, developmentDate: action.payload };
    case "UPDATE_TYPE":
      const newType = [...state.type, action.payload];
      newType.sort((a, b) => {
        // 길이가 다르면 길이 순으로 정렬

        if (a.length !== b.length) {
          return a.length - b.length;
        } else {
          // 길이가 같으면 한글 순으로 정렬
          return a.localeCompare(b, "ko");
        }
      });
      return { ...state, type: newType };
    case "DELETE_TYPE":
      const filteredArr = state.type.filter((item) => item !== action.payload);
      return { ...state, type: filteredArr };
    case "UPDATE_ADDRESS":
      return { ...state, address: action.payload };
    case "UPDATE_HOUSE_HOLD":
      return { ...state, houseHold: action.payload };
    case "UPDATE_LOW_FLOOR":
      return { ...state, lowFloor: action.payload };
    case "UPDATE_HIGH_FLOOR":
      return { ...state, highFloor: action.payload };
    case "UPDATE_FLOOR_AREA_RATIO":
      return { ...state, floorAreaRatio: action.payload };
    case "UPDATE_BUILDING_COVER_RATIO":
      return { ...state, buildingCoverRatio: action.payload };
    case "UPDATE_LOT_AREA":
      return { ...state, lotArea: action.payload };
    case "UPDATE_TOTAL_FLOOR_AREA":
      return { ...state, totalFloorArea: action.payload };
    case "UPDATE_PHONE":
      return { ...state, phone: action.payload };
    case "RESET_ALL":
      return { ...initialState };

    case "UPDATE_ALL":
      return {
        name: action.payload.name,
        category: action.payload.category,
        url: action.payload.url,
        image: action.payload.image,
        type: action.payload.type,
        address: action.payload.address,
        houseHold: action.payload.houseHold,
        lowFloor: action.payload.lowFloor,
        highFloor: action.payload.highFloor,
        floorAreaRatio: action.payload.floorAreaRatio,
        buildingCoverRatio: action.payload.buildingCoverRatio,
        lotArea: action.payload.lotArea,
        totalFloorArea: action.payload.totalFloorArea,
        developmentDate: action.payload.developmentDate,
        status: action.payload.status,
        hasPromotion: action.payload.hasPromotion,
        pyeng: action.payload.pyeng,
        fileLink: action.payload.fileLink,
        homepage: action.payload.homepage,
        phone: action.payload.phone,
        isDeleted: false,
        view: "",
      };
    case "UPDATE_PYENG":
      return { ...state, pyeng: action.payload };
    case "ADD_PYENG":
      return { ...state, pyeng: [...state.pyeng, ...action.payload] };
    case "DELETE_PYENG":
      let filteredData = state.pyeng.filter((item, idx) => {
        return idx !== action.payload;
      });
      return { ...state, pyeng: filteredData };
    case "DELETE_PYENG_AND_SET_DELETED":
      let data = state.pyeng.filter((item, idx) => {
        return idx !== action.payload;
      });
      if (data.length === 0) {
        data = [];
      }
      return { ...state, isDeleted: true, pyeng: data };
    case "UPDATE_HOMEPAGE":
      return { ...state, homepage: action.payload };
    case "UPDATE_FILELINK":
      return { ...state, fileLink: action.payload };
    case "UPDATE_STATUS":
      return { ...state, status: action.payload };
    case "UPDATE_HAS_PROMOTION":
      return { ...state, hasPromotion: action.payload };
    default:
      return state;
  }
};

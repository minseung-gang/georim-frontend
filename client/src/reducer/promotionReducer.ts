type Action = {
  type: string;
  payload?: any;
};

export type State = {
  url: string | "";
  image: File | null;
  type: string;
  name: string;
  minPrice: number;
  maxPrice: number;
  minPricePerRoom: number;
  maxPricePerRoom: number;
  minAreaPrice: number;
  maxAreaPrice: number;
};

export const initialState = {
  url: "",
  image: null,
  type: "pyeng",
  name: "",
  minPrice: 0,
  maxPrice: 0,
  minPricePerRoom: 0,
  maxPricePerRoom: 0,
  minAreaPrice: 0,
  maxAreaPrice: 0,
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "UPDATE_URL":
      return { ...state, url: action.payload };
    case "UPDATE_IMAGE":
      return { ...state, image: action.payload };
    case "UPDATE_TYPE":
      return { ...state, type: action.payload };
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_MIN_PRICE":
      return { ...state, minPrice: action.payload };
    case "UPDATE_MAX_PRICE":
      return { ...state, maxPrice: action.payload };
    case "UPDATE_MIN_PRICE_PER_ROOM":
      return { ...state, minPricePerRoom: action.payload };
    case "UPDATE_MAX_PRICE_PER_ROOM":
      return { ...state, maxPricePerRoom: action.payload };
    case "UPDATE_MIN_AREA_PRICE":
      return { ...state, minAreaPrice: action.payload };
    case "UPDATE_MAX_AREA_PRICE":
      return { ...state, maxAreaPrice: action.payload };
    default:
      return state;
  }
};

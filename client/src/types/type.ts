export interface NewsDataType {
  id: number;
  primaryTitle: string;
  secondaryTitle: string;
  text: string[];
  img: {
    main: string;
    sub1?: string[];
    sub2?: string[];
    sub3?: string[];
  };
  imgCaption?: string[];
  date: string;
  pageLink: {
    company: string;
    link: string;
  }[];
  type: number;
}

export interface IDataType {
  id: number;
  name: string;
  type: string[];
  url: string;
  category: string;
  address: string;
  houseHold: string;
  lowFloor: string;
  highFloor: string;
  floorAreaRatio: number;
  buildingCoverRatio: number;
  lotArea: number;
  totalFloorArea: number;
  developmentDate: string;
}

export interface ICardType {
  id: number;
  name: string;
  category: string;
  url: string | "";
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
  fileLink: string;
  map: {
    center: { lat: number; lng: number };
    bounds: { lat: number; lng: number }[];
  };
  phone: string;
  status: string;
  pyeng: {
    areaPrice?: string[];
    pricePerRoom?: string[];
    price?: string[];
    name: string;
    type: string;
    url: string;
  }[];

  homepage: string;
}

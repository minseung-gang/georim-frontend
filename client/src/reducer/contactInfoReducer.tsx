export type Action = {
  type: string;
  payload: {
    fieldName?: string;
    value?: string | boolean;
  };
};

export type State = {
  privacyAccepted: boolean;
  currentTab: string;
  salesForm: {
    companyName: string;
    contactName: string;
    phoneNumber: string;
    email: string;
    siteName: string;
    siteAddress: string;
  };
  movingInForm: {
    companyName: string;
    contactName: string;
    phoneNumber: string;
    email: string;
    siteName: string;
    siteAddress: string;
  };
  developForm: {
    companyName: string;
    contactName: string;
    phoneNumber: string;
    email: string;
    siteAddress: string;
  };
  otherForm: {
    contactName: string;
    phoneNumber: string;
    email: string;
    inquiryDetails: string;
  };
};

export const initialState = {
  privacyAccepted: false,
  currentTab: "salesForm",
  salesForm: {
    companyName: "",
    contactName: "",
    phoneNumber: "",
    email: "",
    siteName: "",
    siteAddress: "",
  },
  movingInForm: {
    companyName: "",
    contactName: "",
    phoneNumber: "",
    email: "",
    siteName: "",
    siteAddress: "",
  },
  developForm: {
    companyName: "",
    contactName: "",
    phoneNumber: "",
    email: "",
    siteAddress: "",
  },
  otherForm: {
    contactName: "",
    phoneNumber: "",
    email: "",
    inquiryDetails: "",
  },
};

function contactInfoReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "UPDATE_AGREE_STATE":
      return {
        ...state,
        privacyAccepted: !action.payload.value as boolean,
      };
    case "UPDATE_CURRENT_TAB":
      return {
        ...state,
        currentTab: action.payload.value as string,
      };
    case "UPDATE_SALES_FORM_FIELD":
      return {
        ...state,
        salesForm: {
          ...state.salesForm,
          [action.payload.fieldName!]: action.payload.value,
        },
      };
    case "RESET_FORM_FIELD":
      return {
        ...state,
        salesForm: {
          companyName: "",
          contactName: "",
          phoneNumber: "",
          email: "",
          siteName: "",
          siteAddress: "",
        },
        movingInForm: {
          companyName: "",
          contactName: "",
          phoneNumber: "",
          email: "",
          siteName: "",
          siteAddress: "",
        },
        developForm: {
          companyName: "",
          contactName: "",
          phoneNumber: "",
          email: "",
          siteAddress: "",
        },
        otherForm: {
          contactName: "",
          phoneNumber: "",
          email: "",
          inquiryDetails: "",
        },
      };
    case "UPDATE_MOVING_IN_FORM_FIELD":
      return {
        ...state,
        movingInForm: {
          ...state.movingInForm,
          [action.payload.fieldName!]: action.payload.value,
        },
      };
    case "RESET_MOVING_IN_FORM_FIELD":
      return {
        ...state,
        movingInForm: {
          companyName: "",
          contactName: "",
          phoneNumber: "",
          email: "",
          siteName: "",
          siteAddress: "",
        },
      };
    case "UPDATE_DEVELOP_FORM_FIELD":
      return {
        ...state,
        developForm: {
          ...state.developForm,
          [action.payload.fieldName!]: action.payload.value,
        },
      };
    case "RESET_DEVELOP_FORM_FIELD":
      return {
        ...state,
        developForm: {
          companyName: "",
          contactName: "",
          phoneNumber: "",
          email: "",
          siteAddress: "",
        },
      };
    case "UPDATE_OTHER_FORM_FIELD":
      return {
        ...state,
        otherForm: {
          ...state.otherForm,
          [action.payload.fieldName!]: action.payload.value,
        },
      };
    case "RESET_OTHER_FORM_FIELD":
      return {
        ...state,
        otherForm: {
          contactName: "",
          phoneNumber: "",
          email: "",
          inquiryDetails: "",
        },
      };
    default:
      return state;
  }
}

export default contactInfoReducer;

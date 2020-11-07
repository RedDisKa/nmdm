import { DictionaryState } from "types";
import * as actionTypes from "../actions/actionTypes/actionTypes";
import { DictionaryActions } from "../actions/actionTypes/actionTypes";

export const initialState = {
  countriesList: {
    list: null,
    loading: false,
    error: null,
  },
  industryVerticalList: {
    list: null,
    loading: false,
    error: null,
  },
  industrySegmentList: {
    list: null,
    loading: false,
    error: null,
  },
  statusesList: {
    list: null,
    loading: false,
    error: null,
  },
} as DictionaryState;

export const dictionaryReducer = (
  state = initialState,
  action: DictionaryActions
): DictionaryState => {
  switch (action.type) {
    case actionTypes.PARTY_TYPES_LIST_REQUEST: {
      return {
        ...state,
        partyTypesList: {
          list: null,
          error: null,
          loading: true,
        },
      };
    }
    case actionTypes.PARTY_TYPES_LIST_FAILURE: {
      return {
        ...state,
        partyTypesList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.PARTY_TYPES_LIST_LOADED: {
      return {
        ...state,
        partyTypesList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.ACCOUNT_TYPES_LIST_REQUEST: {
      return {
        ...state,
        accountTypesList: {
          list: null,
          error: null,
          loading: true,
        },
      };
    }
    case actionTypes.ACCOUNT_TYPES_LIST_FAILURE: {
      return {
        ...state,
        accountTypesList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.ACCOUNT_TYPES_LIST_LOADED: {
      return {
        ...state,
        accountTypesList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.MARKET_SIZE_TYPES_LIST_REQUEST: {
      return {
        ...state,
        marketSizesList: {
          list: null,
          error: null,
          loading: true,
        },
      };
    }
    case actionTypes.MARKET_SIZE_TYPES_LIST_FAILURE: {
      return {
        ...state,
        marketSizesList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.MARKET_SIZE_TYPES_LIST_LOADED: {
      return {
        ...state,
        marketSizesList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.COUNTRIES_LIST_REQUEST: {
      return {
        ...state,
        countriesList: {
          list: null,
          error: null,
          loading: true,
        },
      };
    }
    case actionTypes.COUNTRIES_LIST_FAILURE: {
      return {
        ...state,
        countriesList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.COUNTRIES_LIST_LOADED: {
      return {
        ...state,
        countriesList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.INDUSTRY_VERTICAL_LIST_REQUEST: {
      return {
        ...state,
        industryVerticalList: {
          list: null,
          error: null,
          loading: true,
        },
      };
    }
    case actionTypes.INDUSTRY_VERTICAL_LIST_FAILURE: {
      return {
        ...state,
        industryVerticalList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.INDUSTRY_VERTICAL_LIST_LOADED: {
      return {
        ...state,
        industryVerticalList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.INDUSTRY_SEGMENT_LIST_REQUEST: {
      return {
        ...state,
        industrySegmentList: {
          list: null,
          error: null,
          loading: true,
        },
      };
    }
    case actionTypes.INDUSTRY_SEGMENT_LIST_FAILURE: {
      return {
        ...state,
        industrySegmentList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.INDUSTRY_SEGMENT_LIST_LOADED: {
      return {
        ...state,
        industrySegmentList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.STATUS_LIST_REQUEST: {
      return {
        ...state,
        statusesList: {
          list: null,
          error: null,
          loading: true,
        },
      };
    }
    case actionTypes.STATUS_LIST_FAILURE: {
      return {
        ...state,
        statusesList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.STATUS_LIST_LOADED: {
      return {
        ...state,
        statusesList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.STATE_PROVINCES_LIST_REQUEST: {
      return {
        ...state,
        stateProvincesList: {
          list: null,
          error: null,
          loading: true,
        },
      };
    }
    case actionTypes.STATE_PROVINCES_LIST_FAILURE: {
      return {
        ...state,
        stateProvincesList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.STATE_PROVINCES_LIST_LOADED: {
      return {
        ...state,
        stateProvincesList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.EXTERNAL_IDENTIFIER_TYPES_LIST_REQUEST: {
      return {
        ...state,
        externalIdentifierTypesList: {
          list: null,
          error: null,
          loading: true,
        },
      };
    }
    case actionTypes.EXTERNAL_IDENTIFIER_TYPES_LIST_FAILURE: {
      return {
        ...state,
        externalIdentifierTypesList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.EXTERNAL_IDENTIFIER_TYPES_LIST_LOADED: {
      return {
        ...state,
        externalIdentifierTypesList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.PHONE_FAX_TYPES_LIST_REQUEST: {
      return {
        ...state,
        phoneFaxTypesList: {
          list: null,
          error: null,
          loading: true,
        },
      };
    }
    case actionTypes.PHONE_FAX_TYPES_LIST_FAILURE: {
      return {
        ...state,
        phoneFaxTypesList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.PHONE_FAX_TYPES_LIST_LOADED: {
      return {
        ...state,
        phoneFaxTypesList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.PHONE_FAX_ROLES_LIST_REQUEST: {
      return {
        ...state,
        phoneFaxRolesList: {
          list: null,
          error: null,
          loading: true,
        },
      };
    }
    case actionTypes.PHONE_FAX_ROLES_LIST_FAILURE: {
      return {
        ...state,
        phoneFaxRolesList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.PHONE_FAX_ROLES_LIST_LOADED: {
      return {
        ...state,
        phoneFaxRolesList: {
          ...action.payload,
          loading: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};

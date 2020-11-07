import { CustomerState } from "types";
import * as actionTypes from "../actions/actionTypes/actionTypes";
import { CustomerActions } from "../actions/actionTypes/actionTypes";

const initialState = {
  customerSaving: {
    error: null,
    saving: false,
  },
} as CustomerState;

export const customerReducer = (
  state: CustomerState = initialState,
  action: CustomerActions
): CustomerState => {
  switch (action.type) {
    case actionTypes.CUSTOMER_CREATE_REQUEST:
      return {
        ...state,
        customerSaving: {
          saving: true,
          error: null,
        },
      };
    case actionTypes.CUSTOMER_CREATE_FAILURE:
      return {
        ...state,
        customerSaving: {
          saving: false,
          error: action.payload.error,
        },
      };
    case actionTypes.CUSTOMER_CREATE_FINISHED:
      return {
        ...state,
        customerSaving: {
          saving: false,
          error: null,
        },
      };
    default:
      return state;
  }
};

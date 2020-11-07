import { Customer } from "types";
import * as customerService from "../services/customerService";
import * as actionTypes from "./actionTypes/actionTypes";

export const createCustomer = (customer: Customer) => async (dispatch: any) => {
  dispatch(createCustomerRequest());
  try {
    const created = await customerService.createCustomer(customer);
    dispatch(createCustomerFinished(created));
  } catch (error) {
    dispatch(createCustomerFailure(error.message));
  }
};

const createCustomerRequest = () => {
  return {
    type: actionTypes.CUSTOMER_CREATE_REQUEST,
    payload: {
      error: null,
    },
  };
};

const createCustomerFinished = (customer: Customer) => {
  return {
    type: actionTypes.CUSTOMER_CREATE_FINISHED,
    payload: {
      error: null,
    },
  };
};

const createCustomerFailure = (error: string) => {
  return {
    type: actionTypes.COUNTRIES_LIST_FAILURE,
    payload: {
      error,
    },
  };
};

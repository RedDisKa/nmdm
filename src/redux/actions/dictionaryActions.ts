import { AccountType, Country, MarketSize, PartyType, Status } from "types";
import * as dictionaryService from "../services/dictionaryService";
import * as actionTypes from "./actionTypes/actionTypes";

export const getPartyTypesList = () => async (dispatch: any) => {
  dispatch(listRequest(actionTypes.PARTY_TYPES_LIST_REQUEST));
  try {
    const list = await dictionaryService.listPartyTypes();
    dispatch(listLoaded<PartyType>(actionTypes.PARTY_TYPES_LIST_LOADED, list));
  } catch (error) {
    dispatch(listFailure(actionTypes.PARTY_TYPES_LIST_FAILURE, error.message));
  }
};

export const getAccountTypesList = () => async (dispatch: any) => {
  dispatch(listRequest(actionTypes.ACCOUNT_TYPES_LIST_REQUEST));
  try {
    const list = await dictionaryService.listAccountTypes();
    dispatch(
      listLoaded<AccountType>(actionTypes.ACCOUNT_TYPES_LIST_LOADED, list)
    );
  } catch (error) {
    dispatch(
      listFailure(actionTypes.ACCOUNT_TYPES_LIST_FAILURE, error.message)
    );
  }
};

export const getMarketSizesList = () => async (dispatch: any) => {
  dispatch(listRequest(actionTypes.MARKET_SIZE_TYPES_LIST_REQUEST));
  try {
    const list = await dictionaryService.listMarketSizes();
    dispatch(
      listLoaded<MarketSize>(actionTypes.MARKET_SIZE_TYPES_LIST_LOADED, list)
    );
  } catch (error) {
    dispatch(
      listFailure(actionTypes.MARKET_SIZE_TYPES_LIST_FAILURE, error.message)
    );
  }
};

export const getStatusesList = () => async (dispatch: any) => {
  dispatch(listRequest(actionTypes.STATUS_LIST_REQUEST));
  try {
    const list = await dictionaryService.listStatus();
    dispatch(listLoaded<Status>(actionTypes.STATUS_LIST_LOADED, list));
  } catch (error) {
    dispatch(listFailure(actionTypes.STATUS_LIST_FAILURE, error.message));
  }
};

export const getCountriesList = () => async (dispatch: any) => {
  dispatch(listRequest(actionTypes.COUNTRIES_LIST_REQUEST));
  try {
    const list = await dictionaryService.listCountries();
    dispatch(listLoaded<Country>(actionTypes.COUNTRIES_LIST_LOADED, list));
  } catch (error) {
    dispatch(listFailure(actionTypes.COUNTRIES_LIST_FAILURE, error));
  }
};

export const getIndustryVerticalList = () => async (dispatch: any) => {
  dispatch(listRequest(actionTypes.INDUSTRY_VERTICAL_LIST_REQUEST));
  try {
    const list = await dictionaryService.listIndustryVertical();
    dispatch(listLoaded(actionTypes.INDUSTRY_VERTICAL_LIST_LOADED, list));
  } catch (error) {
    dispatch(
      listFailure(actionTypes.INDUSTRY_VERTICAL_LIST_FAILURE, error.message)
    );
  }
};

export const getIndustrySegmentList = () => async (dispatch: any) => {
  dispatch(listRequest(actionTypes.INDUSTRY_SEGMENT_LIST_REQUEST));
  try {
    const list = await dictionaryService.listIndustrySegment();
    dispatch(listLoaded(actionTypes.INDUSTRY_SEGMENT_LIST_LOADED, list));
  } catch (error) {
    dispatch(
      listFailure(actionTypes.INDUSTRY_SEGMENT_LIST_FAILURE, error.message)
    );
  }
};

export const getStateProvincesList = () => async (dispatch: any) => {
  dispatch(listRequest(actionTypes.STATE_PROVINCES_LIST_REQUEST));
  try {
    const list = await dictionaryService.listStateProvinces();
    dispatch(listLoaded(actionTypes.STATE_PROVINCES_LIST_LOADED, list));
  } catch (error) {
    dispatch(
      listFailure(actionTypes.STATE_PROVINCES_LIST_FAILURE, error.message)
    );
  }
};

export const getPhoneFaxTypesList = () => async (dispatch: any) => {
  dispatch(listRequest(actionTypes.PHONE_FAX_TYPES_LIST_REQUEST));
  try {
    const list = await dictionaryService.listPhoneFaxTypes();
    dispatch(listLoaded(actionTypes.PHONE_FAX_TYPES_LIST_LOADED, list));
  } catch (error) {
    dispatch(
      listFailure(actionTypes.PHONE_FAX_TYPES_LIST_FAILURE, error.message)
    );
  }
};

export const getPhoneFaxRolesList = () => async (dispatch: any) => {
  dispatch(listRequest(actionTypes.PHONE_FAX_ROLES_LIST_REQUEST));
  try {
    const list = await dictionaryService.listPhoneFaxRoles();
    dispatch(listLoaded(actionTypes.PHONE_FAX_ROLES_LIST_LOADED, list));
  } catch (error) {
    dispatch(
      listFailure(actionTypes.PHONE_FAX_ROLES_LIST_FAILURE, error.message)
    );
  }
};

export const getExternalIdentifierTypeList = () => async (dispatch: any) => {
  dispatch(listRequest(actionTypes.EXTERNAL_IDENTIFIER_TYPES_LIST_REQUEST));
  try {
    const list = await dictionaryService.listExternalIdentifierTypes();
    dispatch(
      listLoaded(actionTypes.EXTERNAL_IDENTIFIER_TYPES_LIST_LOADED, list)
    );
  } catch (error) {
    dispatch(
      listFailure(
        actionTypes.EXTERNAL_IDENTIFIER_TYPES_LIST_FAILURE,
        error.message
      )
    );
  }
};

const listRequest = (action: any) => {
  return {
    type: action,
    payload: {
      list: null,
      error: null,
    },
  };
};

const listLoaded = <T>(action: any, list: T[]) => {
  return {
    type: action,
    payload: {
      list,
      error: null,
    },
  };
};

const listFailure = (action: any, error: string) => {
  return {
    type: action,
    payload: {
      list: null,
      error,
    },
  };
};

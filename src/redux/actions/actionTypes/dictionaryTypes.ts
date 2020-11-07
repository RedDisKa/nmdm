import {
  AccountType,
  Country,
  ExternalIdentifierType,
  IndustrySegment,
  IndustryVertical,
  MarketSize,
  PartyType,
  PhoneFaxRole,
  PhoneFaxType,
  StateProvince,
  Status,
} from "types";

export const COUNTRIES_LIST_REQUEST = "countries_list_request";
export const COUNTRIES_LIST_LOADED = "countries_list_loaded";
export const COUNTRIES_LIST_FAILURE = "countries_list_failure";

export const INDUSTRY_VERTICAL_LIST_REQUEST = "industry_vertical_list_request";
export const INDUSTRY_VERTICAL_LIST_LOADED = "industry_vertical_list_loaded";
export const INDUSTRY_VERTICAL_LIST_FAILURE = "industry_vertical_list_failure";

export const INDUSTRY_SEGMENT_LIST_REQUEST = "industry_segment_list_request";
export const INDUSTRY_SEGMENT_LIST_LOADED = "industry_segment_list_loaded";
export const INDUSTRY_SEGMENT_LIST_FAILURE = "industry_segment_list_failure";

export const STATUS_LIST_REQUEST = "status_list_request";
export const STATUS_LIST_LOADED = "status_list_loaded";
export const STATUS_LIST_FAILURE = "status_list_failure";

export const PARTY_TYPES_LIST_REQUEST = "party_types_list_request";
export const PARTY_TYPES_LIST_LOADED = "party_types_list_loaded";
export const PARTY_TYPES_LIST_FAILURE = "party_types_list_failure";

export const ACCOUNT_TYPES_LIST_REQUEST = "account_types_list_request";
export const ACCOUNT_TYPES_LIST_LOADED = "account_types_list_loaded";
export const ACCOUNT_TYPES_LIST_FAILURE = "account_types_list_failure";

export const MARKET_SIZE_TYPES_LIST_REQUEST = "market_size_types_list_request";
export const MARKET_SIZE_TYPES_LIST_LOADED = "market_size_types_list_loaded";
export const MARKET_SIZE_TYPES_LIST_FAILURE = "market_size_types_list_failure";

export const PHONE_FAX_TYPES_LIST_REQUEST = "phone_fax_types_list_request";
export const PHONE_FAX_TYPES_LIST_LOADED = "phone_fax_types_list_loaded";
export const PHONE_FAX_TYPES_LIST_FAILURE = "phone_fax_types_list_failure";

export const PHONE_FAX_ROLES_LIST_REQUEST = "phone_fax_roles_list_request";
export const PHONE_FAX_ROLES_LIST_LOADED = "phone_fax_roles_list_loaded";
export const PHONE_FAX_ROLES_LIST_FAILURE = "phone_fax_roles_list_failure";

export const STATE_PROVINCES_LIST_REQUEST = "state_provinces_list_request";
export const STATE_PROVINCES_LIST_LOADED = "state_provinces_list_loaded";
export const STATE_PROVINCES_LIST_FAILURE = "state_provinces_list_failure";

export const EXTERNAL_IDENTIFIER_TYPES_LIST_REQUEST =
  "external_identifier_types_list_request";
export const EXTERNAL_IDENTIFIER_TYPES_LIST_LOADED =
  "external_identifier_types_list_loaded";
export const EXTERNAL_IDENTIFIER_TYPES_LIST_FAILURE =
  "external_identifier_types_list_failure";

interface CountriesListAction {
  type:
    | typeof COUNTRIES_LIST_LOADED
    | typeof COUNTRIES_LIST_FAILURE
    | typeof COUNTRIES_LIST_REQUEST;
  payload: {
    list: Country[];
    error: string;
  };
}

interface IndustryVerticalsListAction {
  type:
    | typeof INDUSTRY_VERTICAL_LIST_LOADED
    | typeof INDUSTRY_VERTICAL_LIST_FAILURE
    | typeof INDUSTRY_VERTICAL_LIST_REQUEST;
  payload: {
    list: IndustryVertical[];
    error: string;
  };
}

interface IndustrySegmentsListAction {
  type:
    | typeof INDUSTRY_SEGMENT_LIST_LOADED
    | typeof INDUSTRY_SEGMENT_LIST_FAILURE
    | typeof INDUSTRY_SEGMENT_LIST_REQUEST;
  payload: {
    list: IndustrySegment[];
    error: string;
  };
}

interface StatusListAction {
  type:
    | typeof STATUS_LIST_LOADED
    | typeof STATUS_LIST_FAILURE
    | typeof STATUS_LIST_REQUEST;
  payload: {
    list: Status[];
    error: string;
  };
}

interface PartyTypesListAction {
  type:
    | typeof PARTY_TYPES_LIST_LOADED
    | typeof PARTY_TYPES_LIST_FAILURE
    | typeof PARTY_TYPES_LIST_REQUEST;
  payload: {
    list: PartyType[];
    error: string;
  };
}

interface AccountTypesListAction {
  type:
    | typeof ACCOUNT_TYPES_LIST_LOADED
    | typeof ACCOUNT_TYPES_LIST_FAILURE
    | typeof ACCOUNT_TYPES_LIST_REQUEST;
  payload: {
    list: AccountType[];
    error: string;
  };
}

interface MarketSizesListAction {
  type:
    | typeof MARKET_SIZE_TYPES_LIST_LOADED
    | typeof MARKET_SIZE_TYPES_LIST_FAILURE
    | typeof MARKET_SIZE_TYPES_LIST_REQUEST;
  payload: {
    list: MarketSize[];
    error: string;
  };
}

interface StateProvincesListAction {
  type:
    | typeof STATE_PROVINCES_LIST_LOADED
    | typeof STATE_PROVINCES_LIST_FAILURE
    | typeof STATE_PROVINCES_LIST_REQUEST;
  payload: {
    list: StateProvince[];
    error: string;
  };
}

interface PhoneFaxTypesListAction {
  type:
    | typeof PHONE_FAX_TYPES_LIST_LOADED
    | typeof PHONE_FAX_TYPES_LIST_FAILURE
    | typeof PHONE_FAX_TYPES_LIST_REQUEST;
  payload: {
    list: PhoneFaxType[];
    error: string;
  };
}

interface PhoneFaxRolesListAction {
  type:
    | typeof PHONE_FAX_ROLES_LIST_LOADED
    | typeof PHONE_FAX_ROLES_LIST_FAILURE
    | typeof PHONE_FAX_ROLES_LIST_REQUEST;
  payload: {
    list: PhoneFaxRole[];
    error: string;
  };
}

interface ExternalIdentifierTypesListAction {
  type:
    | typeof EXTERNAL_IDENTIFIER_TYPES_LIST_LOADED
    | typeof EXTERNAL_IDENTIFIER_TYPES_LIST_FAILURE
    | typeof EXTERNAL_IDENTIFIER_TYPES_LIST_REQUEST;
  payload: {
    list: ExternalIdentifierType[];
    error: string;
  };
}

export type DictionaryActions =
  | CountriesListAction
  | IndustryVerticalsListAction
  | IndustrySegmentsListAction
  | StatusListAction
  | PartyTypesListAction
  | AccountTypesListAction
  | ExternalIdentifierTypesListAction
  | StateProvincesListAction
  | PhoneFaxTypesListAction
  | PhoneFaxRolesListAction
  | MarketSizesListAction;

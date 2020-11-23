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
import axios from "axios";
import { sortByText } from "utils";

const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwiaWF0IjoxNjA2MDQ3Nzg5LCJleHAiOjE2MDYxMzQxODl9.L3tVcQ5PuKkaHz7vDvk5N4y8b3HJNmAXeaKKRs5HR0hoaBamPRqMhe2szKsprBoS-qkeTkkbNdjP7YGRBTCJsQ';

const baseUrl = "http://104.154.103.21:8081/api/v1";

export const listCountries = async () => {
  try {
    const response = await axios.get<{ "country:": Country[] }>(
      `${baseUrl}/country`);
    return sortByText(response.data["country:"], "countryName");
  } catch (error) {
    throw error;
  }
};

export const listIndustryVertical = async () => {
  try {
    const response = await axios.get<{
      "industryVertical:": IndustryVertical[];
    }>(`${baseUrl}/indyvtcl`);
    return response.data["industryVertical:"];
  } catch (error) {
    throw error;
  }
};

export const listIndustrySegment = async () => {
  try {
    const response = await axios.get<{ "industrySegment:": IndustrySegment[] }>(
      `${baseUrl}/indysgm`
    );
    return response.data["industrySegment:"];
  } catch (error) {
    throw error;
  }
};

export const listStatus = async () => {
  try {
    const response = await axios.get<Status[]>(`${baseUrl}/status`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const listAccountTypes = async () => {
  try {
    const response = await axios.get<{ "accountType:": AccountType[] }>(
      `${baseUrl}/accounttype`
    );
    return response.data["accountType:"];
  } catch (error) {
    throw error;
  }
};

export const listPartyTypes = async () => {
  try {
    const response = await axios.get<{ "partyType:": PartyType[] }>(
      `${baseUrl}/prtytyp`
    );
    return response.data["partyType:"];
  } catch (error) {
    throw error;
  }
};

export const listPhoneFaxTypes = async () => {
  try {
    const response = await axios.get<{ "phoneFaxType:": PhoneFaxType[] }>(
      `${baseUrl}/phonefaxtype`
    );
    return response.data["phoneFaxType:"];
  } catch (error) {
    throw error;
  }
};

export const listPhoneFaxRoles = async () => {
  try {
    const response = await axios.get<{ "phoneFaxRole:": PhoneFaxRole[] }>(
      `${baseUrl}/phonefaxrole`
    );
    return response.data["phoneFaxRole:"];
  } catch (error) {
    throw error;
  }
};

export const listMarketSizes = async () => {
  try {
    const response = await axios.get<{ "marketSize:": MarketSize[] }>(
      `${baseUrl}/marketsize`
    );
    return response.data["marketSize:"];
  } catch (error) {
    throw error;
  }
};

export const listExternalIdentifierTypes = async () => {
  try {
    const response = await axios.get<{
      "externalIdentifierType:": ExternalIdentifierType[];
    }>(`${baseUrl}/xtrnlidtype`);
    return response.data["externalIdentifierType:"];
  } catch (error) {
    throw error;
  }
};

export const listStateProvinces = async () => {
  try {
    const response = await axios.get<{ "stateProvince:": StateProvince[] }>(
      `${baseUrl}/stprvc`
    );
    return response.data["stateProvince:"];
  } catch (error) {
    throw error;
  }
};

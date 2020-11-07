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

const baseUrl = "http://104.154.103.21:8081/api/v1";

export const listCountries = async () => {
  try {
    // const response = await axios.get<Country[]>(`${baseUrl}/country`);
    // return response.data;
    return [
      {
        countryId: '1',
        countryName: "C1"
      },
      {
        countryId: 2,
        countryName: "C2"
      },
      {
        countryId: 3,
        countryName: "C3"
      },
    ] as Country[]
  } catch (error) {
    throw error;
  }
};

export const listIndustryVertical = async () => {
  try {
    const response = await axios.get<IndustryVertical[]>(`${baseUrl}/indyvtcl`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const listIndustrySegment = async () => {
  try {
    const response = await axios.get<IndustrySegment[]>(`${baseUrl}/indysgm`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const listStatus = async () => {
  try {
    const response = await axios.get<Status[]>(`${baseUrl}/country`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const listAccountTypes = async () => {
  try {
    const response = await axios.get<AccountType[]>(`${baseUrl}/accounttype`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const listPartyTypes = async () => {
  try {
    const response = await axios.get<PartyType[]>(`${baseUrl}/prtytyp`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const listPhoneFaxTypes = async () => {
  try {
    const response = await axios.get<PhoneFaxType[]>(`${baseUrl}/phonefaxtype`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const listPhoneFaxRoles = async () => {
  try {
    const response = await axios.get<PhoneFaxRole[]>(`${baseUrl}/phonefaxrole`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const listMarketSizes = async () => {
  try {
    const response = await axios.get<MarketSize[]>(`${baseUrl}/marketsize`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const listExternalIdentifierTypes = async () => {
  try {
    const response = await axios.get<ExternalIdentifierType[]>(
      `${baseUrl}/xtrnlidtype`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const listStateProvinces = async () => {
  try {
    // const response = await axios.get<StateProvince[]>(`${baseUrl}/stprvc`);
    // return response.data;

    return [
      {
        stateProvinceId: '1',
        stateProvinceName: "SP1",
        country: { countryId: '1' },
      },
      {
        stateProvinceId: '2',
        stateProvinceName: "SP2",
        country: { countryId: '2' },
      },
      {
        stateProvinceId: '3',
        stateProvinceName: "SP3",
        country: { countryId: '2' },
      },
    ] as StateProvince[];
  } catch (error) {
    throw error;
  }
};

export interface AppRouteType {
  path: string;
  exact?: boolean;
  component: any;
}

export interface Customer {
  logo: string;

  partyType: string;
  organizationName: string;
  accountType: string;
  marketSizeCode: string;
  dunsId: string;
  partyStatus: string;
  partyName: string;

  firstGivenName: string;
  secondGivenName: string;
  familyName: string;

  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  cityName: string;
  countryName: string;
  stateProvince: string;
  postalCode: string;
  country: string;
  cityAreaDistrictName: string;
  phoneFaxType: string;
  phoneFaxRole: string;
  countryCode: string;
  phoneFaxNumber: string;
  extension: string;
  prefferedIndicator: boolean;

  industrySegment: string;
  internalIndustrySegment: string;
  industryVertical: string;
  internalIndustryVertical: string;
  externalIdentifierType: string;
  status: string;
  identifierValue: string;
  identifierCountry: string;
  identifiedHeadquarterIndicator: boolean;
  globalUltimateParentIndicator: boolean;
  domesticUltimateParentIndicator: boolean;
  parentIndicator: boolean;

  potencialMatches: { name: string; logo: string; type: string }[];

  addressDeliveryIndicator: boolean
}

export interface Feed {
  title: string;
  content: string;
  tags: { color: "blue" | "purple"; title: string }[];
  source: string;
  sourceType: "twitter" | "facebook" | "";
  postedAt: string;
  image: string;
  marked: boolean;
}

export interface ListItem {
  name: string;
  image: string;
  description?: string;
}

export interface TreeNodeType {
  key: string;
  title: string;
  children?: TreeNodeType[];
}

export interface HistoryItem {
  userName: string;
  action: "viewed" | "updated" | "checked";
  userAvatar: string;
  actionTime: string;
}

export interface AssignedTask {
  priority: "high" | "medium" | "low";
  type: "Created" | "Hierarchy Updated" | "Updated";
  created: string;
  dueDate: string;
  description: string;
  user: {
    name: string;
    avatar: string;
  };
  customer: {
    name: string;
    logo: string;
  };
}

export interface Country {
  countryId: string;
  countryCode: string;
  countryName: string;
  countryTelephoneAccessCode: string;
}

export interface IndustryVertical {
  industryVerticalId: string;
  industryVerticalDescription: string;
}

export interface IndustrySegment {
  industrySegmentId: string;
  industrySegmentName: string;
  industryVertical: IndustryVertical
}

export interface Status {
  statusId: number,
  statusName: string
}

export interface AccountType {
  accountTypeId: number,
  accountTypeName: string
}

export interface PartyType {
  partyTypeId: number,
  partyTypeName: string
}

export interface PhoneFaxType {
  phoneFaxTypeId: number,
  phoneFaxTypeName: string
}

export interface PhoneFaxRole {
  phoneFaxRoleId: number,
  phoneFaxRoleName: string
}

export interface MarketSize {
  marketSizeId: number,
  marketSizeCode: string
}

export interface ExternalIdentifierType {
  externalIdentifierTypeId: number,
  externalIdentifierTypeName: string
}

export interface StateProvince {
  stateProvinceId: string,
  stateProvinceName: string,
  country: Country
}

export interface ListState<T> {
  list: T[] | null;
  loading: boolean;
  error: string | null;
}

export interface DictionaryState {
  partyTypesList: ListState<PartyType>,
  accountTypesList: ListState<AccountType>,
  marketSizesList: ListState<MarketSize>,
  countriesList: ListState<Country>,
  industryVerticalList: ListState<IndustryVertical>,
  industrySegmentList: ListState<IndustrySegment>,
  statusesList: ListState<Status>,
  stateProvincesList: ListState<StateProvince>,
  phoneFaxTypesList: ListState<PhoneFaxType>,
  phoneFaxRolesList: ListState<PhoneFaxRole>
  externalIdentifierTypesList: ListState<ExternalIdentifierType>
}

export interface CustomerState {
  customerSaving: {
    saving: boolean,
    error: string | null
  },
}

export interface AppState {
  dictionaryReducer: DictionaryState,
  customerReducer: CustomerState
}
export interface AppRouteType {
    path: string
    exact?: boolean
    component: any
  }

export interface Customer {
  logo: string,

    partyType: string,
    organizationName: string,
    accountType: string,
    marketSizeCode: string,
    dunsId: string,
    partyStatus: string,
    partyName: string,

    firstGivenName: string,
  secondGivenName: string,
  familyName: string,

    addressLine1: string,
    addressLine2: string,
    addressLine3: string,
    cityName: string,
    countryName: string,
    stateProvince: string,
    postalCode: string,
    country: string,
    cityAreaDistrictName: string,
    phoneFaxType: string,
    phoneFaxRole: string,
    countryCode: string,
    phoneFaxNumber: string,
    extension: string,
    prefferedIndicator: boolean,

    industrySegment: string,
    internalIndustrySegment: string,
    industryVertical: string,
    internalIndustryVertical: string,
    externalIdentifierType: string,
    status: string,
    identifierValue: string,
    identifierCountry: string,
    identifiedHeadquarterIndicator: boolean,
    globalUltimateParentIndicator: boolean,
    domesticUltimateParentIndicator: boolean,
    parentIndicator: boolean,

    potencialMatches: {name: string, logo: string, type: string}[]
}

export interface Feed {
  title: string,
  content: string,
  tags: { color: 'blue' | 'purple', title: string}[],
  source: string,
  sourceType: 'twitter' | 'facebook' | '',
  postedAt: string,
  image: string,
  marked: boolean
}

export interface ListItem {
  name: string,
  image: string,
  description?: string
}

export interface TreeNodeType {
  key: string,
  title: string,
  children?: TreeNodeType[]
}

export interface HistoryItem {
  userName: string,
  action: 'viewed' | 'updated' | 'checked',
  userAvatar: string,
  actionTime: string
}
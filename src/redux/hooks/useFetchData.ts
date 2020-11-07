import { useCallback, useEffect } from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { allActions } from "redux/actions/allActions"
import { getExternalIdentifierTypeList, getPhoneFaxRolesList, getPhoneFaxTypesList, getStateProvincesList } from "redux/actions/dictionaryActions"
import { AccountType, AppState, Country, ExternalIdentifierType, IndustrySegment, IndustryVertical, ListState, MarketSize, PartyType, PhoneFaxRole, PhoneFaxType, StateProvince, Status } from "types"

const useFetchList = <T>(data: string, action: Function) => {
    const dispatch = useDispatch()
    const { list, error, loading } = useSelector((state: AppState) => ({
        list: (state.dictionaryReducer as any)[data] ? ((state.dictionaryReducer as any)[data].list as T[]) : null,
        error: (state.dictionaryReducer as any)[data] ? ((state.dictionaryReducer as any)[data].error as string) : null,
        loading: (state.dictionaryReducer as any)[data] ? ((state.dictionaryReducer as any)[data].loading as boolean) : false
    }), shallowEqual)

    const boundAction = useCallback(() => {
        dispatch(action())
    }, [dispatch])

    useEffect(() => {
        if (!list) boundAction()
    }, [boundAction])

    return {
        list,
        error,
        loading
    }
}

export const useFetchPartyTypes = () => {
    return useFetchList<PartyType>('partyTypesList', allActions.dictionaryActions.getPartyTypesList)
}

export const useFetchAccountTypes = () => {
    return useFetchList<AccountType>('accountTypesList', allActions.dictionaryActions.getAccountTypesList)
}

export const useFetchMarketSizes = () => {
    return useFetchList<MarketSize>('marketSizesList', allActions.dictionaryActions.getMarketSizesList)
}

export const useFetchStatuses = () => {
    return useFetchList<Status>('statusesList', allActions.dictionaryActions.getStatusesList)
}

export const useFetchCountries = () => {
    return useFetchList<Country>('countriesList', allActions.dictionaryActions.getCountriesList)
}

export const useFetchIndustryVertical = () => {
    return useFetchList<IndustryVertical>('industryVerticalList', allActions.dictionaryActions.getIndustryVerticalList)
}

export const useFetchIndustrySegments = () => {
    return useFetchList<IndustrySegment>('industrySegmentList', allActions.dictionaryActions.getIndustrySegmentList)
}

export const useFetchStateProvinces = () => {
    return useFetchList<StateProvince>('stateProvincesList', getStateProvincesList)
}

export const useFetchPhoneFaxTypes = () => {
    return useFetchList<PhoneFaxType>('phoneFaxTypesList', getPhoneFaxTypesList)
}

export const useFetchPhoneFaxRoles = () => {
    return useFetchList<PhoneFaxRole>('phoneFaxRolesList', getPhoneFaxRolesList)
}

export const useFetchExternalIdentifierTypes = () => {
    return useFetchList<ExternalIdentifierType>('externalIdentifierTypesList', getExternalIdentifierTypeList)
}
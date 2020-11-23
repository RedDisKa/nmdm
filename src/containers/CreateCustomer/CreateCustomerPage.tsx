import React, { useRef, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { DropdownComponent as Dropdown } from "../../components/Dropdown/Dropdown";
import { Panel } from "../../components/Panel/Panel";
import { TextField } from "../../components/TextField/TextField";
import s from "./createcustomerpage.module.scss";
import {
  useFetchAccountTypes,
  useFetchCountries,
  useFetchExternalIdentifierTypes,
  useFetchIndustrySegments,
  useFetchIndustryVertical,
  useFetchMarketSizes,
  useFetchPartyTypes,
  useFetchPhoneFaxRoles,
  useFetchPhoneFaxTypes,
  useFetchStateProvinces,
  useFetchStatuses,
} from "redux/hooks/useFetchData";
import { Loader } from "components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { AppState, Customer } from "types";
import { allActions } from "redux/actions/allActions";
import { sortByText } from "utils";

const INIT_STATE = {
  partyType: 1,
  organizationName: "",
  accountType: "",
  marketSizeCode: "",
  dunsId: "",
  partyStatus: "",
  partyName: "",

  firstGivenName: "",
  secondGivenName: "",
  familyName: "",

  addressLine1: "",
  addressLine2: "",
  addressLine3: "",
  cityName: "",
  countryName: "",
  stateProvince: undefined,
  postalCode: "",
  country: undefined,
  cityAreaDistrictName: "",
  phoneFaxType: "",
  phoneFaxRole: "",
  countryCode: "",
  phoneFaxNumber: "",
  extension: "",
  addressDeliveryIndicator: false,
  prefferedIndicator: false,

  industrySegment: undefined,
  internalIndustrySegment: undefined,
  industryVertical: undefined,
  internalIndustryVertical: undefined,
  externalIdentifierType: "",
  status: "",
  identifierValue: "",
  identifierCountry: "",
  identifiedHeadquarterIndicator: false,
  globalUltimateParentIndicator: false,
  domesticUltimateParentIndicator: false,
  parentIndicator: false,

  logo: "",
  potencialMatches: [],
} as Customer;

export const CreateCustomerPage = () => {
  const [customer, setCustomer] = useState({ ...INIT_STATE });
  const [errors, setErrors] = useState([] as string[]);

  const { list: partyTypes, loading: partyTypesLoading } = useFetchPartyTypes();
  const {
    list: accountTypes,
    loading: accountTypesLoading,
  } = useFetchAccountTypes();
  const {
    list: marketSizes,
    loading: marketSizesLoading,
  } = useFetchMarketSizes();
  const { list: statuses, loading: statusesLoading } = useFetchStatuses();
  const { list: countries, loading: countriesLoading } = useFetchCountries();
  const {
    list: stateProvinces,
    loading: stateProvincesLoading,
  } = useFetchStateProvinces();
  const {
    list: industryVerticals,
    loading: industryVerticalsLoading,
  } = useFetchIndustryVertical();
  const {
    list: industrySegments,
    loading: industrySegmentsLoading,
  } = useFetchIndustrySegments();
  const {
    list: phoneFaxTypes,
    loading: phoneFaxTypesLoading,
  } = useFetchPhoneFaxTypes();
  const {
    list: phoneFaxRoles,
    loading: phoneFaxRolesLoading,
  } = useFetchPhoneFaxRoles();
  const {
    list: externalIdentifierTypes,
    loading: externalIdentifierTypesLoading,
  } = useFetchExternalIdentifierTypes();

  const { saving } = useSelector(
    (state: AppState) => state.customerReducer.customerSaving
  );
  const dispatch = useDispatch();

  const inputRef = useRef(null as HTMLInputElement | null);

  const onChange = (name: string, value: boolean | string | number) => {
    setCustomer({ ...customer, [name]: value });
  };

  const onChangeCountry = (name: string, value: string) => {
    if (!!customer.stateProvince && !!stateProvinces) {
      const currentStateProvince = stateProvinces.filter(
        (stateProvince) =>
          stateProvince.stateProvinceId === customer.stateProvince
      )[0];
      if (`${currentStateProvince.country.countryId}` !== value) {
        setCustomer({
          ...customer,
          country: Number.parseInt(value),
          stateProvince: undefined,
        });
        return;
      }
    }
    setCustomer({ ...customer, country: Number.parseInt(value) });
  };

  const onChangeStateProvince = (name: string, value: string) => {
    if (!customer.country && !!stateProvinces) {
      const currentStateProvince = stateProvinces.filter(
        (stateProvince) => `${stateProvince.stateProvinceId}` === value
      )[0];
      setCustomer({
        ...customer,
        stateProvince: Number.parseInt(value),
        country: currentStateProvince.country.countryId,
      });
      return;
    }
    setCustomer({ ...customer, stateProvince: Number.parseInt(value) });
  };

  const onChangeIndustryVertical = (name: string, value: string) => {
    if (!!customer.industrySegment && !!industrySegments) {
      const currentIndustrySegment = industrySegments.filter(
        (industrySegment) =>
          industrySegment.industrySegmentId === customer.industrySegment
      )[0];
      if (
        `${currentIndustrySegment.industryVertical.industryVerticalId}` !==
        value
      ) {
        setCustomer({
          ...customer,
          industryVertical: Number.parseInt(value),
          industrySegment: undefined,
        });
        return;
      }
    }
    setCustomer({ ...customer, industryVertical: Number.parseInt(value) });
  };

  const onChangeIndustrySegment = (name: string, value: string) => {
    if (!customer.industryVertical && !!industrySegments) {
      const currentIndustrySegment = industrySegments.filter(
        (industrySegment) => `${industrySegment.industrySegmentId}` === value
      )[0];
      setCustomer({
        ...customer,
        industrySegment: Number.parseInt(value),
        industryVertical:
          currentIndustrySegment.industryVertical.industryVerticalId,
      });
      return;
    }
    setCustomer({ ...customer, industrySegment: Number.parseInt(value) });
  };

  const onChangeInternalIndustryVertical = (name: string, value: string) => {
    if (!!customer.internalIndustrySegment && !!industrySegments) {
      const currentIndustrySegment = industrySegments.filter(
        (industrySegment) =>
          industrySegment.industrySegmentId === customer.internalIndustrySegment
      )[0];
      if (
        `${currentIndustrySegment.industryVertical.industryVerticalId}` !==
        value
      ) {
        setCustomer({
          ...customer,
          internalIndustryVertical: Number.parseInt(value),
          internalIndustrySegment: undefined,
        });
        return;
      }
    }
    setCustomer({
      ...customer,
      internalIndustryVertical: Number.parseInt(value),
    });
  };

  const onChangeInternalIndustrySegment = (name: string, value: string) => {
    if (!customer.internalIndustryVertical && !!industrySegments) {
      const currentIndustrySegment = industrySegments.filter(
        (industrySegment) => `${industrySegment.industrySegmentId}` === value
      )[0];
      setCustomer({
        ...customer,
        internalIndustrySegment: Number.parseInt(value),
        internalIndustryVertical:
          currentIndustrySegment.industryVertical.industryVerticalId,
      });
      return;
    }
    setCustomer({
      ...customer,
      internalIndustrySegment: Number.parseInt(value),
    });
  };

  const onChangeType = (name: string, value: string) => {
    if (value === "1") {
      setCustomer({
        ...customer,
        partyType: Number.parseInt(value),
        organizationName: "",
        accountType: "",
        marketSizeCode: "",
        dunsId: "",
        partyName: "",

        industrySegment: undefined,
        internalIndustrySegment: undefined,
        industryVertical: undefined,
        internalIndustryVertical: undefined,
        identifiedHeadquarterIndicator: false,
        globalUltimateParentIndicator: false,
        domesticUltimateParentIndicator: false,
        parentIndicator: false,
      });
    } else {
      setCustomer({
        ...customer,
        partyType: Number.parseInt(value),
        firstGivenName: "",
        secondGivenName: "",
        familyName: "",
      });
    }
  };

  const onReset = () => {
    setCustomer({ ...INIT_STATE });
  };

  const onSave = () => {
    if (!validate()) return;
    dispatch(allActions.customerActions.createCustomer(customer as Customer));
  };

  const onInputFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event.target.files && event.target.files[0];
    console.log(fileUploaded);
  };

  const validate = () => {
    setErrors([]);
    const {
      partyType,
      partyStatus,
      firstGivenName,
      secondGivenName,
      familyName,
      organizationName,
      accountType,
      marketSizeCode,
      dunsId,
      partyName,
      country,
      addressLine1,
      cityName,
      postalCode,
      externalIdentifierType,
      identifierValue
    } = customer;

    const validateErrors = [];

    if (!partyType) {
      validateErrors.push("Party type is required");
    }
    if (!partyStatus || partyStatus.length === 0) {
      validateErrors.push("Party status is required");
    }
    if (!!partyType && partyType === 1) {
      if (!firstGivenName || firstGivenName.length === 0) {
        validateErrors.push("First Given Name is required");
      }
      if (!secondGivenName || secondGivenName.length === 0) {
        validateErrors.push("Second Given Name is required");
      }
      if (!familyName || familyName.length === 0) {
        validateErrors.push("Family Name is required");
      }
    }
    if (!!partyType && partyType === 2) {
      if (!organizationName || organizationName.length === 0) {
        validateErrors.push("Organization Name is required");
      }
      if (!accountType || accountType.length === 0) {
        validateErrors.push("Account Type is required");
      }
      if (!marketSizeCode || marketSizeCode.length === 0) {
        validateErrors.push("Market Size Code is required");
      }
      if (!dunsId || dunsId.length === 0) {
        validateErrors.push("DUNS ID is required");
      }
      if (!partyName || partyName.length === 0) {
        validateErrors.push("Party Name is required");
      }
    }
    if (!country) {
      validateErrors.push("Country is required");
    }
    if (!addressLine1 || addressLine1.length === 0) {
      validateErrors.push("Address Line 1 is required");
    }
    if (!cityName || cityName.length === 0) {
      validateErrors.push("City Name is required");
    }
    if (!postalCode || postalCode.length === 0) {
      validateErrors.push("Postal Code is required");
    }
    if (externalIdentifierType && externalIdentifierType.length > 0 && (!identifierValue || identifierValue.length === 0)) {
      validateErrors.push("Identifier Value is required if the External Identifier Type is selected");
    } 
    setErrors(validateErrors);
    return validateErrors.length === 0;
  };

  const getUploadPhoto = () => {
    return (
      <div className={s.upload_photo_container}>
        <div
          className={s.upload_photo_outer_container}
          onClick={(e) => inputRef.current && inputRef.current.click()}
        >
          <div className={s.upload_photo}>
            <div className={s.upload_photo_content}>
              <span className={s.upload_photo_icon} />
              <p className={s.upload_title}>Upload Photo</p>
            </div>
          </div>
          <input
            type="file"
            style={{ display: "none" }}
            onChange={onInputFile}
            accept="image/*"
            ref={inputRef}
          />
        </div>
        <p className={s.upload_photo_text}>
          Voluptas ut modi et minima eum sapiente.
        </p>
      </div>
    );
  };

  const getIndustrySegmentsValues = () => {
    if (!industrySegments) return [];
    return !customer.industryVertical
      ? industrySegments.map((industrySegment) => ({
          value: `${industrySegment.industrySegmentId}`,
          label: industrySegment.industrySegmentName,
        }))
      : industrySegments.reduce(
          (values, industrySegment) => {
            if (
              !customer.industryVertical ||
              industrySegment.industryVertical.industryVerticalId ===
                customer.industryVertical
            ) {
              values.push({
                value: `${industrySegment.industrySegmentId}`,
                label: industrySegment.industrySegmentName,
              });
            }
            return values;
          },
          [] as {
            value: string;
            label: string;
          }[]
        );
  };

  const getInternalIndustrySegmentsValues = () => {
    if (!industrySegments) return [];
    return !customer.internalIndustryVertical
      ? industrySegments.map((industrySegment) => ({
          value: `${industrySegment.industrySegmentId}`,
          label: industrySegment.industrySegmentName,
        }))
      : industrySegments.reduce(
          (values, industrySegment) => {
            if (
              !customer.internalIndustryVertical ||
              industrySegment.industryVertical.industryVerticalId ===
                customer.internalIndustryVertical
            ) {
              values.push({
                value: `${industrySegment.industrySegmentId}`,
                label: industrySegment.industrySegmentName,
              });
            }
            return values;
          },
          [] as {
            value: string;
            label: string;
          }[]
        );
  };

  const getStateProvincesValues = () => {
    if (!stateProvinces) return [];
    return sortByText(
      !customer.country
        ? stateProvinces.map((stateProvince) => ({
            value: `${stateProvince.stateProvinceId}`,
            label: stateProvince.stateProvinceName,
          }))
        : stateProvinces.reduce(
            (values, stateProvince) => {
              if (
                !customer.country ||
                stateProvince.country.countryId === customer.country
              ) {
                values.push({
                  value: `${stateProvince.stateProvinceId}`,
                  label: stateProvince.stateProvinceName,
                });
              }
              return values;
            },
            [] as {
              value: string;
              label: string;
            }[]
          ),
      "label"
    );
  };

  const loading =
    partyTypesLoading ||
    accountTypesLoading ||
    countriesLoading ||
    statusesLoading ||
    phoneFaxRolesLoading ||
    externalIdentifierTypesLoading ||
    phoneFaxTypesLoading ||
    stateProvincesLoading ||
    industryVerticalsLoading ||
    marketSizesLoading ||
    industrySegmentsLoading ||
    saving;

  const partyTypesArray = partyTypes
    ? partyTypes.map((partyType) => ({
        value: `${partyType.partyTypeId}`,
        label: partyType.partyTypeName,
      }))
    : [];

  const countryPhoneCodes = countries
    ? countries
        .reduce((result, country) => {
          const exist = result.find(
            (code) => code.value === country.countryTelephoneAccessCode
          );
          if (
            !!country.countryTelephoneAccessCode &&
            country.countryTelephoneAccessCode.toLowerCase() !== "null" &&
            !exist
          ) {
            result.push({
              label: country.countryTelephoneAccessCode,
              value: country.countryTelephoneAccessCode,
            });
          }
          return result;
        }, [] as { label: string; value: string }[])
        .sort((code1, code2) => {
          const codeVal1 = Number.parseInt(code1.value),
            codeVal2 = Number.parseInt(code2.value);
          if (codeVal1 < codeVal2) {
            return -1;
          }
          if (codeVal1 > codeVal2) {
            return 1;
          }
          return 0;
        })
    : [];

  return (
    <React.Fragment>
      {loading && <Loader />}
      <div className={s.container}>
        <Panel classNames={customer.partyType === 1 ? s.person : ""}>
          <div className={s.main_container}>
            {getUploadPhoto()}
            <Dropdown
              title="Party Type"
              value={
                partyTypesArray.find(
                  (pt) => pt.value === `${customer.partyType}`
                )?.label || ""
              }
              name="partyType"
              onChange={onChangeType}
              options={partyTypesArray}
            />
            {customer.partyType === 2 && (
              <React.Fragment>
                <TextField
                  title="Organization Name"
                  value={customer.organizationName}
                  name="organizationName"
                  onChange={onChange}
                />
                <Dropdown
                  title="Account Type"
                  value={customer.accountType}
                  name="accountType"
                  onChange={onChange}
                  options={
                    accountTypes
                      ? accountTypes.map((type) => ({
                          value: `${type.accountTypeId}`,
                          label: type.accountTypeName,
                        }))
                      : []
                  }
                />
                <Dropdown
                  title="Market Size Code"
                  value={customer.marketSizeCode}
                  name="marketSizeCode"
                  onChange={onChange}
                  options={
                    marketSizes
                      ? marketSizes.map((marketSize) => ({
                          value: `${marketSize.marketSizeId}`,
                          label: marketSize.marketSizeCode,
                        }))
                      : []
                  }
                />
                <TextField
                  title="DUNS ID"
                  value={customer.dunsId}
                  name="dunsId"
                  onChange={onChange}
                />
              </React.Fragment>
            )}
            <Dropdown
              title="Party Status"
              value={customer.partyStatus}
              name="partyStatus"
              onChange={onChange}
              options={
                statuses
                  ? statuses.map((status) => ({
                      value: `${status.statusId}`,
                      label: status.statusName,
                    }))
                  : []
              }
            />
            {customer.partyType === 2 && (
              <TextField
                title="Party Name"
                value={customer.partyName}
                name="partyName"
                onChange={onChange}
              />
            )}
            {customer.partyType === 1 && (
              <React.Fragment>
                <TextField
                  title="First Given Name"
                  value={customer.firstGivenName}
                  name="firstGivenName"
                  onChange={onChange}
                />
                <TextField
                  title="Second Given Name"
                  value={customer.secondGivenName}
                  name="secondGivenName"
                  onChange={onChange}
                />
                <TextField
                  title="Family Name"
                  value={customer.familyName}
                  name="familyName"
                  onChange={onChange}
                />
              </React.Fragment>
            )}
          </div>
        </Panel>
        <div className={s.right_container}>
          <Panel>
            <div className={s.address_container}>
              <div>
                <Dropdown
                  title="Country"
                  value={!!customer.country ? `${customer.country}` : ""}
                  name="country"
                  onChange={onChangeCountry}
                  options={
                    countries
                      ? countries.map((country) => ({
                          value: `${country.countryId}`,
                          label: country.countryName,
                        }))
                      : []
                  }
                />
                <TextField
                  title="Address Line 1"
                  name="addressLine1"
                  value={customer.addressLine1}
                  onChange={onChange}
                />
                <TextField
                  title="Address Line 2"
                  name="addressLine2"
                  value={customer.addressLine2}
                  onChange={onChange}
                />
                <TextField
                  title="Address Line 3"
                  name="addressLine3"
                  value={customer.addressLine3}
                  onChange={onChange}
                />
                <TextField
                  title="City Name"
                  name="cityName"
                  value={customer.cityName}
                  onChange={onChange}
                />
              </div>
              <div>
                <TextField
                  title="County Name"
                  name="countryName"
                  value={customer.countryName}
                  onChange={onChange}
                />
                <Dropdown
                  title="State Province"
                  value={
                    !!customer.stateProvince ? `${customer.stateProvince}` : ""
                  }
                  name="stateProvince"
                  onChange={onChangeStateProvince}
                  options={getStateProvincesValues()}
                />
                <TextField
                  title="Postal Code"
                  name="postalCode"
                  value={customer.postalCode}
                  onChange={onChange}
                />
                <TextField
                  title="City Area District Name"
                  name="cityAreaDistrictName"
                  value={customer.cityAreaDistrictName}
                  onChange={onChange}
                />
                <Checkbox
                  title="Address Delivery Indicator"
                  name="addressDeliveryIndicator"
                  value={customer.addressDeliveryIndicator}
                  onChange={onChange}
                />
              </div>
              <div>
                <Dropdown
                  title="Phone Fax Type"
                  value={customer.phoneFaxType}
                  name="phoneFaxType"
                  onChange={onChange}
                  options={
                    phoneFaxTypes
                      ? phoneFaxTypes.map((phoneFaxType) => ({
                          value: `${phoneFaxType.phoneFaxTypeId}`,
                          label: phoneFaxType.phoneFaxTypeName,
                        }))
                      : []
                  }
                />
                <Dropdown
                  title="Phone Fax Role"
                  value={customer.phoneFaxRole}
                  name="phoneFaxRole"
                  onChange={onChange}
                  options={
                    phoneFaxRoles
                      ? phoneFaxRoles.map((phoneFaxRole) => ({
                          value: `${phoneFaxRole.phoneFaxRoleId}`,
                          label: phoneFaxRole.phoneFaxRoleName,
                        }))
                      : []
                  }
                />
                <div className={s.phone_fax_container}>
                  <Dropdown
                    title="Country Code"
                    value={customer.countryCode}
                    name="countryCode"
                    onChange={onChange}
                    options={countryPhoneCodes}
                  />
                  <TextField
                    title="Phone Fax Number"
                    name="phoneFaxNumber"
                    value={customer.phoneFaxNumber}
                    onChange={onChange}
                  />
                </div>
                <TextField
                  title="Extension"
                  name="extension"
                  value={customer.extension}
                  onChange={onChange}
                />
                <Checkbox
                  title="Preferred Indicator"
                  name="prefferedIndicator"
                  value={customer.prefferedIndicator}
                  onChange={onChange}
                />
              </div>
            </div>
          </Panel>
          <Panel>
            <div className={s.details_container}>
              {customer.partyType === 2 && (
                <div>
                  <Dropdown
                    title="Industry Vertical"
                    value={
                      !!customer.industryVertical
                        ? `${customer.industryVertical}`
                        : ""
                    }
                    name="industryVertical"
                    onChange={onChangeIndustryVertical}
                    options={
                      industryVerticals
                        ? industryVerticals.map((industryVertical) => ({
                            value: `${industryVertical.industryVerticalId}`,
                            label: industryVertical.industryVerticalDescription,
                          }))
                        : []
                    }
                  />
                  <Dropdown
                    title="Industry Segment"
                    value={
                      !!customer.industrySegment
                        ? `${customer.industrySegment}`
                        : ""
                    }
                    name="industrySegment"
                    onChange={onChangeIndustrySegment}
                    options={getIndustrySegmentsValues()}
                  />
                  <Dropdown
                    title="Internal Industry Vertical"
                    value={
                      !!customer.internalIndustryVertical
                        ? `${customer.internalIndustryVertical}`
                        : ""
                    }
                    name="internalIndustryVertical"
                    onChange={onChangeInternalIndustryVertical}
                    options={
                      industryVerticals
                        ? industryVerticals.map((industryVertical) => ({
                            value: `${industryVertical.industryVerticalId}`,
                            label: industryVertical.industryVerticalDescription,
                          }))
                        : []
                    }
                  />
                  <Dropdown
                    title="Internal Industry Segment"
                    value={
                      !!customer.internalIndustrySegment
                        ? `${customer.internalIndustrySegment}`
                        : ""
                    }
                    name="internalIndustrySegment"
                    onChange={onChangeInternalIndustrySegment}
                    options={getInternalIndustrySegmentsValues()}
                  />
                </div>
              )}
              {customer.partyType === 2 && (
                <div>
                  <Dropdown
                    title="External Identifier Type"
                    value={customer.externalIdentifierType}
                    name="externalIdentifierType"
                    onChange={onChange}
                    options={
                      externalIdentifierTypes
                        ? externalIdentifierTypes.map(
                            (externalIdentifierType) => ({
                              value: `${externalIdentifierType.externalIdentifierTypeId}`,
                              label:
                                externalIdentifierType.externalIdentifierTypeName,
                            })
                          )
                        : []
                    }
                  />
                  <Dropdown
                    title="Status"
                    value={customer.status}
                    name="status"
                    onChange={onChange}
                    options={
                      statuses
                        ? statuses.map((status) => ({
                            value: `${status.statusId}`,
                            label: status.statusName,
                          }))
                        : []
                    }
                  />
                  <TextField
                    title="Identifier Value"
                    name="identifierValue"
                    value={customer.identifierValue}
                    onChange={onChange}
                  />
                  <Dropdown
                    title="Country"
                    value={customer.identifierCountry}
                    name="identifierCountry"
                    onChange={onChange}
                    options={
                      countries
                        ? countries.map((country) => ({
                            value: `${country.countryId}`,
                            label: country.countryName,
                          }))
                        : []
                    }
                  />
                </div>
              )}
              {customer.partyType === 1 && (
                <React.Fragment>
                  <div>
                    <Dropdown
                      title="External Identifier Type"
                      value={customer.externalIdentifierType}
                      name="externalIdentifierType"
                      onChange={onChange}
                      options={
                        externalIdentifierTypes
                          ? externalIdentifierTypes.map(
                              (externalIdentifierType) => ({
                                value: `${externalIdentifierType.externalIdentifierTypeId}`,
                                label:
                                  externalIdentifierType.externalIdentifierTypeName,
                              })
                            )
                          : []
                      }
                    />
                    <Dropdown
                      title="Status"
                      value={customer.status}
                      name="status"
                      onChange={onChange}
                      options={
                        statuses
                          ? statuses.map((status) => ({
                              value: `${status.statusId}`,
                              label: status.statusName,
                            }))
                          : []
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      title="Identifier Value"
                      name="identifierValue"
                      value={customer.identifierValue}
                      onChange={onChange}
                    />
                    <Dropdown
                      title="Country"
                      value={customer.identifierCountry}
                      name="identifierCountry"
                      onChange={onChange}
                      options={
                        countries
                          ? countries.map((country) => ({
                              value: `${country.countryId}`,
                              label: country.countryName,
                            }))
                          : []
                      }
                    />
                  </div>
                  <div></div>
                </React.Fragment>
              )}
              {customer.partyType === 2 && (
                <div>
                  <Checkbox
                    title="Identified Headquarter Indicator"
                    name="identifiedHeadquarterIndicator"
                    value={customer.identifiedHeadquarterIndicator}
                    onChange={onChange}
                  />
                  <Checkbox
                    title="Global Ultimate Parent Indicator"
                    name="globalUltimateParentIndicator"
                    value={customer.globalUltimateParentIndicator}
                    onChange={onChange}
                  />
                  <Checkbox
                    title="Domestic Ultimate Parent Indicator"
                    name="domesticUltimateParentIndicator"
                    value={customer.domesticUltimateParentIndicator}
                    onChange={onChange}
                  />
                  <Checkbox
                    title="Parent Indicator"
                    name="parentIndicator"
                    value={customer.parentIndicator}
                    onChange={onChange}
                  />
                </div>
              )}
            </div>
          </Panel>
        </div>
      </div>
      {errors && errors.length > 0 && (
        <div>
          {errors.map((error) => (
            <p>{error}</p>
          ))}
        </div>
      )}
      <div className={s.buttons_container}>
        <Button title="Reset" type="grey" onClick={onReset} />
        <Button title="Save" type="green" onClick={onSave} />
      </div>
    </React.Fragment>
  );
};

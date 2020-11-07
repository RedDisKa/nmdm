import React, { useCallback, useRef, useState } from "react";
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

const INIT_STATE = {
  partyType: "1",
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
  stateProvince: "",
  postalCode: "",
  country: "",
  cityAreaDistrictName: "",
  phoneFaxType: "",
  phoneFaxRole: "",
  countryCode: "",
  phoneFaxNumber: "",
  extension: "",
  addressDeliveryIndicator: false,
  prefferedIndicator: false,

  industrySegment: "",
  internalIndustrySegment: "",
  industryVertical: "",
  internalIndustryVertical: "",
  externalIdentifierType: "",
  status: "",
  identifierValue: "",
  identifierCountry: "",
  identifiedHeadquarterIndicator: false,
  globalUltimateParentIndicator: false,
  domesticUltimateParentIndicator: false,
  parentIndicator: false,

  logo: '',
  potencialMatches: []
} as Customer;

export const CreateCustomerPage = () => {
  const [customer, setCustomer] = useState({ ...INIT_STATE });

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

  const onChange = (name: string, value: boolean | string) => {
    setCustomer({ ...customer, [name]: value });
  };

  const onChangeCountry = (name: string, value: boolean | string) => {
    if (
      !!customer.stateProvince &&
      customer.stateProvince !== "" &&
      !!stateProvinces
    ) {
      const currentStateProvince = stateProvinces.filter(
        (stateProvince) =>
          stateProvince.stateProvinceId === customer.stateProvince
      )[0];
      if (currentStateProvince.country.countryId !== value) {
        setCustomer({ ...customer, [name]: value, stateProvince: "" });
        return;
      }
    }
    setCustomer({ ...customer, [name]: value });
  };

  const onChangeStateProvince = (name: string, value: boolean | string) => {
    if ((!customer.country || customer.country === "") && !!stateProvinces) {
      const currentStateProvince = stateProvinces.filter(
        (stateProvince) => stateProvince.stateProvinceId === value
      )[0];
      setCustomer({
        ...customer,
        [name]: value,
        country: currentStateProvince.country.countryId,
      });
      return;
    }
    setCustomer({ ...customer, [name]: value });
  };

  const onChangeIndustryVertical = (name: string, value: boolean | string) => {
    if (
      !!customer.industrySegment &&
      customer.industrySegment !== "" &&
      !!industrySegments
    ) {
      const currentIndustrySegment = industrySegments.filter(
        (industrySegment) =>
          industrySegment.industrySegmentId === customer.industrySegment
      )[0];
      if (
        currentIndustrySegment.industryVertical.industryVerticalId !== value
      ) {
        setCustomer({ ...customer, [name]: value, industrySegment: "" });
        return;
      }
    }
    setCustomer({ ...customer, [name]: value });
  };

  const onChangeIndustrySegment = (name: string, value: boolean | string) => {
    if (
      (!customer.industryVertical || customer.industryVertical === "") &&
      !!industrySegments
    ) {
      const currentIndustrySegment = industrySegments.filter(
        (industrySegment) => industrySegment.industrySegmentId === value
      )[0];
      setCustomer({
        ...customer,
        [name]: value,
        industryVertical:
          currentIndustrySegment.industryVertical.industryVerticalId,
      });
      return;
    }
    setCustomer({ ...customer, [name]: value });
  };

  const onChangeInternalIndustryVertical = (
    name: string,
    value: boolean | string
  ) => {
    if (
      !!customer.internalIndustrySegment &&
      customer.internalIndustrySegment !== "" &&
      !!industrySegments
    ) {
      const currentIndustrySegment = industrySegments.filter(
        (industrySegment) =>
          industrySegment.industrySegmentId === customer.internalIndustrySegment
      )[0];
      if (
        currentIndustrySegment.industryVertical.industryVerticalId !== value
      ) {
        setCustomer({
          ...customer,
          [name]: value,
          internalIndustrySegment: "",
        });
        return;
      }
    }
    setCustomer({ ...customer, [name]: value });
  };

  const onChangeInternalIndustrySegment = (
    name: string,
    value: boolean | string
  ) => {
    if (
      (!customer.internalIndustryVertical ||
        customer.internalIndustryVertical === "") &&
      !!industrySegments
    ) {
      const currentIndustrySegment = industrySegments.filter(
        (industrySegment) => industrySegment.industrySegmentId === value
      )[0];
      setCustomer({
        ...customer,
        [name]: value,
        internalIndustryVertical:
          currentIndustrySegment.industryVertical.industryVerticalId,
      });
      return;
    }
    setCustomer({ ...customer, [name]: value });
  };

  const onChangeType = (name: string, value: boolean | string) => {
    if (value === "1") {
      setCustomer({
        ...customer,
        partyType: value,
        organizationName: "",
        accountType: "",
        marketSizeCode: "",
        dunsId: "",
        partyName: "",

        industrySegment: "",
        internalIndustrySegment: "",
        industryVertical: "",
        internalIndustryVertical: "",
        identifiedHeadquarterIndicator: false,
        globalUltimateParentIndicator: false,
        domesticUltimateParentIndicator: false,
        parentIndicator: false,
      });
    } else {
      setCustomer({
        ...customer,
        [name]: value,
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
      dispatch(allActions.customerActions.createCustomer(customer as Customer));
  };

  const onInputFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event.target.files && event.target.files[0];
    console.log(fileUploaded);
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
    return !customer.country
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

  return (
    <React.Fragment>
      {loading && <Loader />}
      <div className={s.container}>
        <Panel classNames={customer.partyType === "1" ? s.person : ""}>
          <div className={s.main_container}>
            {getUploadPhoto()}
            <Dropdown
              title="Party Type"
              value={customer.partyType}
              name="partyType"
              onChange={onChangeType}
              options={
                partyTypes
                  ? partyTypes.map((partyType) => ({
                      value: `${partyType.partyTypeId}`,
                      label: partyType.partyTypeName,
                    }))
                  : []
              }
            />
            {customer.partyType === "2" && (
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
              options={[]}
            />
            {customer.partyType === "2" && (
              <TextField
                title="Party Name"
                value={customer.partyName}
                name="partyName"
                onChange={onChange}
              />
            )}
            {customer.partyType === "1" && (
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
                  value={customer.country}
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
                  value={customer.stateProvince}
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
                    options={
                      countries
                        ? countries.map((country) => ({
                            value: `${country.countryId}`,
                            label: country.countryTelephoneAccessCode,
                          }))
                        : []
                    }
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
              {customer.partyType === "2" && (
                <div>
                  <Dropdown
                    title="Industry Vertical"
                    value={customer.industryVertical}
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
                    value={customer.industrySegment}
                    name="industrySegment"
                    onChange={onChangeIndustrySegment}
                    options={getIndustrySegmentsValues()}
                  />
                  <Dropdown
                    title="Internal Industry Vertical"
                    value={customer.internalIndustryVertical}
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
                    value={customer.internalIndustrySegment}
                    name="internalIndustrySegment"
                    onChange={onChangeInternalIndustrySegment}
                    options={getInternalIndustrySegmentsValues()}
                  />
                </div>
              )}
              {customer.partyType === "2" && (
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
              {customer.partyType === "1" && (
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
              {customer.partyType === "2" && (
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
      <div className={s.buttons_container}>
        <Button title="Reset" type="grey" onClick={onReset} />
        <Button title="Save" type="green" onClick={onSave} />
      </div>
    </React.Fragment>
  );
};

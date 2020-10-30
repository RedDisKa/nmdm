import React, { useRef, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { DropdownComponent as Dropdown } from "../../components/Dropdown/Dropdown";
import { Panel } from "../../components/Panel/Panel";
import { TextField } from "../../components/TextField/TextField";
import {
  PARTY_TYPE_DROPDOWN,
  ORGANIZATION,
  PERSON,
} from "../../constants/partyType";
import s from "./createcustomerpage.module.scss";

const INIT_STATE = {
  partyType: ORGANIZATION,
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
};

export const CreateCustomerPage = () => {
  const [customer, setCustomer] = useState({ ...INIT_STATE });

  const inputRef = useRef(null as HTMLInputElement | null);

  const onChange = (name: string, value: boolean | string) => {
    setCustomer({ ...customer, [name]: value });
  };

  const onChangeType = (name: string, value: boolean | string) => {
    if (value === PERSON) {
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
    console.log(customer);
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

  return (
    <React.Fragment>
      <div className={s.container}>
        <Panel classNames={customer.partyType === PERSON ? s.person : ""}>
          <div className={s.main_container}>
            {getUploadPhoto()}
            <Dropdown
              title="Party Type"
              value={customer.partyType}
              name="partyType"
              onChange={onChangeType}
              options={PARTY_TYPE_DROPDOWN}
            />
            {customer.partyType === ORGANIZATION && (
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
                  options={[]}
                />
                <Dropdown
                  title="Market Size Code"
                  value={customer.marketSizeCode}
                  name="marketSizeCode"
                  onChange={onChange}
                  options={[]}
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
            {customer.partyType === ORGANIZATION && (
              <TextField
                title="Party Name"
                value={customer.partyName}
                name="partyName"
                onChange={onChange}
              />
            )}
            {customer.partyType === PERSON && (
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
                <TextField
                  title="County Name"
                  name="countryName"
                  value={customer.countryName}
                  onChange={onChange}
                />
              </div>
              <div>
                <Dropdown
                  title="State Province"
                  value={customer.partyStatus}
                  name="partyStatus"
                  onChange={onChange}
                  options={[]}
                />
                <TextField
                  title="Postal Code"
                  name="postalCode"
                  value={customer.postalCode}
                  onChange={onChange}
                />
                <Dropdown
                  title="Country"
                  value={customer.country}
                  name="country"
                  onChange={onChange}
                  options={[]}
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
                  options={[]}
                />
                <Dropdown
                  title="Phone Fax Role"
                  value={customer.phoneFaxRole}
                  name="phoneFaxRole"
                  onChange={onChange}
                  options={[]}
                />
                <div className={s.phone_fax_container}>
                  <Dropdown
                    title="Country Code"
                    value={customer.countryCode}
                    name="countryCode"
                    onChange={onChange}
                    options={[]}
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
              {customer.partyType === ORGANIZATION && (
                <div>
                  <Dropdown
                    title="Industry Segment"
                    value={customer.industrySegment}
                    name="industrySegment"
                    onChange={onChange}
                    options={[]}
                  />
                  <Dropdown
                    title="Internal Industry Segment"
                    value={customer.internalIndustrySegment}
                    name="internalIndustrySegment"
                    onChange={onChange}
                    options={[]}
                  />
                  <Dropdown
                    title="Industry Vertical"
                    value={customer.industryVertical}
                    name="industryVertical"
                    onChange={onChange}
                    options={[]}
                  />
                  <Dropdown
                    title="Internal Industry Vertical"
                    value={customer.internalIndustryVertical}
                    name="internalIndustryVertical"
                    onChange={onChange}
                    options={[]}
                  />
                </div>
              )}
              {customer.partyType === ORGANIZATION && (
                <div>
                  <Dropdown
                    title="External Identifier Type"
                    value={customer.externalIdentifierType}
                    name="externalIdentifierType"
                    onChange={onChange}
                    options={[]}
                  />
                  <Dropdown
                    title="Status"
                    value={customer.status}
                    name="status"
                    onChange={onChange}
                    options={[]}
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
                    options={[]}
                  />
                </div>
              )}
              {customer.partyType === PERSON && (
                <React.Fragment>
                  <div>
                    <Dropdown
                      title="External Identifier Type"
                      value={customer.externalIdentifierType}
                      name="externalIdentifierType"
                      onChange={onChange}
                      options={[]}
                    />
                    <Dropdown
                      title="Status"
                      value={customer.status}
                      name="status"
                      onChange={onChange}
                      options={[]}
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
                      options={[]}
                    />
                  </div>
                  <div></div>
                </React.Fragment>
              )}
              {customer.partyType === ORGANIZATION && (
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

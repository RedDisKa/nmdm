import React, { useEffect, useState } from "react";
import { ListComponent } from "../../components/List/List";
import { Panel } from "../../components/Panel/Panel";
import { PERSON } from "../../constants/partyType";
import { Customer, ListItem } from "../../types";
import s from "./customerdetailspage.module.scss";

const TEST_DATA = {
  partyType: PERSON,
  organizationName: "",
  accountType: "",
  marketSizeCode: "",
  dunsId: "",
  partyStatus: "",
  partyName: "Test",

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

const TEST_EMPLOYEE_LIST = [
  {
    name: "Riley Cooper",
    description: "Account Executive",
    image: "",
  },
  {
    name: "Rahul Malviya",
    description: "Account Manager",
    image: "",
  },
  {
    name: "Jumaima Al Nour",
    description: "Executive Sponsor",
    image: "",
  },
  {
    name: "Faadi Al Rahman",
    description: "Sales Manager",
    image: "",
  },
  {
    name: "Maria Trofimova",
    description: "Pre-sales Consultant",
    image: "",
  },
  {
    name: "Faadi Al Rahman",
    description: "Sales Manager",
    image: "",
  },
];

const TEST_ACCOUNT_TEAN = [
  {
    name: "Lacara Jones",
    description: "Account Executive",
    image: "",
  },
  {
    name: "Herse Hedman",
    description: "Account Manager",
    image: "",
  },
  {
    name: "Farrokh Rastegar",
    description: "Executive Sponsor",
    image: "",
  },
  {
    name: "Dominik Doudny",
    description: "Pre-sales Consultant",
    image: "",
  },
  {
    name: "Malin Quist",
    description: "Sales Manager",
    image: "",
  },
  {
    name: "Dominik Doudny",
    description: "Pre-sales Consultant",
    image: "",
  },
  {
    name: "Malin Quist",
    description: "Sales Manager",
    image: "",
  },
];

const TEST_COMPETITORS = [
  {
    name: "Samsung Group",
    image: "",
  },
  {
    name: "Dell Technologies Inc.",
    image: "",
  },
  {
    name: "Sony Corporation",
    image: "",
  },
  {
    name: "Panasonic Corporation",
    image: "",
  },
];

const TEST_SUPPLIERS = [
  {
    name: "3M Company",
    image: "",
  },
  {
    name: "AAC Technologies",
    image: "",
  },
  {
    name: "LG Innotek Company Limited",
    image: "",
  },
  {
    name: "Hitachi Limited",
    image: "",
  },
  {
    name: "Intel Corporation",
    image: "",
  },
  {
    name: "Hewlett-Packard",
    image: "",
  },
];

const TEST_PRODUCTS = [
  {
    name: "Laboriosam itaque",
    image: "",
  },
  {
    name: "Voluptatem ut",
    image: "",
  },
  {
    name: "Autem voluptatem totam",
    image: "",
  },
  {
    name: "Facilis nulla sunt",
    image: "",
  },
  {
    name: "Aut deleniti culpa",
    image: "",
  },
];

export const CustomerDetailsPage = () => {
  const [customer, setCustomer] = useState(undefined as Customer | undefined);
  const [employeeList, setEmployeeList] = useState([] as ListItem[]);
  const [accountTeamList, setAccountTeamList] = useState([] as ListItem[]);
  const [competitorsList, setCompetitorsList] = useState([] as ListItem[]);
  const [suppliersList, setSuppliersList] = useState([] as ListItem[]);
  const [productsList, setProductsList] = useState([] as ListItem[]);

  useEffect(() => {
    setCustomer({ ...TEST_DATA });
    setEmployeeList(TEST_EMPLOYEE_LIST);
    setAccountTeamList(TEST_ACCOUNT_TEAN);
    setSuppliersList(TEST_SUPPLIERS);
    setCompetitorsList(TEST_COMPETITORS);
    setProductsList(TEST_PRODUCTS);
  }, []);

  return (
    <div className={s.container}>
      <div>
        <Panel></Panel>
        <div>
        <Panel><ListComponent title='Employees' list={employeeList} showTotal={true} actions={[]} info={<div></div>} itemSize="medium" maxVisibleItems={5}  /></Panel>
        <Panel><ListComponent title='Account Team' list={accountTeamList} showTotal={true} actions={[]} info={<div></div>} itemSize="medium" maxVisibleItems={5}  /></Panel>
        </div>
        <div>
        <Panel><ListComponent title='Competitors' list={competitorsList} showTotal={true} actions={[]} info={<div></div>} itemSize="small" maxVisibleItems={6}  /></Panel>
        <Panel><ListComponent title='Suppliers' list={suppliersList} showTotal={true} actions={[]} info={<div></div>} itemSize="small" maxVisibleItems={6}  /></Panel>
        </div>
      </div>
      <div>
        <div>
          <div>
            <Panel>Potencial Matches</Panel>
            <Panel>Key Financial Figures Overview</Panel>
          </div>
          <Panel>History</Panel>
        </div>
        <div>
          <Panel>Sales Hierarchy</Panel>
          <Panel>DnB Hierarchy</Panel>
        </div>
        <Panel><ListComponent title='Products' list={productsList} showTotal={true} actions={[]} info={<div></div>} itemSize="small" maxVisibleItems={6}  /></Panel>
      </div>
    </div>
  );
};

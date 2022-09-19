import React, { Reducer, useReducer, useState } from "react";
import { PurchaseContractSchema } from "../utils/PurchaseContractSchema";
import { PurchaseContractNav } from "./PurchaseContractNav";
import { PurchaseContractSection } from "./PurchaseContractSection";

export enum ActionType {
  ChangeSection,
  SaveSection,
}

export type Action = {
  action: ActionType;
  data: string | object;
};

export type PurchaseContractData = {
  currentSection: string;
  section1Complete: boolean;
  section2Complete: boolean;
  section3Complete: boolean;
  section4Complete: boolean;
  section5Complete: boolean;
  section6Complete: boolean;
  section7Complete: boolean;
  section8Complete: boolean;
  section10Complete: boolean;
  section11Complete: boolean;
  section12Complete: boolean;
  section14Complete: boolean;
  section15Complete: boolean;
  section16Complete: boolean;
  section17Complete: boolean;
  section18Complete: boolean;
  section19Complete: boolean;
  section20Complete: boolean;
  section21Complete: boolean;
  section22Complete: boolean;
  section23Complete: boolean;
  currentData: any;
};

const starterData = {
  attorneyApprovalDays: 5,
  buyerAddress: "900 S Clark St Apt 1415",
  buyerAgentAddress: "900 N Michigan Ave",
  buyerAgentBrokerageCompanyName: "Dylan Realty",
  buyerAgentBrokerageLicenseNumber: "0452956",
  buyerAgentBrokerageMLSNumber: "02030303",
  buyerAgentCity: "Chicago",
  buyerAgentEmailAddress: "dylan@saferate.com",
  buyerAgentFirstName: "Dylan",
  buyerAgentLastName: "Agent",
  buyerAgentLicenseNumber: "50505121",
  buyerAgentMLSNumber: "123456789",
  buyerAgentState: "IL",
  buyerAgentZipCode: "60601",
  buyerAttorneyAddress: "2804 N Hoyne",
  buyerAttorneyCity: "Chicago",
  buyerAttorneyEmailAddress: "attorneymcgee@attorneygroup.com",
  buyerAttorneyFirstName: "Attorney",
  buyerAttorneyLastName: "McGee",
  buyerAttorneyState: "IL",
  buyerAttorneyZipCode: "61820",
  buyerCellPhone: "217-638-0869",
  buyerCity: "Chicago",
  buyerEmailAddress: "dylhallan@gmail.com",
  buyerFirstName: "Dylan",
  buyerLastName: "Hall",
  buyerOfficePhone: undefined,
  buyerState: "IL",
  buyerZipCode: "60615",
  closingCostAmount: 1000,
  closingCostType: "$ amount",
  closingDate: "2022-11-01",
  disclosureHeatYes: true,
  disclosureILRealPropertyYes: true,
  disclosureLeadYes: true,
  disclosureMoldYes: false,
  disclosureRadonYes: true,
  escrowee: "Shima Realty",
  finalEarnestMoneyAmount: 3,
  finalEarnestMoneyBusinessDays: 3,
  finalEarnestMoneyType: "%",
  hasDishwasher: true,
  hasDryer: false,
  hasGarbageDisposal: true,
  hasLightingFixtures: true,
  hasMicrowave: true,
  hasOven: true,
  hasRefrigerator: true,
  hasSmokeDetectors: true,
  hasSumpPump: false,
  hasTrashCompactor: false,
  hasWasher: false,
  hasWaterSoftener: false,
  hoaAssessment: 653,
  hoaDocumentsDueDays: 5,
  initialEarnestAmount: 3000,
  initialEarnestForm: "Check",
  inspectionPeriod: 6,
  loanAmount: 240000,
  loanAmountType: "$ amount",
  mortgageCommitmentDate: "2022-10-17",
  mortgageInterestRate: 5,
  mortgageLender: "Safe Rate Lending",
  mortgageLenderAddress: "515 N State St, Floor 13",
  mortgageLenderCellPhone: "312-248-0234",
  mortgageLenderCity: "Chicago",
  mortgageLenderEmail: "team@saferate.com",
  mortgageLenderFax: "312-535-7089",
  mortgageLenderOfficePhone: "312-248-0234",
  mortgageLenderState: "IL",
  mortgageLenderZipCode: "60654",
  mortgageOriginatorFirstName: undefined,
  mortgageOriginatorLastName: undefined,
  mortgageYear: 30,
  notAcceptedDate: "2022-10-07",
  offerDate: "2022-09-19",
  parkingIndoor: true,
  parkingLimitedCommon: true,
  propertyAddress: "211 E Ohio St Apt 510, Chicago, IL 60611",
  propertyPIN: "17-10-209-025-1015",
  propertyTaxAmount: 4359.53,
  propertyTaxExemptionsHomeowner: true,
  propertyTaxYear: "2021",
  purchasePrice: 300000,
  sellerAddress: "5050 S Lake Shore Dr",
  sellerAgentAddress: "125 S Clark St",
  sellerAgentBrokerageCompanyName: "Shima Realty",
  sellerAgentBrokerageLicenseNumber: "897234897324",
  sellerAgentBrokerageMLSNumber: "125498234987",
  sellerAgentCity: "Chicago",
  sellerAgentEmailAddress: "shima@saferate.com",
  sellerAgentFirstName: "Shima",
  sellerAgentLastName: "Agent",
  sellerAgentLicenseNumber: "128912892",
  sellerAgentMLSNumber: "23023402340",
  sellerAgentState: "IL",
  sellerAgentZipCode: "60601",
  sellerAttorneyAddress: "4343 W Division St",
  sellerAttorneyCity: "Chicago",
  sellerAttorneyEmailAddress: "farsiattorney@attorneygroup.com",
  sellerAttorneyFirstName: "Farsi",
  sellerAttorneyLastName: "Attorney",
  sellerAttorneyState: "IL",
  sellerAttorneyZipCode: "60623",
  sellerCellPhone: "301-395-1000",
  sellerCity: "Chicago",
  sellerEmailAddress: "srayej@gmail.com",
  sellerFirstName: "Shima",
  sellerLastName: "Rayej",
  sellerState: "IL",
  sellerZipCode: "60611",
  squareFootage: "1000",
  storageLimitedCommon: true,
  useOccupancyPayments: 74.54,
};

const purchaseContractReducer: Reducer<PurchaseContractData, Action> = (
  state: PurchaseContractData,
  action: Action
): PurchaseContractData => {
  const newState = { ...state };

  if (action.action === ActionType.ChangeSection) {
    newState.currentSection = action.data as string;
  } else if (action.action === ActionType.SaveSection) {
    const data: object = action.data as object;

    const currentSectionInt = parseInt(state.currentSection);

    if (currentSectionInt) {
      const sectionCompleteIndex = `section${state.currentSection}Complete`;
      if (sectionCompleteIndex in newState) {
        // @ts-ignore
        newState[sectionCompleteIndex] = true;

        let nextSection: string | number = currentSectionInt + 1;
        if (nextSection === 9 || nextSection === 13) {
          nextSection = nextSection + 1;
        } else if (nextSection === 24) {
          nextSection = "review";
        }

        // get fields in section
        const sectionProperties =
          PurchaseContractSchema.properties[`section${state.currentSection}`]
            .properties;

        const sectionKeys = Object.keys(sectionProperties);
        for (let sk = 0; sk < sectionKeys.length; sk++) {
          const sectionKey = sectionKeys[sk];

          if (data.hasOwnProperty(sectionKey)) {
            // @ts-ignore
            newState.currentData[sectionKey] = data[sectionKey];
          } else {
            // Remove if it was old data but is not in new saved data
            if (state.currentData.hasOwnProperty(sectionKey)) {
              delete newState.currentData[sectionKey];
            }
          }
        }

        nextSection = "" + nextSection;
        newState.currentSection = nextSection;
      }
    } else {
      // Todo: impmlement review
    }
  }

  return newState;
};

const PurchaseContract = () => {
  const [state, dispatch] = useReducer(purchaseContractReducer, {
    currentSection: "1",
    section1Complete: false,
    section2Complete: false,
    section3Complete: false,
    section4Complete: false,
    section5Complete: false,
    section6Complete: false,
    section7Complete: false,
    section8Complete: false,
    section10Complete: false,
    section11Complete: false,
    section12Complete: false,
    section14Complete: false,
    section15Complete: false,
    section16Complete: false,
    section17Complete: false,
    section18Complete: false,
    section19Complete: false,
    section20Complete: false,
    section21Complete: false,
    section22Complete: false,
    section23Complete: false,
    currentData: { ...starterData },
  });

  return (
    <div>
      <PurchaseContractNav state={state} dispatch={dispatch} />
      <PurchaseContractSection state={state} dispatch={dispatch} />
    </div>
  );
};

export default PurchaseContract;

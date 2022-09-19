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
  buyerAgentEmailAddress: "dylan@saferate.com",
  buyerAgentFirstName: "Dylan",
  buyerAgentLastName: "Agent",
  buyerEmailAddress: "dylhallan@gmail.com",
  buyerFirstName: "Dylan",
  buyerLastName: "Hall",
  closingDate: "2022-11-01",
  disclosureHeatYes: true,
  disclosureILRealPropertyYes: true,
  disclosureLeadYes: true,
  disclosureMoldYes: true,
  disclosureRadonYes: true,
  escrowee: "Shima Realty",
  finalEarnestMoneyAmount: 3,
  finalEarnestMoneyBusinessDays: 3,
  finalEarnestMoneyType: "%",
  hasDishwasher: true,
  hasDryer: true,
  hasGarbageDisposal: true,
  hasLightingFixtures: true,
  hasMicrowave: true,
  hasOven: true,
  hasRefrigerator: true,
  hasSmokeDetectors: true,
  hasSumpPump: true,
  hasTrashCompactor: true,
  hasWasher: true,
  hasWaterSoftener: true,
  hoaAssessment: 653,
  hoaDocumentsDueDays: 5,
  initialEarnestAmount: 3000,
  initialEarnestForm: "Check",
  inspectionPeriod: 6,
  mortageCommitmentDate: undefined,
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
  notAcceptedDayMonth: "2022-10-01",
  offerDate: "2022-09-19",
  propertyAddress: "211 E Ohio St Apt 510",
  propertyPIN: "17-10-209-025-1015",
  propertyTaxAmount: 4359.53,
  propertyTaxExemptionsHomeowner: true,
  propertyTaxYear: "2021",
  purchasePrice: 300000,
  sellerAgentEmailAddress: "shima@perseeventures.com",
  sellerAgentFirstName: "Shima",
  sellerAgentLastName: "Agent",
  sellerEmailAddress: "srayej@gmail.com",
  sellerFirstName: "Shima",
  sellerLastName: "Rayej",
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

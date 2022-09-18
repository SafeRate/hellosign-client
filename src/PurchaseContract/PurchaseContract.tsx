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
  currentData: any;
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
        } else if (nextSection === 17) {
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
    currentData: {},
  });

  return (
    <div>
      <PurchaseContractNav state={state} dispatch={dispatch} />
      <PurchaseContractSection state={state} dispatch={dispatch} />
    </div>
  );
};

export default PurchaseContract;

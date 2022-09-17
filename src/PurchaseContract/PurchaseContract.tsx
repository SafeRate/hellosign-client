import React, { useReducer, useState } from "react";
import { PurchaseContractNav } from "./PurchaseContractNav";
import { PurchaseContractSection } from "./PurchaseContractSection";

export type SectionReductionAction = {
  section: string;
};

function purchaseContractReducer(state: any, action: SectionReductionAction) {
  switch (action.section) {
    case "1":
      return {};
    case "2":
      return {};
    case "3":
      return {};
    case "4":
      return {};
    case "5":
      return {};
    case "6":
      return {};
    case "7":
      return {};
    case "8":
      return {};
    case "10":
      return {};
    case "11":
      return {};
    case "12":
      return {};
    case "14":
      return {};
    case "15":
      return {};
    case "16":
      return {};
    default:
      throw new Error();
  }
}

const PurchaseContract = () => {
  const [currentSection, setSection] = useState("1");
  const [purchaseContract, dispatch] = useReducer(purchaseContractReducer, {});

  return (
    <div>
      <PurchaseContractNav
        currentSection={currentSection}
        setSection={setSection}
      />
      <PurchaseContractSection
        currentSection={currentSection}
        setSection={setSection}
      />
    </div>
  );
};

export default PurchaseContract;

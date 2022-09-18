import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React, { Dispatch } from "react";
import { Action, ActionType, PurchaseContractData } from "./PurchaseContract";

type PurchaseContractNavArgs = {
  state: PurchaseContractData;
  dispatch: Dispatch<Action>;
};

export const PurchaseContractNav = (args: PurchaseContractNavArgs) => {
  const state = args.state;
  const dispatch = args.dispatch;
  const currentSection = state.currentSection;

  return (
    <FormControl>
      <FormLabel>Purchase Contract Section</FormLabel>
      <Select
        value={currentSection}
        onChange={(e) => {
          dispatch({
            action: ActionType.ChangeSection,
            data: e.target.value,
          });
        }}
      >
        <option value="review">Review and Submit</option>
        <option value="1">
          1. Property Information
          {state.section1Complete ? " (✓)" : null}
        </option>
        <option value="2">
          2. Fixtures and Personal Property
          {state.section2Complete ? " (✓)" : null}
        </option>
        <option value="3">
          3. Purchase Price
          {state.section3Complete ? " (✓)" : null}
        </option>
        <option value="4">
          4. Earnest Money {state.section4Complete ? " (✓)" : null}
        </option>
        <option value="5">
          5. Mortgage Contingency {state.section5Complete ? " (✓)" : null}
        </option>
        <option value="6">
          6. Closing Cost Credit to Buyer from Seller{" "}
          {state.section6Complete ? " (✓)" : null}
        </option>
        <option value="7">
          7. Closing {state.section7Complete ? " (✓)" : null}
        </option>
        <option value="8">
          8. Possession {state.section8Complete ? " (✓)" : null}
        </option>
        <option value="10">
          10. Real Estate Taxes {state.section10Complete ? " (✓)" : null}
        </option>
        <option value="11">
          11. Homeowner's Association {state.section11Complete ? " (✓)" : null}
        </option>
        <option value="12">
          12. Disclosures {state.section12Complete ? " (✓)" : null}
        </option>
        <option value="14">
          14. Attorney Modification {state.section14Complete ? " (✓)" : null}
        </option>
        <option value="15">
          15. Inspection {state.section15Complete ? " (✓)" : null}
        </option>
        <option value="16">
          16. General Provision, Riders, Addendums{" "}
          {state.section16Complete ? " (✓)" : null}
        </option>
        <option value="17">
          17. Buyers {state.section17Complete ? " (✓)" : null}
        </option>
        <option value="18">
          18. Sellers {state.section18Complete ? " (✓)" : null}
        </option>
        <option value="19">
          19. Buyers Agent {state.section19Complete ? " (✓)" : null}
        </option>
        <option value="20">
          20. Sellers Agent {state.section20Complete ? " (✓)" : null}
        </option>
        <option value="21">
          21. Buyers Attorney {state.section21Complete ? " (✓)" : null}
        </option>
        <option value="22">
          22. Sellers Attorney {state.section22Complete ? " (✓)" : null}
        </option>
        <option value="23">
          23. Mortgage Lender {state.section23Complete ? " (✓)" : null}
        </option>
      </Select>
    </FormControl>
  );
};

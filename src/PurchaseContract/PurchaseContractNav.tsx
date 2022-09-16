import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";

type PurchaseContractNavArgs = {
  currentSection: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
};

export const PurchaseContractNav = (args: PurchaseContractNavArgs) => {
  const currentSection = args.currentSection;
  const setSection = args.setSection;

  return (
    <FormControl>
      <FormLabel>Purchase Contract Section</FormLabel>
      <Select
        value={currentSection}
        onChange={(e) => {
          setSection(e.target.value);
        }}
      >
        <option value="1">1. Property Information</option>
        <option value="2">2. Fixtures and Personal Property</option>
        <option value="3">3. Purchase Price</option>
        <option value="4">4. Earnest Money</option>
        <option value="5">5. Mortgage Contingency</option>
        <option value="6">6. Closing Cost Credit to Buyer from Seller</option>
        <option value="7">7. Closing</option>
        <option value="8">8. Possession</option>
        <option value="1">10. Real Estate Taxes</option>
        <option value="11">11. Homeowner's Association</option>
        <option value="12">12. Disclosures</option>
        <option value="14">14. Attorney Modification</option>
        <option value="15">15. Inspection</option>
        <option value="16">16. General Provision, Riders, Addendums</option>
      </Select>
    </FormControl>
  );
};

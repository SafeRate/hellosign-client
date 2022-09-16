import React from "react";
import validator from "@rjsf/validator-ajv6";
import Form from "@rjsf/chakra-ui";
import { PurchaseContractSchema } from "../utils/PurchaseContractSchema";

const uiSchema = {
  "ui:widget": "checkboxes",
  "ui:options": {
    inline: true,
  },
};

const PurchaseContract = () => {
  return (
    <div>
      <Form
        schema={PurchaseContractSchema}
        uiSchema={uiSchema}
        validator={validator}
      />
    </div>
  );
};

export default PurchaseContract;

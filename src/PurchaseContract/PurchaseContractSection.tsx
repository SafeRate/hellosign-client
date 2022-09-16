import { PurchaseContractSchema } from "../utils/PurchaseContractSchema";
import validator from "@rjsf/validator-ajv6";
import Form from "@rjsf/chakra-ui";

const uiSchema = {
  "ui:widget": "checkboxes",
  "ui:options": {
    inline: true,
  },
};

type PurchaseContractSectionArgs = {
  currentSection: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
};

export const PurchaseContractSection = (args: PurchaseContractSectionArgs) => {
  const currentSection = args.currentSection;
  const setSection = args.setSection;

  const sectionSchema =
    PurchaseContractSchema.properties[`section${currentSection}`];

  console.log(sectionSchema);

  return (
    <div>
      <Form
        schema={sectionSchema}
        uiSchema={uiSchema}
        validator={validator}
        onSubmit={({ formData }) => console.log(formData)}
      />
    </div>
  );
};

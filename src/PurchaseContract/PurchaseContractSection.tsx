import { PurchaseContractSchema } from "../utils/PurchaseContractSchema";
import validator from "@rjsf/validator-ajv6";
import Form from "@rjsf/chakra-ui";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { ObjectFieldTemplateProps } from "@rjsf/utils";
import React from "react";

const uiSchema = {
  columns: "",
  "ui:widget": "checkboxes",
  "ui:options": {
    inline: true,

    chakra: {
      p: "1rem",
      color: "blue.200",
      sx: {
        margin: "0 auto",
        width: "300px",
      },
      width: "100px",
    },
  },
  "ui:submitButtonOptions": {
    props: {
      disabled: false,
      className: "btn btn-info",
    },
    norender: false,
    submitText: "Save",
  },
};

type PurchaseContractSectionArgs = {
  currentSection: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
};

function ObjectFieldTemplate(props: ObjectFieldTemplateProps) {
  return (
    <Box>
      {props.title}
      {props.description}
      <SimpleGrid
        id="simplegrid"
        columns={props.uiSchema?.columns ? props.uiSchema?.columns : 6}
        spacing={props.uiSchema?.spacing ? props.uiSchema?.spacing : 10}
      >
        {props.properties.map((element, e) => (
          <Box id={`ab${e}`}>{element.content}</Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

// function FieldTemplate(props: FieldTemplateProps) {
//   const {
//     id,
//     classNames,
//     label,
//     help,
//     required,
//     description,
//     errors,
//     rawErrors,
//     rawDescription,
//     children,
//   } = props;

//   const hasErrors = Array.isArray(rawErrors) && rawErrors.length > 0;
//   let errorStr = "";
//   if (hasErrors) {
//     errorStr = rawErrors.join(". ");
//   }

//   return <Box className={classNames}>{children}</Box>;
// }

export const PurchaseContractSection = (args: PurchaseContractSectionArgs) => {
  const currentSection = args.currentSection;
  const setSection = args.setSection;

  const sectionSchema =
    PurchaseContractSchema.properties[`section${currentSection}`];

  if (currentSection === "2") {
    uiSchema.columns = "6";
  } else {
    uiSchema.columns = "3";
  }

  return (
    <div>
      <Form
        formData={{}}
        schema={sectionSchema}
        uiSchema={uiSchema}
        validator={validator}
        templates={{ ObjectFieldTemplate }}
        onSubmit={({ formData }) => console.log(formData)}
      />
    </div>
  );
};

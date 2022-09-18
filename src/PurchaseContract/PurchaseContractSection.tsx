import { PurchaseContractSchema } from "../utils/PurchaseContractSchema";
import validator from "@rjsf/validator-ajv6";
import Form from "@rjsf/chakra-ui";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { ObjectFieldTemplateProps } from "@rjsf/utils";
import React from "react";
import { Action, ActionType, PurchaseContractData } from "./PurchaseContract";

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
  state: PurchaseContractData;
  dispatch: React.Dispatch<Action>;
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

export const PurchaseContractSection = (args: PurchaseContractSectionArgs) => {
  const state = args.state;
  const dispatch = args.dispatch;

  const currentSection = state.currentSection;

  if (currentSection === "review") {
    const sections = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "10",
      "11",
      "12",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
    ];

    const sectionsWithMissingFields = [];

    for (let s = 0; s < sections.length; s++) {
      const section = sections[s];
      const sectionSchema =
        PurchaseContractSchema.properties[`section${section}`];
      if (
        Array.isArray(sectionSchema.required) &&
        sectionSchema.required.length > 0
      ) {
        const missingRequireds = [];
        for (let r = 0; r < sectionSchema.required.length; r++) {
          const requiredKey = sectionSchema.required[r];
          if (state.currentData.hasOwnProperty(requiredKey) === false) {
            const fieldTitle = sectionSchema.properties[requiredKey].title;
            missingRequireds.push(fieldTitle);
          }
        }

        if (missingRequireds.length > 0) {
          sectionsWithMissingFields.push({ section, missingRequireds });
        }
      }
    }

    console.log(sectionsWithMissingFields.length);

    if (sectionsWithMissingFields.length === 0) {
      return (
        <Button onClick={() => console.log(state.currentData)}>
          You're good to go! Create a HelloSign now!
        </Button>
      );
    } else {
      return (
        <Box>
          {sectionsWithMissingFields.map((sectionWithMissingFields, swmf) => {
            return (
              <div key={swmf}>
                {sectionWithMissingFields.section}:{" "}
                {sectionWithMissingFields.missingRequireds.join(", ")}{" "}
                <Button
                  onClick={() =>
                    dispatch({
                      action: ActionType.ChangeSection,
                      data: sectionWithMissingFields.section,
                    })
                  }
                >
                  Go
                </Button>
              </div>
            );
          })}
        </Box>
      );
    }
  }

  const sectionSchema =
    PurchaseContractSchema.properties[`section${currentSection}`];

  if (currentSection === "2") {
    uiSchema.columns = "6";
  } else {
    uiSchema.columns = "3";
  }

  const formData = {};
  const sectionProperties =
    PurchaseContractSchema.properties[`section${state.currentSection}`]
      .properties;

  const sectionKeys = Object.keys(sectionProperties);
  for (let sk = 0; sk < sectionKeys.length; sk++) {
    const sectionKey = sectionKeys[sk];
    if (state.currentData.hasOwnProperty(sectionKey)) {
      // @ts-ignore
      formData[sectionKey] = state.currentData[sectionKey];
    }
  }

  return (
    <div>
      <Form
        formData={formData}
        schema={sectionSchema}
        uiSchema={uiSchema}
        validator={validator}
        templates={{ ObjectFieldTemplate }}
        onSubmit={({ formData }) =>
          dispatch({
            action: ActionType.SaveSection,
            data: formData,
          })
        }
      />
    </div>
  );
};

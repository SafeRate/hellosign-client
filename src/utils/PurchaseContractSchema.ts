export const PurchaseContractSchema: any = {
  title: "Real Estate Purchase and Sale Contract via HelloSign",
  description:
    "Create an e-signable, purchase and sale contract with HelloSign",
  type: "object",
  properties: {
    section1: {
      title: "",
      type: "object",
      required: ["propertyAddress", "propertyPIN"],
      properties: {
        propertyAddress: {
          type: "string",
          title: "Property Address",
        },
        propertyPIN: {
          type: "string",
          title: "Property PIN",
        },
        squareFootage: {
          type: "string",
          title: "Square Footage",
        },
        parkingIndoor: {
          type: "boolean",
          title: "Indoor Parking",
        },
        parkingOutdoor: {
          type: "boolean",
          title: "Outdoor Parking",
        },
        parkingNumber: {
          type: "string",
          title: "Parking Numbers",
        },
        parkingDeeded: {
          type: "boolean",
          title: "Deeded Parking",
        },
        parkingAssigned: {
          type: "boolean",
          title: "Assigned Parking",
        },
        parkingLimitedCommon: {
          type: "boolean",
          title: "Limited Common Parking",
        },
        parkingPIN: {
          type: "string",
          title: "Parking PIN(s)",
        },
        storageNumbers: {
          type: "string",
          title: "Storage Numbers",
        },
        storageDeeded: {
          type: "boolean",
          title: "Deeded Storage",
        },
        storageAssigned: {
          type: "boolean",
          title: "Assigned Storage",
        },
        storageLimitedCommon: {
          type: "boolean",
          title: "Limited Common Storage",
        },
        storagePIN: {
          type: "string",
          title: "Storage PIN(s)",
        },
      },
    },
    section2: {
      title: "",
      type: "object",
      properties: {
        hasRefrigerator: {
          type: "boolean",
          title: "Refrigerator?",
          default: true,
        },
        refrigeratorText: {
          type: "string",
          title: "",
        },
        hasOven: {
          type: "boolean",
          title: "Oven?",
          default: true,
        },
        ovenText: {
          type: "string",
          title: "",
        },
        hasMicrowave: {
          type: "boolean",
          title: "Microwave?",
          default: true,
        },
        microwaveText: {
          type: "string",
          title: "",
        },
        hasDishwasher: {
          type: "boolean",
          title: "Dishwasher?",
          default: true,
        },
        dishwasherText: {
          type: "string",
          title: "",
        },
        hasGarbageDisposal: {
          type: "boolean",
          title: "Garbage Disposal?",
          default: true,
        },
        garbageDisposalText: {
          type: "string",
          title: "",
        },
        hasTrashCompactor: {
          type: "boolean",
          title: "Trash Compactor?",
          default: true,
        },
        trashCompactorText: {
          type: "string",
          title: "",
        },
        hasWasher: {
          type: "boolean",
          title: "Washer?",
          default: true,
        },
        washerText: {
          type: "string",
          title: "",
        },
        hasDryer: {
          type: "boolean",
          title: "Dryer?",
          default: true,
        },
        dryerText: {
          type: "string",
          title: "",
        },
        hasWaterSoftener: {
          type: "boolean",
          title: "Water Softener?",
          default: true,
        },
        waterSoftenerText: {
          type: "string",
          title: "",
        },
        hasSumpPump: {
          type: "boolean",
          title: "Sump pump?",
          default: true,
        },
        sumpPumpText: {
          type: "string",
          title: "",
        },
        hasSmokeDetectors: {
          type: "boolean",
          title: "Smoke and Carbon Monoxide Detectors?",
          default: true,
        },
        smokeDetectorsText: {
          type: "string",
          title: "",
        },
        hasIntercomSystem: {
          type: "boolean",
          title: "Intercom System?",
        },
        intercomSystemText: {
          type: "string",
          title: "",
        },
        hasSecuritySystem: {
          type: "boolean",
          title: "Security System?",
        },
        securitySystemText: {
          type: "string",
          title: "",
        },
        securitySystemRented: {
          type: "boolean",
          title: "Security System Rented?",
        },
        securitySystemOwned: {
          type: "boolean",
          title: "Security Owned?",
        },
        hasSatelliteDish: {
          type: "boolean",
          title: "Satellite Dish?",
        },
        satelliteDishText: {
          type: "string",
          title: "",
        },
        hasTv: {
          type: "boolean",
          title: "Attached TV?",
        },
        tvText: {
          type: "string",
          title: "",
        },
        hasTvAntenna: {
          type: "boolean",
          title: "TV Antenna?",
        },
        tvAntennaText: {
          type: "string",
          title: "",
        },
        hasMultimediaEquipment: {
          type: "boolean",
          title: "Multimedia Equipment?",
        },
        multimediaEquipmentText: {
          type: "string",
          title: "",
        },
        hasStereo: {
          type: "boolean",
          title: "Stereo?",
        },
        stereoText: {
          type: "string",
          title: "",
        },
        hasCentralAirConditioner: {
          type: "boolean",
          title: "Central Air Conditioner?",
        },
        centralAirConditionerText: {
          type: "string",
          title: "",
        },
        hasWindowAirConditioner: {
          type: "boolean",
          title: "Window Air Conditioner?",
        },
        windowAirConditionerText: {
          type: "string",
          title: "",
        },
        hasElectronicAirFilter: {
          type: "boolean",
          title: "Electronic Air Filter?",
        },
        electronicAirFilterText: {
          type: "string",
          title: "",
        },
        hasCentralHumidifier: {
          type: "boolean",
          title: "Central Humidifier?",
        },
        centralHumidifierText: {
          type: "string",
          title: "",
        },
        hasLightingFixtures: {
          type: "boolean",
          title: "Lighting Fixtures?",
          default: true,
        },
        lightningFixturesText: {
          type: "string",
          title: "",
        },
        hasElectronicGarageDoors: {
          type: "boolean",
          title: "Electronic Garage Doors?",
        },
        garageDoorWithText: {
          type: "string",
          title: "Garage Door Remote Units",
        },
        remoteUnitsText: {
          type: "string",
          title: "Garage Doors Description",
        },
        hasTackedDownCarpeting: {
          type: "boolean",
          title: "Tacked Down Carpeting?",
        },
        tackedDownCarpetingText: {
          type: "string",
          title: "",
        },
        hasOtherEquipment: {
          type: "boolean",
          title: "Other Equipment?",
        },
        otherEquipmentText: {
          type: "string",
          maxLength: "30",
          title: "",
        },
        hasFireplaceScreen: {
          type: "boolean",
          title: "Fireplace screen and equipment?",
        },
        fireplaceScreenText: {
          type: "string",
          title: "",
        },
        hasFireplaceGasLog: {
          type: "boolean",
          title: "Fireplace gas log?",
        },
        fireplaceGasLogText: {
          type: "string",
          title: "",
        },
        hasFirewood: {
          type: "boolean",
          title: "Firewood?",
        },
        firewoodText: {
          type: "string",
          title: "",
        },
        hasAttachedGasGrill: {
          type: "boolean",
          title: "Attached gas grill?",
        },
        attachedGasGrillText: {
          type: "string",
          title: "",
        },
        hasExistingStorms: {
          type: "boolean",
          title: "Existing storms and screens?",
        },
        existingStormsText: {
          type: "string",
          title: "",
        },
        hasWindowTreatments: {
          type: "boolean",
          title: "Window treatments?",
        },
        windowTreatmentsText: {
          type: "string",
          title: "",
        },
        hasHomeWarranty: {
          type: "boolean",
          title: "Home warranty?",
        },
        homeWarrantyText: {
          type: "string",
          title: "",
        },
        hasBuiltInShelves: {
          type: "boolean",
          title: "Built-in or attached shelves or cabinets?",
        },
        builtInShelvesText: {
          type: "string",
          title: "",
        },
        hasCeilingFan: {
          type: "boolean",
          title: "Ceiling Fan?",
        },
        ceilingText: {
          type: "string",
          title: "",
        },
        hasRadiatorCovers: {
          type: "boolean",
          title: "Radiator covers?",
        },
        radiatorCoversText: {
          type: "string",
          title: "",
        },
        hasVegetation: {
          type: "boolean",
          title: "All planted vegetation?",
        },
        vegetationText: {
          type: "string",
          title: "",
        },
        hasOutdoorPlayset: {
          type: "boolean",
          title: "Outdoor play set/swings?",
        },
        hasOutdoorShed: {
          type: "boolean",
          title: "Outdoor shed?",
        },
        otherTransfers: {
          type: "string",
          title: "Seller also transfers the following",
        },
        exclusions: {
          type: "string",
          title: "Sellers exclude the items",
        },
      },
    },
    section3: {
      title: "",
      type: "object",
      required: ["purchasePrice"],
      properties: {
        purchasePrice: {
          maximum: 100000000,
          minimum: 1,
          type: "integer",
          title: "Purchase Price",
        },
      },
    },
    section4: {
      title: "",
      type: "object",
      required: [
        "escrowee",
        "initialEarnestAmount",
        "finalEarnestMoneyBusinessDays",
        "initialEarnestForm",
        "notAcceptedDayMonth",
        "finalEarnestMoneyType",
        "finalEarnestMoneyAmount",
        "finalEarnestMoneyBusinessDays",
      ],
      properties: {
        escrowee: {
          title: "Buyer shall deposit escrow with...",
          type: "string",
        },
        initialEarnestAmount: {
          maximum: 100000000,
          minimum: 1,
          title: "Initial earnest amount ($)",
          type: "integer",
        },
        initialEarnestForm: {
          title: "Form of initial earnest money",
          type: "string",
        },
        notAcceptedDayMonth: {
          title: "Earnest money acceptance date",
          type: "string",
          format: "date",
        },
        finalEarnestMoneyType: {
          title: "Final earnest money number type",
          type: "string",
          enum: ["%", "$"],
        },
        finalEarnestMoneyAmount: {
          title: "",
          type: "number",
        },
        finalEarnestMoneyBusinessDays: {
          title:
            "Final earnest due within ___ business days after Attorney Approval",
          type: "number",
        },
      },
    },
    section5: {
      title: "",
      type: "object",
      required: [],
      properties: {
        mortageCommitmentDate: {
          title: "Mortgage Committment Date",
          type: "string",
          format: "date",
        },
        loanAmountType: {
          title: "Loan amount of type",
          type: "string",
          enum: ["% of purchase price", "$ amount"],
        },
        loanAmount: {
          title: "",
          type: "number",
        },
        mortgageInterestRate: {
          title: "Mortgage interest rate",
          type: "number",
        },
        mortgageYear: {
          title: "Mortgage years",
          type: "number",
        },
        loanFeeNotToExceed: {
          title: "Max loan fee (%)",
          type: "number",
        },
        balloonYear: {
          title: "Balloon years",
          type: "number",
        },
      },
    },
    section6: {
      title: "",
      type: "object",
      required: [],
      properties: {
        closingCostType: {
          title: "Loan amount of type",
          type: "string",
          enum: ["% of purchase price", "$ amount"],
        },
        closingCostAmount: {
          title: "",
          type: "number",
        },
      },
    },
    section7: {
      title: "",
      type: "object",
      required: ["closingDate"],
      properties: {
        closingDate: {
          title: "Closing date",
          type: "string",
          format: "date",
        },
      },
    },
    section8: {
      title: "",
      type: "object",
      required: [],
      properties: {
        useOccupancyPayments: {
          title: "Use/occupancy daily payments by seller to buyer ($)",
          type: "number",
        },
      },
    },
    section10: {
      title: "",
      type: "object",
      required: ["propertyTaxYear", "propertyTaxAmount"],
      properties: {
        propertyTaxYear: {
          title: "Property tax year",
          type: "string",
          enum: [
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025",
            "2026",
            "2027",
            "2028",
            "2029",
            "2030",
          ],
        },
        propertyTaxAmount: {
          title: "Property tax amount",
          type: "integer",
        },
        propertyTaxExemptionsHomeowner: {
          title: "Homeowner's Tax Exemption",
          type: "boolean",
        },
        propertyTaxExemptionsSeniorCitizen: {
          title: "Senior Citizen's Tax Exemption",
          type: "boolean",
        },
        propertyTaxExemptionsSeniorFreeze: {
          title: "Senior Freeze Tax Exemption",
          type: "boolean",
        },
        propertyTaxExemptionsHistoricalTaxFreeze: {
          title: "Historical Tax Free Tax Exemption",
          type: "boolean",
        },
        propertyTaxProrated: {
          title: "Property tax proration %",
          type: "number",
        },
      },
    },
    section11: {
      title: "",
      type: "object",
      required: [
        "hoaAssessment",
        "specialAssessmentYes",
        "hoaDocumentsDueDays",
      ],
      properties: {
        hoaAssessment: {
          title: "Homeowner's association assessment ($)",
          type: "number",
        },
        specialAssessmentYes: {
          title: "Special assessment?",
          type: "boolean",
        },
        specialAssessment: {
          title: "Special assessment amount ($)",
          type: "number",
        },
        outstandingAssessment: {
          title: "Outstanding special assessment amount ($)",
          type: "number",
        },
        outstandingAssessmentDue: {
          title: "Special assessment to be assumed by buyer at closing?",
          type: "boolean",
        },
        hoaDocumentsDueDays: {
          title: "HOA docs due within _____ business days",
          type: "integer",
        },
      },
    },
    section12: {
      title: "",
      type: "object",
      required: [],
      properties: {
        disclosureILRealPropertyYes: {
          type: "boolean",
          title: "Illinois Residential Real Property Disclosure Report",
        },
        disclosureHeatYes: {
          type: "boolean",
          title: "Heat Disclosure (gas/electric)",
        },
        disclosureLeadYes: {
          type: "boolean",
          title: "Lead Paint Disclosure and Pamphlet",
        },
        disclosureRadonYes: {
          type: "boolean",
          title: "Radon Disclosure and Pamphlet",
        },
        disclosureMoldYes: {
          type: "boolean",
          title: "Mold Disclosure (if required)",
        },
      },
    },
    section14: {
      title: "",
      type: "object",
      required: ["attorneyApprovalDays"],
      properties: {
        attorneyApprovalDays: {
          type: "integer",
          title:
            "Attorney approval is within ____ business days after the acceptance date",
        },
      },
    },
    section15: {
      title: "",
      type: "object",
      required: ["attorneyApprovalDays"],
      properties: {
        attorneyApprovalDays: {
          type: "integer",
          title:
            "Inspection is within ____ business days after the acceptance date",
        },
      },
    },
    section16: {
      title: "",
      type: "object",
      required: ["offerDate", "acceptanceDate"],
      properties: {
        offerDate: {
          type: "string",
          title: "Offer Date",
          format: "date",
        },
        acceptanceDate: {
          type: "string",
          title: "Acceptance Date",
          format: "date",
        },
        riderNumbers: {
          type: "string",
          title: "Rider numbers",
        },
        addendaNumbers: {
          type: "string",
          title: "Addenda numbers",
        },
        mortgageLender: {
          type: "string",
          title: "Mortgage lender",
          default: "Safe Rate Lending",
        },
        mortgageLenderAddress: {
          type: "string",
          title: "Mortgage lender office address",
          default: "515 N State St, Floor 13",
        },
        mortgageLenderCity: {
          type: "string",
          title: "Mortgage lender city",
          default: "Chicago",
        },
        mortgageLenderState: {
          type: "string",
          title: "Mortgage lender state",
          default: "IL",
        },
        mortgageLenderZipCode: {
          type: "string",
          title: "Mortgage lender zipcode",
          default: "60654",
        },
        mortgageLenderEmail: {
          type: "string",
          title: "Mortgage email",
          default: "team@saferate.com",
        },
      },
    },
  },
};

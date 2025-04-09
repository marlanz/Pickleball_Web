export const colorPalette = {};

export const rolesEnums = {
  NEWCOMER_ROLE: 5,
  PLAYER_ROLE: 1,
  SPONNOR_ROLE: 3,
  PLAYER: "Player",
  SPONNOR: "Sponnor",
};

export const rolesMap = {
  [rolesEnums.PLAYER]: {
    roleId: rolesEnums.PLAYER_ROLE,
  },

  [rolesEnums.SPONNOR_ROLE]: {
    roleId: rolesEnums.SPONNOR_ROLE,
  },
};

export const matchStatus = {
  1: { name: "Scheduled", bgColor: "rgb(16,185,129,0.08)", color: "#0CA270" },
  2: { name: "Ongoing", bgColor: "rgb(245, 158, 11,0.08)", color: "#C27A00" },
  3: { name: "Completed", bgColor: "rgb(153,157,164,0.1)", color: "#727272" },
  4: { name: "Disable" },
};

export const matchFormat = {
  1: "SingleMale",
  2: "SingleFemale",
  3: "DoubleMale",
  4: "DoubleFemale",
  5: "DoubleMix",
};

export const matchCategory = {
  1: "Competitive",
  2: "SingleFemale",
  3: "Custom",
};

export const winScore = {
  1: "Eleven",
  2: "Fifteen",
  3: "Twentyone",
};

export const BASE_URL =
  "https://pickbleballcapston-a4eagpasc9fbeeb8.eastasia-01.azurewebsites.net/api";

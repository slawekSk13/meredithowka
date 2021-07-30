import React from "react";

export const ColorThemeObj = {
  primaryColor: "rgb(238, 238, 238)",
  secondaryColor: "#393e46",
};

export const ColorTheme = React.createContext({
  ...ColorThemeObj,
});

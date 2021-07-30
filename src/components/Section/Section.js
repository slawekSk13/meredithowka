import React from "react";
import { SectionStyled } from "./Section.styles";
import propTypes from "prop-types";
import { ColorTheme } from "../../utilities/ColorTheme";

const Section = ({ backgroundImage }) => {
  return (
    <ColorTheme.Consumer>
      {(colors) => (
        <SectionStyled colors={colors} backgroundImage={backgroundImage} />
      )}
    </ColorTheme.Consumer>
  );
};

export { Section };

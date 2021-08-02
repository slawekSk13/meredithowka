import React from "react";
import { SectionStyled } from "./Section.styles";
import propTypes from "prop-types";
import { ColorTheme } from "../../utilities/ColorTheme";

const Section = ({ backgroundImage, children, id }) => {
  return (
    <ColorTheme.Consumer>
      {(colors) => (
          <SectionStyled id={id} colors={colors} backgroundImage={backgroundImage}>{children} </SectionStyled>
      )}
    </ColorTheme.Consumer>
  );
};

export { Section };

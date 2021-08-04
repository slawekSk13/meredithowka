import React from "react";
import { SectionStyled } from "./Section.styles";
import propTypes from "prop-types";
import { ColorTheme } from "../../utilities/ColorTheme";
import {Element} from 'react-scroll';

const Section = ({ backgroundImage, children, name }) => {
  return (
    <ColorTheme.Consumer>
      {(colors) => (
         <Element name={name}> <SectionStyled colors={colors} backgroundImage={backgroundImage}>{children} </SectionStyled></Element>
      )}
    </ColorTheme.Consumer>
  );
};

export { Section };

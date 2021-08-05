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

Section.propTypes = {
  /** background image path */
  backgroundImage: propTypes.string,
  /** name instead of id, to make section targetable by react-scroll */
  name: propTypes.string,
}

export { Section };

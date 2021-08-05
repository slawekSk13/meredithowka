import React from "react";
import { TitleStyled } from "./Title.styles";
import propTypes from "prop-types";
import { ColorTheme } from "../../utilities/ColorTheme";

const Title = ({ text, size, up, light, thick, big, small }) => {
  return (
    <ColorTheme.Consumer>
      {(colors) => (
        <TitleStyled thick={thick} colors={colors} size={size} up={up} light={light} big={big} small={small}>
          {text}
        </TitleStyled>
      )}
    </ColorTheme.Consumer>
  );
};

Title.propTypes = {
  /** text content of a title */
  text: propTypes.string,
  /** font size increase */
  big: propTypes.bool,
  /** font size decrease */
  small: propTypes.bool,
  /** font weight increase */
  thick: propTypes.bool,
  /** uppercase text */
  up: propTypes.bool,
  /** color theme change for visibility against dark background */
  light: propTypes.bool,
}

export { Title };

import React from "react";
import { TitleStyled } from "./Title.styles";
import propTypes from "prop-types";
import { ColorTheme } from "../../utilities/ColorTheme";

const Title = ({ text, size, up, light, thick }) => {
  return (
    <ColorTheme.Consumer>
      {(colors) => (
        <TitleStyled thick={thick} colors={colors} size={size} up={up} light={light}>
          {text}
        </TitleStyled>
      )}
    </ColorTheme.Consumer>
  );
};

export { Title };

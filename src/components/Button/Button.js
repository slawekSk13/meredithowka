import React from "react";
import { ButtonStyled } from "./Button.styles";
import propTypes from "prop-types";
import { ColorTheme } from "../../utilities/ColorTheme";

const Button = ({text, icon, targetId}) => {
    return (
        <ColorTheme.Consumer>
            {colors => (
                <ButtonStyled as='a' href={`#${targetId}`} colors={colors} ><i className={icon}></i> {text}</ButtonStyled>
            )}
            </ColorTheme.Consumer>
    );
};

        export {Button};
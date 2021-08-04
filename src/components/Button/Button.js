import React from "react";
import { ButtonStyled } from "./Button.styles";
import propTypes from "prop-types";
import { ColorTheme } from "../../utilities/ColorTheme";
import {Link} from 'react-scroll'

const Button = ({text, icon, target}) => {
    return (
        <ColorTheme.Consumer>
            {colors => (
               <Link to={target} smooth={true} duration={500}> <ButtonStyled colors={colors} ><i className={icon}></i> {text}</ButtonStyled></Link>
            )}
            </ColorTheme.Consumer>
    );
};

        export {Button};
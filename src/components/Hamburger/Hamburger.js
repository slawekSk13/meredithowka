import React from 'react';
import {HamburgerStyled} from "./Hamburger.styles";
import {ColorTheme} from "../../utilities/ColorTheme";

const Hamburger = ({onClick}) => {
    return (<ColorTheme.Consumer>
        {colors => (<HamburgerStyled colors={colors}><i className="fas fa-bars" onClick={onClick} /></HamburgerStyled>)}
    </ColorTheme.Consumer>)
}

export {Hamburger}
import React from "react";
import {ButtonStyled} from "./Button.styles";
import {ColorTheme} from "../../utilities/ColorTheme";
import {Link} from 'react-scroll'

const Button = ({text, icon, target, reversed, outsideLink}) => {
    return (
        <ColorTheme.Consumer>
            {colors => (
                outsideLink ? <ButtonStyled as='a' href={target} colors={colors} reversed={reversed}><i
                        className={icon}></i> {text}</ButtonStyled>
                    :
                    <Link to={target} smooth={true} duration={500}> <ButtonStyled colors={colors} reversed={reversed}><i
                        className={icon}></i> {text}</ButtonStyled></Link>
            )}
        </ColorTheme.Consumer>
    );
};

export {Button};
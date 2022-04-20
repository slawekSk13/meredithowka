import React from "react";
import {ButtonStyled} from "./Button.styles";
import {ColorTheme} from "../../utilities/ColorTheme";
import {Link} from 'react-scroll';
import propTypes from "prop-types";

const Button = ({text, icon, target, reversed, outsideLink, onClick}) => {
    return (
        <ColorTheme.Consumer>
            {colors => (
                outsideLink ? <ButtonStyled as='a' href={target} colors={colors} reversed={reversed}>
                        {icon && <i className={icon}/>} {text}</ButtonStyled>
                    : <Link to={target} smooth={true} duration={500}> <ButtonStyled colors={colors} reversed={reversed} onClick={onClick}>
                        {icon && <i className={icon}/>} {text}</ButtonStyled></Link>
            )}
        </ColorTheme.Consumer>
    );
}
;

export {Button};

Button.propTypes = {
    /** text to show on button */
    text: propTypes.string,
    /** true - works as an anchor, with target going into href attribute, false - target is section name */
    outsideLink: propTypes.bool,
    /** true - reversed colors for visibility against light background */
    reversed: propTypes.bool,
    /** FontAwesome class to render icon, false - no icon; FontAwesome font family must be included in HTML */
    icon: propTypes.string,
    /** anchor href or target for react-scroll */
    target: propTypes.string,
}

Button.defaultProps = {
    text: 'Button to click',
    outsideLink: false,
    reversed: false,
    icon: false,
    target: undefined
}
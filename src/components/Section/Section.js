import React from 'react';
import {SectionStyled} from './Section.styles';
import propTypes from 'prop-types';
import {ColorTheme} from "../../utilities/ColorTheme";

const Section = () => {
  return (<ColorTheme.Consumer>
{colors => <SectionStyled colors={colors} />}
    </ColorTheme.Consumer>)
}

export {Section};

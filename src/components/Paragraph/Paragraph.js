import React from 'react';
import propTypes from "prop-types";
import {ParagraphStyled} from "./Paragraph.styles";

const Paragraph = ({text, small}) => <ParagraphStyled small={small}>{text}</ParagraphStyled>;

    Paragraph.propTypes = {
        /** styling - width & font size */
        small: propTypes.bool,
        /** text content */
        text: propTypes.string
    }

export {Paragraph}
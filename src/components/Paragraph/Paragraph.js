import React from 'react';
import {ParagraphStyled} from "./Paragraph.styles";

const Paragraph = ({text, small}) => <ParagraphStyled small={small}>{text}</ParagraphStyled>;

export {Paragraph}
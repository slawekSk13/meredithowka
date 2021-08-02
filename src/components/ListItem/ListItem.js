import React from "react";
import { ListItemStyled } from "./ListItem.styles";
import propTypes from "prop-types";
import { ColorTheme } from "../../utilities/ColorTheme";

const ListItem = ({listContentItem}) => {
    console.log(listContentItem);
    return (<ColorTheme.Consumer>
        {colors => <ListItemStyled colors={colors}>{listContentItem}</ListItemStyled>}
    </ColorTheme.Consumer>)
}

export {ListItem}
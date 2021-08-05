import React from "react";
import { ListItemStyled } from "./ListItem.styles";
import propTypes from "prop-types";
import { ColorTheme } from "../../utilities/ColorTheme";

const ListItem = ({listContentItem}) => {
    return (<ColorTheme.Consumer>
        {colors => <ListItemStyled colors={colors}>{listContentItem}</ListItemStyled>}
    </ColorTheme.Consumer>)
}

ListItem.propTypes = {
    /** content of list item */
    listContent: propTypes.string
}

export {ListItem}
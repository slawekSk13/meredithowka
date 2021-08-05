import React from "react";
import { ListStyled} from "./List.styles";
import propTypes from "prop-types";
import {ListItem} from "../ListItem/ListItem";

const List = ({listContent}) => {
    return (
       <ListStyled>
                {listContent.map((listContentItem, i) => <ListItem key={i} listContentItem={listContentItem}/>)}
            </ListStyled>
    )
}

List.propTypes = {
    /** array of list items content */
    listContent: propTypes.array
}

export {List}
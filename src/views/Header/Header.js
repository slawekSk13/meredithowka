import {Button} from "../../components/Button/Button";
import {HeaderStyled} from "./Header.styles";

const Header = ({mobile, onClick}) => {
    return (<HeaderStyled mobile={mobile} onClick={onClick}>
        <Button target='meredithhouse' text='Meredithówka' reversed  onClick={onClick}/>
        <Button target='inside' text='Wnętrze' reversed  onClick={onClick}/>
        <Button target='price' text='Cennik' reversed  onClick={onClick}/>
        <Button target='gallery' text='Zdjęcia' reversed  onClick={onClick}/>
        <Button target='cont' text='Kontakt' reversed  onClick={onClick}/>
    </HeaderStyled>);
}

export {Header}
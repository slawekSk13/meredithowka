import {Button} from "../../components/Button/Button";
import {HeaderStyled} from "./Header.styles";

const Header = ({mobile, onClick}) => {
    return (<HeaderStyled mobile={mobile} onClick={onClick}>
        <Button target='meredithhouse' text='Meredithówka' reversed/>
        <Button target='inside' text='Wnętrze' reversed/>
        <Button target='price' text='Cennik' reversed/>
        <Button target='gallery' text='Zdjęcia' reversed/>
        <Button target='cont' text='Kontakt' reversed/>
    </HeaderStyled>);
}

export {Header}
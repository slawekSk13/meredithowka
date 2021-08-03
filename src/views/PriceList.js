import {Section} from "../components/Section/Section";
import {Title} from "../components/Title/Title";
import {Button} from "../components/Button/Button";
import {List} from "../components/List/List";
import {Paragraph} from "../components/Paragraph/Paragraph";

const PriceList = () => {
    return (
        <>
            <Section
                backgroundImage={`${process.env.PUBLIC_URL}/images/web037.jpg`}
            >
                <Title text={'Czas jest cenniejszy od pieniędzy'} light thick/>
                <Title text={'możesz mieć więcej pieniędzy, ale nie możesz mieć więcej czasu'} small light/>
                <Title text={'- Jim Rohn'} small light/>
                <Button icon={'fas fa-coins'} text={'Cennik'} targetId={'cennik'}/>
            </Section>
            <Section id={'cennik'}>
                <Title text={'Koszt wynajmu domu (doba):'} thick/>
                <List listContent={['2 os. - 450 zł', '3 os. - 600 zł', '4 os. - 750 zł', '5 os. - 900 zł', '6 os. - 1000 zł', 'Od 7 osób do negocjacji', 'Dzieci do 5 lat bezpłatnie', 'Dzieci 5-10 lat - 100 zł']}/>

                <Paragraph text={'Doba zaczyna się o 14:00, a kończy o 11:00'} small/>
                <Paragraph text={'Prosimy o przedpłatę w wysokości 20% wartości całego pobytu przesłać na konto: PeKaO SA 18 1240 1037 1111 0010 9422 3991'} small/>
                <Paragraph text={'Na miejscu istnieje możliwość płatności kartą. Wystawiamy faktury.'} small/>

            </Section>
        </>
    )
}

export {PriceList}
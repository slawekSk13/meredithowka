import {Section} from "../components/Section/Section";
import {Title} from "../components/Title/Title";
import {Button} from "../components/Button/Button";
import {List} from "../components/List/List";

const Inside = () => {
    return (
        <>
            <Section
                backgroundImage={`${process.env.PUBLIC_URL}/images/duze/web039.jpg`}
            >
                <Title text={'Wnętrze'} big light thick/>
                <Title text={'jest zawsze większe od tego, co na zewnątrz'} light/>
                <Title text={'- C.S.Lewis'} light/>
                <Button icon={'fas fa-coffee'} text={'Wejdź'} targetId={'wyposazenie'}/>
            </Section>
            <Section id={'wyposazenie'}>
                <Title text={'Dom składa się z dwóch pięter:'} thick/>
                <Title text={'Parter:'} small/>
                <List listContent={['Kuchnia w pełni wyposażone w sprzęty kuchenne', 'Salon z kominkiem', 'Łazienka z prysznicem', 'Pokój z łózkiem podwójnym i pojedynczym']}/>
                <Title text={'Pierwsze piętro:'} small/>
                <List listContent={['Pokój z łózkiem podwójnym i pojedynczym', 'Pokój otwarty z łózkiem podwójnym i pojedynczym']}/>
            </Section>
        </>
    )
}

export {Inside}
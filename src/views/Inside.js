import {Section} from "../components/Section/Section";
import {Title} from "../components/Title/Title";
import {Button} from "../components/Button/Button";
import {List} from "../components/List/List";

const Inside = () => {
    return (
        <>
            <Section name='inside'
                backgroundImage={`${process.env.PUBLIC_URL}/images/duze/web039.jpg`}
            >

                <Title text={'Wnętrze jest zawsze większe od tego, co na zewnątrz'} light thick/>
                <Title text={'- C.S.Lewis'} small light/>
                <Button icon={'fas fa-coffee'} text={'Wejdź'} target={'wyposazenie'}/>
            </Section>
            <Section name={'wyposazenie'}>
                <Title text={'Dom jest dwupiętrowy i składa się z:'} thick/>
                <Title text={'Parter:'} />
                <List listContent={['Kuchnia w pełni wyposażone w sprzęty kuchenne', 'Salon z kominkiem', 'Łazienka z prysznicem', 'Pokój z łózkiem podwójnym i pojedynczym']}/>
                <Title text={'Pierwsze piętro:'} />
                <List listContent={['Pokój z łózkiem podwójnym i pojedynczym', 'Pokój otwarty z łózkiem podwójnym i pojedynczym']}/>
            </Section>
        </>
    )
}

export {Inside}
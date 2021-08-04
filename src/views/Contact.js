import {Section} from "../components/Section/Section";
import {Title} from "../components/Title/Title";
import {Button} from "../components/Button/Button";
import {Paragraph} from "../components/Paragraph/Paragraph";

const Contact = () => {
    return (
        <>
            <Section
                backgroundImage={`${process.env.PUBLIC_URL}/images/web040.jpg`}
            >
                <Title text={'To może być początek pięknej przyjaźni'} light thick/>
                <Title text={'- Rick Blaine'} small light/>
                <Button icon={'fas fa-mobile-alt'} text={'Porozmawiajmy'} target={'contact'}/>
            </Section>
            <Section name={'contact'}>
                <Title text={'Serdecznie zapraszamy do kontaktu z nami'} small thick/>
                <Title text={'Chętnie odpowiemy na wszelkie dodatkowe pytania:'} small/>
                <Button icon={'fas fa-mobile-alt'} text={'00 48 605 613 530'} target={'tel:+48605613530'} reversed outsideLink/>
                <Button icon={'fab fa-instagram'} text={'aga_meredith_design'} target={'https://www.instagram.com/p/CHuT4yin2r_/'} reversed outsideLink/>
                <Button icon={'fas fa-envelope'} text={'agnieszka@meredithhouse.eu'} target={'mailto:agnieszka@meredithhouse.eu'} reversed outsideLink/>
            </Section>
        </>
    )
}

export {Contact}
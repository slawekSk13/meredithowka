import {Section} from "../components/Section/Section";
import {Title} from "../components/Title/Title";
import {Button} from "../components/Button/Button";
import {googleMap} from '../utilities/secret';

const Contact = () => {
    return (
        <>
            <Section name='cont'
                backgroundImage={`${process.env.PUBLIC_URL}/images/web040.jpg`}
            ><div className='flex-title'>
                <Title text={'To może być początek pięknej przyjaźni'} light thick/>
                <Title text={'- Rick Blaine'} small light/>
            </div>
                {/*<Button icon={'fas fa-mobile-alt'} text={'Porozmawiajmy'} target={'contact'}/>*/}
            </Section>
            <Section name={'contact'}>
                <div style={{maxWidth: '100%', textAlign: 'center'}}>
                <Title text={'Serdecznie zapraszamy do kontaktu z nami'} small thick/>
                <Title text={'Chętnie odpowiemy na wszelkie dodatkowe pytania:'} small/>
                <Button icon={'fas fa-mobile-alt'} text={'00 48 605 613 530 - Agnieszka Meredith'} target={'tel:+48605613530'} reversed outsideLink/>
                <Button icon={'fab fa-instagram'} text={'aga_meredith_design'} target={'https://www.instagram.com/p/CHuT4yin2r_/'} reversed outsideLink/>
                <Button icon={'fas fa-envelope'} text={'meredithowka@gmail.com'} target={'mailto:meredithowka@gmail.com'} reversed outsideLink/>
                </div>
                <iframe title='Google Map' width="100%" height="600" frameBorder="0"
                        src={googleMap}
                        allowFullScreen />
            </Section>
        </>
    )
}

export {Contact}
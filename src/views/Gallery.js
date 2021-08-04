import {Section} from "../components/Section/Section";
import {Title} from "../components/Title/Title";
import {Button} from "../components/Button/Button";

const Gallery = () => {
    return (
        <>
            <Section
                backgroundImage={`${process.env.PUBLIC_URL}/images/web016.jpg`}
            >
                <Title text={'Nie ufam słowom, ufam zdjęciom'} light thick/>
                <Title text={'- Gilles Peress'} small light/>
                <Button icon={'fas fa-images'} text={'Zajrzyj do nas'} target={'zdjecia'}/>
            </Section>
        </>
    )
}

export {Gallery}
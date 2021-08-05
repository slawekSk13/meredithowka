import {Section} from "../components/Section/Section";
import {Title} from "../components/Title/Title";
import {Button} from "../components/Button/Button";
import {PhotoGallery} from "../components/PhotoGallery/PhotoGallery";

const Gallery = () => {
    return (
        <>
            <Section name='gallery'
                backgroundImage={`${process.env.PUBLIC_URL}/images/web016.jpg`}
            >
                <Title text={'Nie ufam słowom, ufam zdjęciom'} light thick/>
                <Title text={'- Gilles Peress'} small light/>
                <Button icon={'fas fa-images'} text={'Zajrzyj do nas'} target={'zdjecia'}/>
            </Section>
            <Section name={'zdjecia'}>
                <PhotoGallery
                    photos={[`001`, `004`, `006`, `007`, `010`, `011`, `012`, `013`, `016`, `017`, `018`, `019`, `025`, `028`, `033`, `057`, `043`, `045`, `059`, `047`]}/>
            </Section>
        </>
    )
}

export {Gallery}
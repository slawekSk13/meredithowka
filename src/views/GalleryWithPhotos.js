import {Section} from "../components/Section/Section";
import {Title} from "../components/Title/Title";
import {Button} from "../components/Button/Button";
import {PhotoGallery} from "../components/PhotoGallery/PhotoGallery";

const GalleryWithPhotos = () => {
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
                <PhotoGallery />
            </Section>
        </>
    )
}

export {GalleryWithPhotos}
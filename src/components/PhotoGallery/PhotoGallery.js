import {PhotoGalleryStyled} from "./PhotoGallery.styles";
import {Photo} from "../Photo/Photo";

const PhotoGallery = ({photos}) => <PhotoGalleryStyled>
    {photos.map(photo => <Photo key={photo} src={`${process.env.PUBLIC_URL}/images/web${photo}.jpg`} />)}
</PhotoGalleryStyled>

export {PhotoGallery}
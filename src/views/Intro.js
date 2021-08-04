import {Title} from "../components/Title/Title";
import {Button} from "../components/Button/Button";
import {Section} from "../components/Section/Section";

const Intro = () => <Section
    backgroundImage={`${process.env.PUBLIC_URL}/images/web035.jpg`}
>
    <Title text={'MEREDITHÓWKA'} big up light thick/>
    <Title text={'NIEZNANE PODHALE'} up light/>
    <Button icon={'fas fa-home'} text={'Zapraszamy!'} target={'meredithowka'}/>
</Section>

export {Intro}
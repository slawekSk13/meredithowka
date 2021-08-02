import logo from './logo.svg';
import './App.css';
import {Section} from './components/Section/Section'
import {Title} from "./components/Title/Title";
import {Button} from "./components/Button/Button";

function App() {
    return (
        <>
            <Section
                backgroundImage={"https://meredithhouse.eu/test/images/web035.jpg"}
            >
                <Title text={'MEREDITHÓWKA'} size={"big"} up light thick/>
                <Title text={'NIEZNANE PODHALE'} size={"mid"} up light/>
            <Button icon={'fas fa-home'} text={'Zapraszamy!'} targetId={'jakieśID'} />
            </Section>
            <Section id={'jakieśID'}>

            </Section>
        </>
    );
}

export default App;

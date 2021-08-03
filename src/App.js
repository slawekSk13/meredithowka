import './App.css';
import {Intro} from "./views/Intro";
import {Meredithowka} from "./views/Meredithowka";
import {Inside} from "./views/Inside";
import {PriceList} from "./views/PriceList";
import {Gallery} from "./views/Gallery";

function App() {
    return (
        <>
            <Intro/>
            <Meredithowka/>
            <Inside/>
            <PriceList/>
            <Gallery/>
        </>
    );
}

export default App;

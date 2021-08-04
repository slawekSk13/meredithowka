import './App.css';
import {Intro} from "./views/Intro";
import {Inside} from "./views/Inside";
import {PriceList} from "./views/PriceList";
import {Gallery} from "./views/Gallery";
import {Contact} from "./views/Contact";

function App() {
    return (
        <>
            <Intro/>
            <Inside/>
            <PriceList/>
            <Gallery/>
            <Contact/>
        </>
    );
}

export default App;

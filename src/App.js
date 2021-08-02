import './App.css';
import {Section} from './components/Section/Section'
import {Title} from "./components/Title/Title";
import {Button} from "./components/Button/Button";
import {Paragraph} from "./components/Paragraph/Paragraph";
import {List} from "./components/List/List";

function App() {
    return (
        <>
            <Section
                backgroundImage={`${process.env.PUBLIC_URL}/images/web035.jpg`}
            >
                <Title text={'MEREDITHÓWKA'} size={"big"} up light thick/>
                <Title text={'NIEZNANE PODHALE'} size={"mid"} up light/>
                <Button icon={'fas fa-home'} text={'Zapraszamy!'} targetId={'meredithowka'}/>
            </Section>
            <Section id={'meredithowka'}>
                <Title text={'Meredithówka to ponad stuletni, góralski dom'} size={'mid'} thick/>
                <Paragraph
                    text={'Wieś Dzianisz, należąca do gminy Kościelisko wciąż jest miejscem nieodkrytym. Kiedy tu\n' +
                    '                    przyjechaliśmy w 2006 roku nikt nie wierzył, że można tu prowadzić agroturystykę, bo… przecież tu\n' +
                    '                    nic nie ma… Tak mówili mieszkańcy wsi. My jednak myśleliśmy zupełnie odwrotnie. Prawdopodobnie\n' +
                    '                    dlatego, że jesteśmy wychowani w mieście. Nas tu wszystko zachwyca: poranki, dnie i noce, pory roku,\n' +
                    '                    przyroda. I wszystko to ma jedną, bardzo ważną, wspólną cechę – spokój.'}/>
                <Paragraph
                    text={'Rytm dnia wyznaczają pory dnia i pory roku, deszcz i słońce. Choć większość naszych gości to ludzie\n' +
                    '                    bardzo aktywnie spędzający czas, głównie cieszący się wędrówkami górskimi, korzystający z uroków\n' +
                    '                    podhalańskiej wsi, to doceniają też możliwość zanurzenia się w ciszy i czasem nie wyściubiania nosa\n' +
                    '                    z domu.'}/>
                <Paragraph
                    text={'Staraliśmy się, aby dom pozostał integralną częścią otoczenia, należał do ziemi, na której powstał w\n' +
                    '                    1906 roku. Ściany z bali pamiętają kolejnych właścicieli i niezmienne zachwycają swoim pięknem\n' +
                    '                    tworząc wyjątkowy klimat domu.'}/>
                <Paragraph
                    text={'Chętnie służymy pomocą naszym gościom w języku polskim oraz angielskim. Staramy się, aby każdy poczuł\n' +
                    '                    się tu jak u siebie. Dlatego cały dom wyposażony jest we wszelkie niezbędne sprzęty.'}/>
            </Section>
            <Section
                backgroundImage={`${process.env.PUBLIC_URL}/images/duze/web039.jpg`}
            >
                <Title text={'Wnętrze'} size={"big"} light thick/>
                <Title text={'jest zawsze większe od tego, co na zewnątrz'} size={"mid"} light/>
                <Title text={'- C.S.Lewis'} size={"mid"} light/>
                <Button icon={'fas fa-coffee'} text={'Zajrzyj do środka'} targetId={'wyposazenie'}/>
            </Section>
            <Section id={'wyposazenie'}>
                <Title text={'Dom składa się z dwóch pięter:'} size={'mid'} thick/>
                <Title text={'Parter:'} size={'small'}/>
                <List listContent={['Kuchnia w pełni wyposażone w sprzęty kuchenne', 'Salon z kominkiem', 'Łazienka z prysznicem', 'Pokój z łózkiem podwójnym i pojedynczym']}/>
                <Title text={'Pierwsze piętro:'} size={'small'}/>
                <List listContent={['Pokój z łózkiem podwójnym i pojedynczym', 'Pokój otwarty z łózkiem podwójnym i pojedynczym']}/>
            </Section>
            <Section
                backgroundImage={`${process.env.PUBLIC_URL}/images/web037.jpg`}
            >
                <Title text={'Czas jest cenniejszy od pieniędzy'} size={"mid"} light thick/>
                <Title text={'możesz mieć więcej pieniędzy, ale nie możesz mieć więcej czasu'} size={"small"} light/>
                <Title text={'- Jim Rohn'} size={"small"} light/>
                <Button icon={'fas fa-coins'} text={'Cennik'} targetId={'cennik'}/>
            </Section>
            <Section id={'cennik'}>
                <Title text={'Koszt wynajmu domu (doba):'} size={'mid'} thick/>
                <List listContent={['2 os. - 450 zł', '3 os. - 600 zł', '4 os. - 750 zł', '5 os. - 900 zł', '6 os. - 1000 zł', 'Od 7 osób do negocjacji', 'Dzieci do 5 lat bezpłatnie', 'Dzieci 5-10 lat - 100 zł']}/>
                <div style={{width: '60%', marginTop: '1rem', transform: 'scale(0.8)'}}>
                <Paragraph text={'Doba zaczyna się o 14:00, a kończy o 11:00'}/>
                <Paragraph text={'Prosimy o przedpłatę w wysokości 20% wartości całego pobytu przesłać na konto:\n' +
                'PeKaO SA 18 1240 1037 1111 0010 9422 3991'}/>
                <Paragraph text={'Na miejscu istnieje możliwość płatności kartą. Wystawiamy faktury.'}/>
                </div>
            </Section>
            <Section
                backgroundImage={`${process.env.PUBLIC_URL}/images/web016.jpg`}
            >
                <Title text={'Nie ufam słowom, ufam zdjęciom'} size={"mid"} light thick/>
                <Title text={'- Gilles Peress'} size={"small"} light/>
                <Button icon={'fas fa-images'} text={'Zobacz, jak u nas jest'} targetId={'zdjecia'}/>
            </Section>
        </>
    );
}

export default App;

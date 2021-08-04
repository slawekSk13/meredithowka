import {Title} from "../components/Title/Title";
import {Button} from "../components/Button/Button";
import {Section} from "../components/Section/Section";
import {Paragraph} from "../components/Paragraph/Paragraph";

const Intro = () => <><Section
    backgroundImage={`${process.env.PUBLIC_URL}/images/web035.jpg`}
>
    <Title text={'MEREDITHÓWKA'} big up light thick/>
    <Title text={'NIEZNANE PODHALE'} up light/>
    <Button icon={'fas fa-home'} text={'Zapraszamy!'} target={'meredithowka'}/>
</Section>
<Section name={'meredithowka'}>
    <Title text={'Meredithówka to ponad stuletni, góralski dom'} thick/>
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
</>
export {Intro}
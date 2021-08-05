import {Title} from "../components/Title/Title";
import {Button} from "../components/Button/Button";
import {Section} from "../components/Section/Section";
import {Paragraph} from "../components/Paragraph/Paragraph";

const Intro = () => <><Section name='meredithhouse'
                               backgroundImage={`${process.env.PUBLIC_URL}/images/web035.jpg`}
>
    <Title text={'MEREDITHÓWKA'} big up light thick/>
    <Title text={'NIEZNANE PODHALE'} up light/>
    <Button icon={'fas fa-home'} text={'Zapraszamy!'} target={'meredithowka'}/>
</Section>
    <Section name={'meredithowka'}>
        <Title text={'Meredithówka to ponad stuletni, góralski dom...'} thick/>
        <Paragraph small
            text={'Wieś Dzianisz, należąca do gminy Kościelisko wciąż jest miejscem nieodkrytym. Kiedy tu przyjechaliśmy w 2006 roku nikt nie wierzył, że można tu prowadzić agroturystykę, bo… przecież tu nic nie ma… Tak mówili mieszkańcy wsi. My jednak myśleliśmy zupełnie odwrotnie. Prawdopodobnie dlatego, że jesteśmy wychowani w mieście. Nas tu wszystko zachwyca: poranki, dnie i noce, przyroda. I wszystko to ma jedną, wspólną cechę – spokój.'}/>
        <Paragraph small
            text={'Rytm dnia wyznaczają pory roku, deszcz i słońce. Choć większość naszych gości to ludzie bardzo aktywnie spędzający czas, głównie cieszący się wędrówkami górskimi, korzystający z uroków podhalańskiej wsi, to doceniają też możliwość zanurzenia się w ciszy i czasem nie wyściubiania nosa z domu.'}/>
        <Paragraph small
            text={'Staraliśmy się, aby dom pozostał integralną częścią otoczenia, należał do ziemi, na której powstał w 1906 roku. Ściany z bali pamiętają kolejnych właścicieli i niezmienne zachwycają swoim pięknem tworząc wyjątkowy klimat domu.'}/>
        <Paragraph small
            text={'Zależy nam na tym, aby każdy poczuł się w Meredithówce jak w domu. Dlatego cały dom wyposażony jest we wszelkie niezbędne sprzęty.'}/>
    </Section>
</>
export {Intro}
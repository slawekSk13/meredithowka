import {Section} from '../components/Section/Section';
import {Title} from '../components/Title/Title';
import {Button} from '../components/Button/Button';
import {List} from '../components/List/List';
import {Paragraph} from '../components/Paragraph/Paragraph';

const PriceList = () => {
  return (
    <>
      <Section name='price' backgroundImage={`${process.env.PUBLIC_URL}/images/web037.jpg`}>
        <div className='flex-title'>
          <Title
            text={'Czas jest cenniejszy od pieniędzy. Możesz mieć więcej pieniędzy, ale nie możesz mieć więcej czasu'}
            light
            thick
          />
          <Title text={'- Jim Rohn'} small light />
        </div>
        {/*<Button icon={'fas fa-coins'} text={'Cennik'} target={'cennik'}/>*/}
      </Section>
      <Section name={'cennik'}>
        <Title text={'Koszt wynajmu domu (doba):'} thick />
        <List
          listContent={[
            '2 os. - 700 zł',
            '3 os. - 900 zł',
            '4 os. - 1050 zł',
            '5 os. - 1200 zł',
            '6 os. - 1500 zł',
            'Od 7 osób do negocjacji',
            'Dzieci do 3 lat bezpłatnie',
            'Dzieci 3-10 lat - 200 zł'
          ]}
        />

        <Paragraph text={'Doba zaczyna się o 14:00, a kończy o 11:00'} small />
        <Paragraph
          text={
            'Prosimy o przedpłatę w wysokości 20% wartości całego pobytu przesłać na konto:\n' +
            'PeKaO SA 18 1240 1037 1111 0010 9422 3991'
          }
          small
        />
        <Paragraph text={'Wystawiamy faktury.'} small />
      </Section>
    </>
  );
};

export {PriceList};

import {Section} from '../components/Section/Section';
import {Title} from '../components/Title/Title';
import {List} from '../components/List/List';

const Inside = () => {
  return (
    <>
      <Section name='inside' backgroundImage={`${process.env.PUBLIC_URL}/images/duze/web039.jpg`}>
        <div className='flex-title'>
          <Title text={'Wnętrze jest zawsze większe od tego, co na zewnątrz'} light thick />
          <Title text={'- C.S.Lewis'} small light />
        </div>
      </Section>
      <Section name={'wyposazenie'}>
        <Title text={'Dom jest dwupiętrowy i składa się z:'} thick />
        <Title text={'Parter:'} />
        <List
          listContent={[
            'Kuchnia w pełni wyposażona w sprzęty kuchenne',
            'Salon z kominkiem',
            'Łazienka z prysznicem',
            'Pokój z łóżkiem podwójnym i pojedynczym'
          ]}
        />
        <Title text={'Pierwsze piętro:'} />
        <List
          listContent={['Pokój z łóżkiem podwójnym i pojedynczym', 'Pokój otwarty z łóżkiem podwójnym i pojedynczym']}
        />
      </Section>
    </>
  );
};

export {Inside};

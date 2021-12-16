import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card';
import { SubjectCard } from './SubjectCard';
import { SymptomCard } from './SymptomCard';
import { useState } from 'react';
import { ExpatSampleData, sampleSubjectList, smapleSymptomData } from './sample.data';
import { ExpatCard } from './ExpatCard';
import { DoctorCard } from './DoctorCard';
import { IDoctor } from '@src/store/DoctorCardState';

export default {
  title: `components/Card`,
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>컨텐츠 영역</>,
  active: false,
};

export const SubjectCardLayer = () => {
  const [activeId, setActiveId] = useState('');

  const onClickHandler = (id: string) => {
    setActiveId(id);
  };

  return (
    <>
      {sampleSubjectList.map((item) => (
        <SubjectCard
          key={item.id}
          id={item.id}
          text={item.text}
          image={item.image}
          active={activeId === item.id}
          onClick={onClickHandler}
        />
      ))}
    </>
  );
};

export const SymptomCardLayer = () => {
  const [activeId, setActiveId] = useState('');

  const onClickHandler = (id: string) => {
    setActiveId(id);
  };

  return (
    <>
      {smapleSymptomData.map((item) => (
        <SymptomCard
          key={item.id}
          id={item.id}
          type={item.tag}
          text={item.symptom}
          image={item.image}
          active={item.id === activeId}
          onClick={onClickHandler}
        />
      ))}
    </>
  );
};

export const ExpatCardLayer = () => {
  const [activeId, setActiveId] = useState('');

  const onClickHandler = (id: string) => {
    setActiveId(id);
  };

  return (
    <>
      {ExpatSampleData.map((item) => (
        <div style={{ padding: '5px' }} key={item.id}>
          <ExpatCard
            type={item.type}
            id={item.id}
            active={activeId === item.id}
            onClick={onClickHandler}
          />
        </div>
      ))}
    </>
  );
};

export const DoctorCardLayer = (args: IDoctor) => {
  return <DoctorCard {...args} />;
};

import styled from '@emotion/styled';
import { SubjectCard, useCard } from '@src/components/cards';
import { SwipSlider } from '@src/components/swipSlider';
import { ISubject, SubjectQueryParam, SubjectState } from '@src/store/SubjectState';
import { useLoadable } from '../tester/useLoadable';

export function MainReservationSubject() {
  const { result, isLoading } = useLoadable<ISubject[]>(SubjectQueryParam, SubjectState, false);
  const { activeId, onActiveId } = useCard('single');

  const onClickHandler = (id: string) => {
    onActiveId(id);
  };

  const items = result
    ? result.map((item: ISubject) => (
        <Cardwrapper key={item.id}>
          <SubjectCard
            key={item.id}
            id={item.id}
            text={item.symptom}
            image={item.image}
            active={activeId === item.id}
            onClick={onClickHandler}
          />
        </Cardwrapper>
      ))
    : [...Array(2)].map((val, idx) => <Cardwrapper key={idx}>loading...</Cardwrapper>);

  return (
    <MainReservationSubjectStyled>
      <SwipSlider items={items} slidesPerView={2} centeredSlides={false} />
    </MainReservationSubjectStyled>
  );
}

const MainReservationSubjectStyled = styled.div``;

const Cardwrapper = styled.div``;

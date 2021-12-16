import styled from '@emotion/styled';
import { CARD_TAGS, SymptomCard, useCard } from '@src/components/cards';
import { SwipSlider } from '@src/components/swipSlider';
import { ISymptomImage, SymptomImageQueryParam, SymptomImageState } from '@src/store/SymptomState';
import { useLoadable } from '@src/features/tester/useLoadable';

export function MainReservationSymptom() {
  const { result, isLoading } = useLoadable<ISymptomImage[]>(
    SymptomImageQueryParam,
    SymptomImageState,
    false,
  );

  const { activeId, onActiveId } = useCard('single');

  const onClickHandler = (id: string) => {
    onActiveId(id);
  };

  const items = result
    ? result.map((item: ISymptomImage) => (
        <Cardwrapper key={item.id}>
          <SymptomCard
            id={item.id}
            type={item.tag}
            text={item.symptom}
            image={item.image}
            active={item.id === activeId}
            onClick={onClickHandler}
          />
        </Cardwrapper>
      ))
    : [...Array(2)].map((val, idx) => <Cardwrapper key={idx}>loading ...</Cardwrapper>);

  return (
    <MainReservationSymptomStyled>
      {items && <SwipSlider items={items} slidesPerView={2} centeredSlides={false} />}
    </MainReservationSymptomStyled>
  );
}

const MainReservationSymptomStyled = styled.div`
  width: 100%;
  /* height: 200px; */
`;

const Cardwrapper = styled.div``;

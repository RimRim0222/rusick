import styled from '@emotion/styled';
import {
  MainBanner,
  MainReservationSubject,
  MainReservationSymptom,
  MainTutorial,
} from '@src/features/main';
import { MainSubTitle } from '@src/features/main/MainSubTitle';

export function MainPage() {
  return (
    <MainPageStyled>
      {/* image banner area */}
      <MainBanner />
      {/* reservation card area */}
      <MainSubTitle type="DISEASE" />
      <MainReservationSymptom />

      <MainSubTitle type="SUBJECT" />
      <MainReservationSubject />
      {/* app tutorial area */}
      <MainTutorial />
    </MainPageStyled>
  );
}

const MainPageStyled = styled.div``;

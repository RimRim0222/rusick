import styled from '@emotion/styled';
import { Button, BUTTON_THEME } from '@src/components/button';
import { usePatientSocket } from '@src/features/remoteCall/usePatientSocket';
import { RouteList } from '@src/routes/RouteList';
import { useNavigate } from 'react-router';
import { useReservation } from '../useReservation';

export function ShowInfoButton() {
  const { contents } = useReservation();
  const { createRequest } = usePatientSocket();
  const navigate = useNavigate();

  const onClickReserve = () => {
    createRequest(contents.doctorValue);
    navigate(RouteList.UNTACT_RESERVATION_COMPLETE);
  };

  return (
    <ShowInfoButtonStyled>
      <RepeatBtnWrapper>
        <Button
          label="다시하기"
          theme={BUTTON_THEME.OUTLINE}
          onClick={() => console.log('click')}
        />
      </RepeatBtnWrapper>
      <CompleteBtnWrapper>
        <Button
          label="비대면 진료예약 (3/3)"
          theme={BUTTON_THEME.DEFAULT}
          onClick={onClickReserve}
        />
      </CompleteBtnWrapper>
    </ShowInfoButtonStyled>
  );
}

const ShowInfoButtonStyled = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;
const RepeatBtnWrapper = styled.div``;
const CompleteBtnWrapper = styled.div``;

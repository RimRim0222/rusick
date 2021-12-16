import styled from '@emotion/styled';
import { AddTitle } from '@src/features/healthInfo';
import { HistoryCardsForm } from '@src/features/healthInfo';
import { HistorySymptomResult } from '@src/store/HealthInfoState';

export function AddMedicalHistoryPage() {
  return (
    <AddMedicalHistoryPageStyled>
      <AddTitle
        title={'과거력'}
        desc={
          '과거에 앓았던 질병이나 상해의 종류 또는 유전, 선천성 질환의 유무와 관련된 의학적 정보입니다.'
        }
      />
      <HistoryCardsForm query={HistorySymptomResult} url={'가족력페이지로 이동'} page={2} />
    </AddMedicalHistoryPageStyled>
  );
}

const AddMedicalHistoryPageStyled = styled.div``;
const ContentsWrapper = styled.div``;
const ButtonWrapper = styled.div``;

import styled from '@emotion/styled';
import { AddTitle } from '@src/features/healthInfo';
import { HistoryCardsForm } from '@src/features/healthInfo';
import { FamilySymptomResult } from '@src/store/HealthInfoState';
export function AddFamilyHistoryPage() {
  return (
    <AddFamilyHistoryStyled>
      <AddTitle
        title={'가족력'}
        desc={
          '유전성이나 가족집적성이 있는 질환의 진단이나 감염 경로를 파악하기 위한 중요한 의학적 정보입니다.'
        }
      />
      <HistoryCardsForm url={'사회력 페이지로 이동'} query={FamilySymptomResult} page={3} />
    </AddFamilyHistoryStyled>
  );
}

const AddFamilyHistoryStyled = styled.div``;

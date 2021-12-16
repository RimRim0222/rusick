import styled from '@emotion/styled';
import { HealthInfoList } from '@src/features/healthInfo/AddHealthInfo/HealthInfoList';
import { AddTitle } from '@src/features/healthInfo';

export function AddHealthInfoPage() {
  return (
    <AddHealthInfoPageStyled>
      <AddTitle
        title={'건강정보 관리'}
        desc={'본인 또는 가족의 건강정보를 등록하고 정기적으로 관리해보세요.'}
      />
      <HealthInfoList />
    </AddHealthInfoPageStyled>
  );
}

const AddHealthInfoPageStyled = styled.div``;

import styled from '@emotion/styled';
import { HospitalInfoHead } from '@src/features/untact/hospitalInfo/HospitalInfoHead';

export function HospitalInfoPage() {
  return (
    <HospitalInfoPageStyled>
      <HospitalInfoHead />
      {/* <HospitalInfoTabs />
      <HospitalInfoIntro />
      <HospitalInfoEquipment /> */}
    </HospitalInfoPageStyled>
  );
}

const HospitalInfoPageStyled = styled.div``;

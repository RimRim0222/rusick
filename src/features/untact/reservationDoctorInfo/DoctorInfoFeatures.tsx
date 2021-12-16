import styled from '@emotion/styled';
import { Button } from '@src/components/button';
import { DoctorInfoCareer, DoctorInfoIntro } from '.';
import { useReservation } from '../useReservation';

export function DoctorInfoFeatures({ onClickReserve }: { onClickReserve: () => void }) {
  const { contents, onSave } = useReservation();

  const doctorId = contents.doctorValue;

  return (
    <DoctorInfoFeaturesStyled>
      <DoctorInfoIntro />
      <DoctorInfoCareer />
      <PushHospitalInfo>병원 상세정보 보기</PushHospitalInfo>
      <DoctorInfoReserveBtnStyled>
        <Button label="예약하기" onClick={onClickReserve} />
      </DoctorInfoReserveBtnStyled>
    </DoctorInfoFeaturesStyled>
  );
}

const DoctorInfoFeaturesStyled = styled.div``;
const PushHospitalInfo = styled.div``;
const DoctorInfoReserveBtnStyled = styled.div``;

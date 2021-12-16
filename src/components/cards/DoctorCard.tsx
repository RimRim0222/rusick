import styled from '@emotion/styled';
import { Card } from './Card';
import { IDoctor } from '@src/store/DoctorCardState';

export function DoctorCard({
  name,
  hospital,
  location,
  like,
  reserv,
  tag,
  active,
  onClick,
}: IDoctor) {
  return (
    <Card active={active} onClick={onClick}>
      <DoctorCardStyled>
        <DoctorName>{name}</DoctorName>
        <HospitalInfo>{hospital + '/' + location + 'km'}</HospitalInfo>
        <ReserveState>{reserv}</ReserveState>
        <LikeCount>{'like count:' + like}</LikeCount>
        <SubjectTag>{tag}</SubjectTag>
      </DoctorCardStyled>
    </Card>
  );
}

const DoctorCardStyled = styled.div``;

const DoctorName = styled.div``;
const HospitalInfo = styled.div``;
const ReserveState = styled.div``;
const SubjectTag = styled.div``;
const LikeCount = styled.div``;

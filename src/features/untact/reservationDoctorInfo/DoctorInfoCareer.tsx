import styled from '@emotion/styled';
import { DoctorCareerItem } from './DoctorCareerItem';

export function DoctorInfoCareer() {
  return (
    <DoctorInfoCareerStyled>
      {datas.map((data) => (
        <DoctorCareerItem key={data.id} data={data} />
      ))}
    </DoctorInfoCareerStyled>
  );
}

const DoctorInfoCareerStyled = styled.div`
  padding: 10px;
  background-color: #f4f4f4;
`;

const datas = [
  {
    id: 'career',
    label: '학력 및 경력',
    contents: ['xxxx.xx, 전문의 자격 취득', 'xxxx.xx A병원 원장'],
  },
  {
    id: 'introduce',
    label: '의사소개 및 진료과목 소개',
    contents: ['언제나 내 가족에게 처럼, 따뜻한 미소가 있는 비대면 주치의 홍길동 입니다.'],
  },
  {
    id: 'non_benefit',
    label: '비급여 진료 정보',
    contents: ['-여드름약 처방전 진료비 10.000원/1개월', '20,000원/2개월'],
  },
];

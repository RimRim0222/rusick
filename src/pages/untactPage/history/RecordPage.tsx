import styled from '@emotion/styled';
import { cssx } from '@src/theme/';
import { RecordTitle1 } from '@src/features/untact/history/RecordTitle1';
import { RecordDesc } from '@src/features/untact/history/RecordDesc';
import { RecordCard } from '@src/features/untact/history/RecordCard';
import { RecordSelect } from '@src/features/untact/history/RecordSelect';

const result = [
  {
    id: 'card1',
    tag: '진료 완료',
    year: 2021,
    month: 10,
    day: 12,
    person: '홍길동',
    hospital: '부민병원',
    doctor: '정명의',
    cases: '비대면 화상진료',
  },
  {
    id: 'card2',
    tag: '약조제 완료',
    year: 2021,
    month: 3,
    day: 13,
    person: '호날두',
    hospital: '부민병원',
    doctor: '메시',
    cases: '음성으로만 진료',
  },
];

export function RecordPage() {
  return (
    <RecordStyled>
      <RecordTitle1 title="비대면진료기록" />

      <RecordTop>
        <RecordDesc desc="총 3개의 진료기록이 존재합니다." />
        <RecordSelect />
      </RecordTop>

      <RecordCardWrap>
        {result.map((item) => (
          <RecordCard
            key={item.id}
            item={item}
            // tag={item.tag}
            // year={item.year}
            // month={item.month}
            // day={item.day}
            // person={item.person}
            // hospital={item.hospital}
            // doctor={item.doctor}
            // cases={item.case}
          />
        ))}
      </RecordCardWrap>
    </RecordStyled>
  );
}

const RecordStyled = styled.div``;
const RecordTop = styled.div`
  ${cssx.flexBtw}
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
`;
const RecordCardWrap = styled.div``;

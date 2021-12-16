import styled from '@emotion/styled';
import { cssx } from '@src/theme';

interface ISubject {
  item: {
    id: string;
    tag: string | null;
    year: number;
    month: number;
    day: number;
    person: string;
    hospital: string;
    doctor: string;
    cases: string;
  };
}

export function RecordCard({ item }: ISubject) {
  return (
    <RecordCardStyled>
      {item.tag && <RecordTag>{item.tag}</RecordTag>}

      <ul>
        <li>
          <div className="label">진료일</div>
          <div className="value">
            : {item.year}년 {item.month}월 {item.day}일
          </div>
        </li>
        <li>
          <div className="label">예약자명</div>
          <div className="value">: {item.person}</div>
        </li>
        <li>
          <div className="label">병원명</div>
          <div className="value">: {item.hospital}</div>
        </li>
        <li>
          <div className="label">
            <strong>진료의</strong>
          </div>
          <div className="value">
            : <strong>{item.doctor}</strong>의사
          </div>
        </li>
        <li>
          <div className="label">진료유형</div>
          <div className="value">: {item.cases}</div>
        </li>
      </ul>
    </RecordCardStyled>
  );
}

const RecordCardStyled = styled.div`
  position: relative;
  padding: 10px 20px;
  border: 1px solid;
  ul {
    li {
      ${cssx.flexStart}
      .label {
        width: 100px;
      }
    }
  }
  & + div {
    margin-top: 20px;
  }
`;
const RecordTag = styled.div`
  border: 1px solid green;
  color: green;
  position: absolute;
  right: 20px;
  top: 10px;
  padding: 5px 10px;
`;

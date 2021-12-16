import styled from '@emotion/styled';
import { cssx } from '@src/theme/';
import { CheckReserveTitle } from './CheckReserveTitle';

export function DefaultInfo() {
  return (
    <DefaultInfoWrapper>
      <CheckReserveTitle label={'기본정보'} />
      <ul>
        <li>
          <div className="left">주민번호</div>
          <div className="right">: 123456-1******</div>
        </li>
        <li>
          <div className="left">병원명</div>
          <div className="right">: 부민병원</div>
        </li>
        <li>
          <div className="left">진료의</div>
          <div className="right">: 정명의 의사</div>
        </li>
        <li>
          <div className="left">예약일</div>
          <div className="right">: 2021년 10월12일</div>
        </li>
        <li>
          <div className="left">진료유형</div>
          <div className="right">: 비대면 화상진료 / 음성으로만 진료</div>
        </li>
      </ul>
    </DefaultInfoWrapper>
  );
}

const DefaultInfoWrapper = styled.div`
  li {
    ${cssx.flexStart}
    border-bottom: 1px solid #9a9a9a;
    .left {
      flex: none;
      width: 100px;
    }
  }
`;

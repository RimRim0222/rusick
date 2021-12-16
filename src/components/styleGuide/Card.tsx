import { css } from '@emotion/react';
import styled from '@emotion/styled';
import icon from './images/icon.svg';

export function Card() {
  return (
    <>
      <CardStyled>
        <div className="date">진료일 : 21. 04. 16 오후 2:05</div>
        <div className="doctor">
          <span className="name">진료의: 김철수</span>
          <span className="assign">(부민병원/정형외과)</span>
        </div>
        <div className="comment">
          <div>진료유형 : 즉시진료</div>
          <div>진료상태 : 비대면진료 완료</div>
          <div>주증상/질환 : 두통</div>
        </div>
        {/* <div className="buttons">
        <button>약 배송 취소</button>
        <button>결제 내역</button>
        <button>처방전 보내기</button>
      </div> */}
      </CardStyled>
      <CardStyled>
        <div className="date">진료일 : 21. 04. 16 오후 2:05</div>
        <div className="doctor">
          <span className="name">진료의: 김철수</span>
          <span className="assign">(부민병원/정형외과)</span>
        </div>
        <div className="comment">
          <div>진료유형 : 즉시진료</div>
          <div>진료상태 : 비대면진료 완료</div>
          <div>주증상/질환 : 두통</div>
        </div>
        {/* <div className="buttons">
        <button>약 배송 취소</button>
        <button>결제 내역</button>
        <button>처방전 보내기</button>
      </div> */}
      </CardStyled>
    </>
  );
}

const CardStyled = styled.div`
  padding: 19.81px 19.75px;
  border: 1px solid #d8d8d8;
  border-radius: 7px;
  opacity: 1;
  /* display: inline-block; */
  ${(props) => {
    const fonts = props.theme.fonts;
    return css`
      .date {
        ${fonts.bd3_R}
        color: #939393;
        padding-bottom: 10px;
      }
      .doctor {
        padding-bottom: 8px;
        .name {
          ${fonts.h3_B}
        }
        .assign {
          ${fonts.bd2_R}
        }
      }
      .comment {
        ${fonts.bd3_R}
      }
      /* .buttons {
        button {
          ${fonts.p1_L}
          padding: 8px 4px 8px 14.5px;
          height: 32px;
          border-radius: 7px;
          border: 0;
          text-align: center;
          background-color: #f7f7f7;
          ::after {
            content: '';
            background: url(${icon}) no-repeat 0 0px / contain;
            width: 16px;
            height: 16px;
            float: right;
            padding-left: 2px;
          }
          :first-of-type {
            margin-right: 8px;
          }
          :nth-of-type(2) {
            margin-right: 4.5px;
          }
          :last-of-type {
          }
        }
      } */
    `;
  }}
`;

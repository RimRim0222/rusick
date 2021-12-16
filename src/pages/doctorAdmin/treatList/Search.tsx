import styled from '@emotion/styled';
import { css } from '@emotion/react';

export function Search() {
  return (
    <>
      <div>오늘의 진료현황</div>
      <DoctorChoiceTabStyled>
        <TabTextStyle className="normal" active={true}>
          대기(3)
        </TabTextStyle>
        <TabTextStyle className="like" active={false}>
          당일완료(15)
        </TabTextStyle>
      </DoctorChoiceTabStyled>
      <div>검색 영역</div>
      <div>
        <span>검색어</span>
        <input placeholder={'환자명, 전화번호로 검색해 주세요.'} />
      </div>
      <div>
        <span>진료상태</span>
        <select>
          <option>대기</option>
          <option>진료중</option>
          <option>진료완료</option>
        </select>
      </div>
      <div>
        <span>진료방법</span>
        <select>
          <option>옵션1</option>
          <option>옵션2</option>
        </select>
      </div>
      <div>
        <input type="button" value="검색" />
      </div>
    </>
  );
}

const DoctorChoiceTabStyled = styled.div`
  width: 100%;
`;

const TabTextStyle = styled.span<{ active: boolean }>`
  display: inline-block;
  width: 50%;
  line-height: 50px;
  text-align: center;
  box-sizing: border-box;

  ${({ active, theme }) => {
    const border_color = theme.colors.border_stroke;
    return css`
      &.normal {
        border-right: 1px solid ${border_color};
      }
      &.like {
        border-left: 1px solid ${border_color};
      }
      ${active ? activeStyle(theme.colors) : defaultStyle(theme.colors)}
    `;
  }}
`;

const defaultStyle = (colors: any) => css`
  border-top: 0;
  border-bottom: 2px solid ${colors.border_stroke};
  background-color: ${colors.gray_scale_5};
`;

const activeStyle = (colors: any) => css`
  border-top: 2px solid ${colors.border_stroke};
  border-bottom: 0;
  background-color: ${colors.gray_scale_6};
`;

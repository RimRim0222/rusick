import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from '@src/components/button';
import { Icon } from '@src/components/icon';
import { useComplete } from './useComplete';

export function CompletePage() {
  const object = useComplete();

  return (
    <CompletePageWrapper>
      {/* 상단 이미지 영역 */}
      <IconWrapper>
        <Icon icon={object.icon} width="120px" />
      </IconWrapper>

      {/* bolder title 영역 */}
      <TitleWrapper>{object.title}</TitleWrapper>
      <SubContentWrapper>
        {/* type => strong : 파란색 텍스트(sub title), normal : 검정색 텍스트 */}
        {object.description.map((des, idx) => {
          if (des.type === 'strong') {
            return <ContentWrapper key={idx}>{des.text}</ContentWrapper>;
          }
          if (des.type === 'normal') {
            return <div key={idx}>{des.text}</div>;
          }
          return null;
        })}
      </SubContentWrapper>

      {/* 버튼 배열 */}
      <RepeatSendBtnWrapper btnCount={object.buttons.length}>
        {object.buttons.map((btn, idx) => (
          <Button key={idx} label={btn.btnLabel} onClick={btn.onComplete} theme={btn.theme} />
        ))}
      </RepeatSendBtnWrapper>
    </CompletePageWrapper>
  );
}

const CompletePageWrapper = styled.div`
  margin-top: 90px;
  text-align: center;
`;
const TitleWrapper = styled.div`
  margin-top: 30px;
  ${(props) => props.theme.fonts.h0_B};
`;
const IconWrapper = styled.div``;
const ContentWrapper = styled.div`
  margin-top: 28px;
  ${(props) => props.theme.fonts.bd2_R};
  color: #4ac6ff;
`;
const SubContentWrapper = styled.div`
  margin-top: 28px;
  ${(props) => props.theme.fonts.bd2_R};
  color: #939393;
  > div {
    /* margin-top: 25px; */
  }
`;

interface IStyle {
  btnCount: number;
}
const RepeatSendBtnWrapper = styled.div<IStyle>`
  ${({ btnCount }) => {
    if (btnCount > 1)
      return css`
        button + button {
          margin-top: 10px;
        }
      `;
  }};
  margin-top: 80px;
  button {
    width: 100%;
  }
`;

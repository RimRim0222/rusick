import styled from '@emotion/styled';
import { LNG_KEY } from '@src/i18n';
import { useTranslation } from 'react-i18next';

export function EmailUpdateText() {
  const { t } = useTranslation();
  const head = LNG_KEY.EMAIL_UPDATE_TITLE;
  const message = [LNG_KEY.EMAIL_UPDATE_CHANCE_LIMIT, LNG_KEY.EMAIL_UPDATE_REQUEST_EXACT_ADDRESS];

  return (
    <EmailUpdateTextWrapper>
      <HeadStyled>{t(head)}</HeadStyled>
      <MessageStyled>
        {message.map((msg, index) => (
          <span key={index}>{t(msg)}</span>
        ))}
      </MessageStyled>
    </EmailUpdateTextWrapper>
  );
}

const EmailUpdateTextWrapper = styled.div``;
const HeadStyled = styled.h1`
  padding-top: 47px;
  ${(props) => props.theme.fonts.h1_B}
`;
const MessageStyled = styled.p`
  margin-top: 15px;
  ${(props) => props.theme.fonts.bd2_R}
  color: #606060;
`;
const QuestionStyled = styled.div``;

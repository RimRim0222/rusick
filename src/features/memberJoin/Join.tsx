import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { JoinForm } from './JoinForm';
import text from './text';

export function Join() {
  const { t } = useTranslation();
  return (
    <JoinStyled>
      <JoinMainTitle>{t(text.joinMainTitle)}</JoinMainTitle>
      <JoinSubTitle>
        {text.joinSubTitle.map((str) => (
          <div key={str}>{t(str)}</div>
        ))}
      </JoinSubTitle>
      <JoinForm />
    </JoinStyled>
  );
}

const JoinStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: skyblue;
`;

const JoinMainTitle = styled.div`
  padding-top: 47px;
  ${(props) => props.theme.fonts.h1_B}
`;

const JoinSubTitle = styled.div`
  margin-top: 15px;
  ${(props) => props.theme.fonts.bd2_R}
  color: #606060;
`;

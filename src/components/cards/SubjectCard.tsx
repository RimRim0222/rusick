import styled from '@emotion/styled';
import { Icon, ICON_LIST } from '../icon';
import { Card } from './Card';
import { cssx } from '@src/theme/';
import { ISubjectCard } from './types';

export function SubjectCard({ id, active, image, text, onClick }: ISubjectCard) {
  const onClickHandler = () => {
    onClick(id);
  };

  return (
    <Card active={active} onClick={onClickHandler}>
      <IconWrap>
        <Icon icon={ICON_LIST[image]} width="60px" />
        <SubjectCardStyled>{text}</SubjectCardStyled>
      </IconWrap>
    </Card>
  );
}

const IconWrap = styled.div`
  text-align: center;
`;
const SubjectCardStyled = styled.div`
  ${cssx.flexCenter}
  height: 40px;
  margin: 7px 0 10px;
  ${(props) => props.theme.fonts.bd1_R}
`;

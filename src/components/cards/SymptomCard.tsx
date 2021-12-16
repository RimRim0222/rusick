import styled from '@emotion/styled';
import { Icon, ICON_LIST } from '@src/components/icon';
import { ISymptomCard } from './types';
import { Card } from './Card';
import { SymptomTag } from './SymptomTag';

export function SymptomCard({ id, type, text, image, active, onClick }: ISymptomCard) {
  const onClickHandler = () => {
    onClick(id);
  };

  return (
    <Card active={active} onClick={onClickHandler}>
      <SymptomTag type={type} />

      <SymptomCardStyled>{text}</SymptomCardStyled>
      <IconWrap>
        <Icon icon={ICON_LIST[image]} width="82px" />
      </IconWrap>
    </Card>
  );
}

const SymptomCardStyled = styled.div`
  height: 44px;
  margin: 5px 0 3px;
  ${(props) => props.theme.fonts.h3_1_B}
`;

const IconWrap = styled.div`
  text-align: right;
`;

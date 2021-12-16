import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Icon, ICON_LIST } from '@src/components/icon';
import { cssx } from '@src/theme/';
import { Card } from './Card';
import { IExpatCard, NATION_TYPE } from './types';

export function ExpatCard({ type, id, active, onClick }: IExpatCard) {
  const onClickHandler = () => {
    onClick(id);
  };

  const label = type === NATION_TYPE.LOCAL ? '내국인 회원 본인인증' : '재외국민 회원 본인인증';

  const desc =
    type === NATION_TYPE.LOCAL
      ? '국내에 거주하고 있는 국민'
      : '해외에 장기 체류/거주하고 있는 국민';

  const icons = type === NATION_TYPE.LOCAL ? ICON_LIST.id_01 : ICON_LIST.id_02;

  return (
    <Card active={active} onClick={onClickHandler}>
      <ExpatCardStyled>
        <Icon icon={icons} width="45px" />
        <dl>
          <dt>{label}</dt>
          <dd>{desc}</dd>
        </dl>
      </ExpatCardStyled>
    </Card>
  );
}

ExpatCard.defaultProps = {
  active: false,
};

const ExpatCardStyled = styled.div`
  box-sizing: border-box;
  padding: 3px 5px 20px 0;
  ${cssx.flexStart} dl {
    padding-left: 25px;
  }
  dt {
    ${(props) => props.theme.fonts.h4_B}
  }
  dd {
    margin-top: 3px;
    color: #999999;
    ${(props) => props.theme.fonts.bd3_R}
  }
`;

import styled from '@emotion/styled';
import { cssx } from '@src/theme/';
import { Icon } from '@src/components/icon';
import { useMyInfo } from './useMyInfo';
import { myInfoText } from './myInfoText';

export function SubMenu() {
  const { t, subMenuItemProps, subMenuIcon } = useMyInfo();

  return (
    <SubMenuStyled>
      <Title>{t(myInfoText.untactClinic)}</Title>

      <ClinicHistory>
        {subMenuItemProps.map((propsObj, idx) => {
          const { title, onClick } = propsObj;

          return (
            <ItemWrapper key={idx} onClick={onClick}>
              <ItemTitle>{t(title)}</ItemTitle>
              <Icon icon={subMenuIcon} width={'29px'} />
            </ItemWrapper>
          );
        })}
      </ClinicHistory>
      <MembershipWithdrawal>
        <ItemWrapper>
          <ItemTitle>{t(myInfoText.withdrawal)}</ItemTitle>
          <Icon icon={subMenuIcon} width={'29px'} />
        </ItemWrapper>
      </MembershipWithdrawal>
    </SubMenuStyled>
  );
}

const SubMenuStyled = styled.div`
  margin-top: 25px;
`;
const Title = styled.div`
  ${(props) => props.theme.fonts.h2_B}
`;
const ClinicHistory = styled.div`
  padding: 9px 0;
  border-bottom: 1px solid #cacacb;
  ${(props) => props.theme.fonts.bd2_R}
`;
const ItemWrapper = styled.div`
  ${cssx.flexBtw}
  height: 45px;
`;
const ItemTitle = styled.div``;
const MembershipWithdrawal = styled.div`
  padding: 9px 0;
  ${(props) => props.theme.fonts.bd2_R}
`;

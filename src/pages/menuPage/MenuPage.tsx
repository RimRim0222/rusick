import styled from '@emotion/styled';
import { UntactClinc, ServiceCenter, Settings } from '@src/features/menu';

export function MenuPage() {
  return (
    <MenuPageStyled>
      <UntactClinc />
      <ServiceCenter />
      <Settings />
    </MenuPageStyled>
  );
}

const MenuPageStyled = styled.div``;

import styled from '@emotion/styled';
import { useMemo } from 'react';
import { Tos, Location, Marketing, Privacy, PrivacyAgree, Eft } from './infoItem';
import { ITermsInfoLayer, TERMS_ITEM_TYPE } from './types';

// { type }: ITermsInfoLayer
export function TermsInfoLayer({ type, onClose }: ITermsInfoLayer) {
  const contents = useMemo(() => {
    switch (type) {
      case TERMS_ITEM_TYPE.TOS:
        return <Tos />;
      case TERMS_ITEM_TYPE.PRIVACY:
        return <Privacy />;
      case TERMS_ITEM_TYPE.PRIVACYAGREE:
        return <PrivacyAgree />;
      case TERMS_ITEM_TYPE.LOCATION:
        return <Location />;
      case TERMS_ITEM_TYPE.EFT:
        return <Eft />;
      case TERMS_ITEM_TYPE.MARKETING:
        return <Marketing />;
      default:
        return null;
    }
  }, [type]);

  if (!type) return null;

  return (
    <TermsInfoLayerStyled>
      <InfoHeaderWrapper>
        header
        <span onClick={onClose} />
      </InfoHeaderWrapper>
      {contents}
    </TermsInfoLayerStyled>
  );
}

const TermsInfoLayerStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  overflow-y: auto;
  background-color: #fff;
`;

const InfoHeaderWrapper = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  span::before {
    content: 'X';
    float: right;
  }
`;

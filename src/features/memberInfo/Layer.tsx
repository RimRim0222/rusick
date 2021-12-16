import { useState } from 'react';
import styled from '@emotion/styled';
import { Icon, ICON_LIST } from '@src/components/icon';
// import { IMemberAddressLayer } from './types';

interface IMemberAddressLayer {
  headerTitle: string;
  type: string;
  onClose: (type: string) => void;
  children: JSX.Element | JSX.Element[];
}

export function Layer({ headerTitle, type, onClose, children }: IMemberAddressLayer) {
  const handleClick = () => onClose(type);
  return (
    <LayerWrapper>
      <LayerHeaderWrapper>
        <LayerHeaderLeftWrapper></LayerHeaderLeftWrapper>
        <LayerHeaderCenterWrapper>{headerTitle}</LayerHeaderCenterWrapper>
        <LayerHeaderRightWrapper onClick={() => handleClick()}>
          <Icon icon={ICON_LIST['x_34x34']} width={'24px'} />
        </LayerHeaderRightWrapper>
      </LayerHeaderWrapper>
      {children}
    </LayerWrapper>
  );
}

const LayerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  overflow-y: auto;
  background-color: #fff;
`;

const LayerHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(50px, auto));
  align-content: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  > div {
    margin: auto 0px;
  }
`;

const LayerHeaderLeftWrapper = styled.div`
  text-align: left;
`;
const LayerHeaderCenterWrapper = styled.div`
  text-align: center;
`;
const LayerHeaderRightWrapper = styled.div`
  text-align: right;
`;

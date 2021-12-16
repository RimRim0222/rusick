import styled from '@emotion/styled';
import { Icon, ICON_LIST } from '@src/components/icon';
import { RouteList } from '@src/routes/RouteList';
import { HeaderParams } from '@src/store/HeaderState';
import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useHeaderState } from './useHeaderState';
import { useTranslation } from 'react-i18next';
import { HeaderStep } from '.';
import { usePatientSocket } from '@src/features/remoteCall/usePatientSocket';
export function Header() {
  // 왼쪽 아이템
  // 오른쪽 아이템
  const { t } = useTranslation();

  //webRTC patient-socket load
  // usePatientSocket();

  const setHeaderState = useSetRecoilState(HeaderParams);

  const { currentHeader } = useHeaderState();

  const { key, prevPath, nextPath, title, onPrev, onClose, usePrev, useClose } = currentHeader;

  const location = useLocation();
  const navigate = useNavigate();

  const handleSetHeaderState = useCallback(() => {
    setHeaderState((prevState) => {
      return { ...prevState, key: location.pathname as RouteList };
    });
  }, [location]);

  useEffect(() => {
    handleSetHeaderState();
  }, [location]);

  const handlePrevClick = () => {
    if (typeof onPrev === 'function') {
      onPrev();
    }
    if (Object.values(RouteList).includes(prevPath as RouteList)) {
      navigate(prevPath as RouteList);
    }
    if (Object.values(HeaderStep).includes(prevPath as HeaderStep)) {
      setHeaderState((prevState) => {
        return { ...prevState, step: prevPath as HeaderStep };
      });
    }
  };

  const handleCloseClick = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
    if (prevPath) {
      navigate(prevPath);
    }
  };

  return (
    <HeaderStyled>
      <PrefixWrapper>
        {usePrev && (
          <span onClick={handlePrevClick}>
            <Icon icon={ICON_LIST['arrow_back_01']} width={'30px'} />
          </span>
        )}
      </PrefixWrapper>
      <TitleStyled>{t(title)}</TitleStyled>
      <SurffixWrapper>
        {useClose && (
          <span onClick={handleCloseClick}>
            <Icon icon={ICON_LIST['x_60x60']} width={'30px'} />
          </span>
        )}
      </SurffixWrapper>
    </HeaderStyled>
  );
}

Header.defaultProps = {
  label: 'header Name',
  hasPrev: true,
  hasClose: true,
};

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  height: 50px;
  padding: 0px 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border_stroke};
  ${(props) => props.theme.fonts.h2_1_B};
`;

const PrefixWrapper = styled.div`
  margin: auto 0px;
`;
const SurffixWrapper = styled.div`
  margin: auto 0px;
`;
const TitleStyled = styled.div`
  margin: auto;
`;

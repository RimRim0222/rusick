import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { Button, BUTTON_DISPLAY_TYPE, BUTTON_SIZE, BUTTON_THEME } from '@src/components/button';
import { TermsInfoLayer } from './TermsInfoLayer';
import { TermsSubTitle } from './TermsSubTitle';
import { TermsProps } from './types';
import { useTerms } from './useTerms';
import { MasterCheckbox } from '@src/components/checkbox';
import text from './text';

export function Terms({ onClickAgree }: TermsProps) {
  const { t } = useTranslation();
  const { checkItems, buttonDisabled, infoTarget, isLoading, isError, onButtonCtrl, onInfoCtrl } =
    useTerms();

  const onChecked = (val: string[]) => {
    onButtonCtrl(val);
  };

  const onClickHandler = useCallback(() => {
    onClickAgree();
  }, []);

  const onShowTermsInfo = (item: string) => {
    onInfoCtrl(item);
  };

  const onCloseInfo = () => {
    onInfoCtrl('');
  };

  return (
    <>
      <TermsInfoLayer type={infoTarget} onClose={onCloseInfo} />
      <TermsStyled>
        <TermsSubTitle text={t(text.title)} />
        <CheckWrap>
          {checkItems && (
            <MasterCheckbox
              options={checkItems}
              allCheckLabel={t(text.allCheck)}
              onCheckIds={onChecked}
              onClickItem={onShowTermsInfo}
            />
          )}
        </CheckWrap>
      </TermsStyled>
      <Button
        theme={BUTTON_THEME.DEFAULT}
        size={BUTTON_SIZE.MEDIUM}
        displayType={BUTTON_DISPLAY_TYPE.FULL}
        label={t(text.button)}
        onClick={onClickHandler}
        disabled={buttonDisabled}
      />
    </>
  );
}

const TermsStyled = styled.div``;

const CheckWrap = styled.div`
  margin: 20px 0;
  > div {
    > label {
      > span {
        ${(props) => props.theme.fonts.h4_B}
        color: #606060;
      }
    }
  }
`;

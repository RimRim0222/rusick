import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { LNG_KEY } from '@src/i18n';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import { DoctorParams } from '@src/store/DoctorCardState';

export function DoctorChoiceTab() {
  const { t } = useTranslation();
  const [doctorParam, setDoctorParam] = useRecoilState(DoctorParams);

  const onClickHandler = (val: string): void => {
    setDoctorParam((currVal) => {
      return { ...currVal, tab: val };
    });
    console.log('탭 변경, api 조회');
  };

  return (
    <>
      <DoctorChoiceTabStyled>
        <TabTextStyle
          className="normal"
          active={doctorParam.tab === 'normal'}
          onClick={() => onClickHandler('normal')}
        >
          {/* 진료 가능한 의사 */}
          {t(LNG_KEY.UNTACT_SEARCH_SYMPTOM_TAB_01)}
        </TabTextStyle>
        <TabTextStyle
          className="like"
          active={doctorParam.tab === 'like'}
          onClick={() => onClickHandler('like')}
        >
          {/* 찜한 의사 */}
          {t(LNG_KEY.UNTACT_SEARCH_SYMPTOM_TAB_02)}
        </TabTextStyle>
      </DoctorChoiceTabStyled>
    </>
  );
}

const DoctorChoiceTabStyled = styled.div`
  width: 100%;
`;

interface ITextStyle {
  active: boolean;
}

const TabTextStyle = styled.span<ITextStyle>`
  display: inline-block;
  width: 50%;
  line-height: 50px;
  text-align: center;
  box-sizing: border-box;

  ${({ active, theme }) => {
    const border_color = theme.colors.border_stroke;
    return css`
      &.normal {
        border-right: 1px solid ${border_color};
      }
      &.like {
        border-left: 1px solid ${border_color};
      }
      ${active ? activeStyle(theme.colors) : defaultStyle(theme.colors)}
    `;
  }}
`;

const defaultStyle = (colors: any) => css`
  border-top: 0;
  border-bottom: 2px solid ${colors.border_stroke};
  background-color: ${colors.gray_scale_5};
`;

const activeStyle = (colors: any) => css`
  border-top: 2px solid ${colors.border_stroke};
  border-bottom: 0;
  background-color: ${colors.gray_scale_6};
`;

import { css, SerializedStyles, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { IFormItem, FORM_LAYOUT_THEME } from './types';
import { useTranslation } from 'react-i18next';
import { cssx } from '@src/theme/';

export function FormItem<T>({
  formTheme,
  border,
  label,
  isError,
  showMessage,
  isRequired,
  isRequiredDisplay,
  isMessageDisplay,
  children,
}: IFormItem<T>) {
  const { t } = useTranslation();

  // success 인지 체크하는 방식이 필요해서 추가
  const isSuccess = showMessage && !isError;
  const { colors } = useTheme();

  // 컬러를 같은 방식으로 두군데서 추출해서 미리 정의해서 주입하도록 수정
  const checkedColor = isError
    ? colors.point_red
    : isSuccess
    ? colors.maincolor_blue
    : colors.gray_scale_4;

  // required를 표시하기 위한 스타일이 추가 필요

  // label에 따른 레이아웃 구성
  const gridLayout = !label
    ? 'layoutDefalut'
    : label && formTheme === FORM_LAYOUT_THEME.LABEL_HORIZONTAL
    ? 'layoutHorizontal'
    : 'layoutVertical';

  const borderStyle = border ? `1px solid ${colors.gray_scale_4}` : `none`;

  //라벨 체크 하기
  // 수평 수직 레이아웃 두개 만들기

  return (
    <FormItemWrapper>
      {/** layoutHorizontal, layoutVertical 마크업 동일  */}
      <FormItemStyled gridLayout={gridLayout} borderStyle={borderStyle}>
        {label && (
          <LabelWrapper>
            <LabelStyeld>
              {label && t(label)}
              {isRequired && isRequiredDisplay && <span style={{ color: 'red' }}> *</span>}
            </LabelStyeld>
          </LabelWrapper>
        )}
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </FormItemStyled>
      {/* 메시지는 있으면 항상 에러 또는 성공임, 필수사항과는 별개임  */}
      {isMessageDisplay && (
        <FormMsgStyeld isError={!!isError}>{showMessage && t(showMessage)}</FormMsgStyeld>
      )}
    </FormItemWrapper>
  );
}

FormItem.defaultProps = {
  formTheme: FORM_LAYOUT_THEME.LABEL_HORIZONTAL,
  border: true,
  isRequired: true,
  isRequiredDisplay: true,
  isMessageDisplay: true,
  isError: false,
};

interface IFormStyled {
  color: string;
  lineStyle?: SerializedStyles;
  inputStyle?: SerializedStyles;
}

const FormItemWrapper = styled.div`
  position: relative;
`;

const FormItemStyled = styled.div<{ gridLayout: string; borderStyle: string }>`
  display: flex;
  min-height: 50px;
  border-bottom: ${(props) => props.borderStyle};
  ${(props) => {
    switch (props.gridLayout) {
      case 'layoutHorizontal':
        return css`
          flex-direction: row;
        `;
      default:
        return css`
          flex-direction: column;
        `;
    }
  }};
`;

const LabelWrapper = styled.div`
  ${cssx.flexStart}
`;
const LabelStyeld = styled.label`
  flex: none;
  width: 80px;
  color: ${(props) => props.theme.colors.text_title};
  font-size: 14px;
  letter-spacing: 0px;
  place-self: center start;
  ${(props) => props.theme.fonts.bd2_B}
`;

const ChildrenWrapper = styled.div`
  ${cssx.flexStart}
  flex: 1;
  > * {
    display: inline-flex;
    flex: none;
    & + * {
      margin-left: 10px;
    }
  }
`;

const FormMsgStyeld = styled.div<{ isError: boolean }>`
  ${cssx.flexStart}
  height: 37px;
  ${(props) => props.theme.fonts.p1_R}
  color: ${(props) =>
    props.isError ? props.theme.colors.point_red : props.theme.colors.maincolor_blue};
`;

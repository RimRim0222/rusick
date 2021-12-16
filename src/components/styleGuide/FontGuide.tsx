import { useTheme, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { fontGuideData } from './fontGuide.data';
import { IFont, Themes } from '@src/theme';

interface PropTypes {
  type: IFont;
}

export function FontGuide({ type }: PropTypes) {
  const theme = useTheme();
  const fontStyles = theme.fonts[type];

  return (
    <FontGuideStyled fontStyles={fontStyles}>
      <FontTitleStyled>
        <span>{type}</span>
        <span>({fontGuideData[type]['text']})</span>
      </FontTitleStyled>
      <div className="font-sample">
        내 손안의 똑똑한 의사 어디아파!내 손안의 똑똑한 의사 어디아파!내 손안의 똑똑한 의사
        어디아파!내 손안의 똑똑한 의사 어디아파!내 손안의 똑똑한 의사 어디아파!내 손안의 똑똑한 의사
      </div>
    </FontGuideStyled>
  );
}

// test styled
const FontStyled = styled.div((props) => ({
  fontFamily: '',
  fontcolor: props.theme.colors.textColor,
}));

const FontGuideStyled = styled.div<{ fontStyles: SerializedStyles }>`
  box-sizing: border-box;
  padding-top: 10px;
  .font-sample {
    ${(props) => props.fontStyles}
    border: 1px solid #2b2929;
  }
`;

const FontTitleStyled = styled.div`
  span {
    border: 0;
    :first-of-type {
      display: inline-block;
      width: 70px;
      font-weight: bold;
    }
  }
`;

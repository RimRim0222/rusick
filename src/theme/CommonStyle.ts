import { css } from '@emotion/react';
import { fonts } from '@src/theme/Font';

export const cssx = {
  flexBtw: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* .left {
      border: 1px solid red;
    }
    .right {
      border: 1px solid blue;
    } */
  `,
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexStart: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  flexEnd: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
  flexBtwR: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,
  flexCenterR: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  flexStartR: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `,
  flexEndR: css`
    display: flex;
    justify-content: center;
    align-items: flex-end;
  `,
  title1: css`
    ${fonts.h0_B};
    margin-bottom: 10px;
  `,
  title2: css`
    ${fonts.h2_B};
    margin-bottom: 10px;
  `,
  title3: css`
    ${fonts.h3_B};
    margin-bottom: 10px;
  `,
  fullLayout: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding-top: 46px;
    /* border: 2px dashed red; */
  `,
};

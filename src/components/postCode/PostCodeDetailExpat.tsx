import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { FormItem } from '@components/form/FormItem';
import { Button, BUTTON_DISPLAY_TYPE, BUTTON_SIZE } from '@components/button';
import { Input, INPUT_SIZE, INPUT_THEME, INPUT_TYPE } from '@components/input';
import { IGlobalPostInput } from './types';
import { useGlobalPostReducer } from './useGlobalPostReducer';
import { GlobalPostForm } from '.';
import text from './text';

export function PostCodeDetailExpat({ onAddress }: IGlobalPostInput) {
  const { t } = useTranslation();
  const { globalPost, dispatchGlobalPost, hasError, canNext, checkValidation } =
    useGlobalPostReducer();
  const { postCode, address, detailAddress } = globalPost;

  const handlePostCode = (value: string) => {
    dispatchGlobalPost({ type: GlobalPostForm.POST_CODE, payload: value });
  };

  const handleAddress = (value: string) => {
    dispatchGlobalPost({ type: GlobalPostForm.ADDRESS, payload: value });
  };

  const handleDetailAddress = (value: string) => {
    dispatchGlobalPost({ type: GlobalPostForm.DETAIL_ADDRESS, payload: value });
  };

  const onClickHandler = () => {
    checkValidation();
    return onAddress({
      actionStep: 'GLOBALDETAIL',
      addressInfo: {
        postCode: postCode.value,
        address: address.value,
        detailAddress: detailAddress.value,
      },
    });
  };

  return (
    <GlobalPostInputStyled>
      <GlobalPostInputTitleStyled>
        {t(text.overSeseasUserAddressRegisterTitle)}
      </GlobalPostInputTitleStyled>
      <GlobalPostInputSubTitleStyled>
        {t(text.overSeseasUserAddressRegisterSubTitle)}
      </GlobalPostInputSubTitleStyled>
      <FormItemWrapper>
        <FormItemLabelStyled>{t(text.labelPostCode)}</FormItemLabelStyled>
        <FormItem {...postCode} border={false}>
          <Input
            type={INPUT_TYPE.TEXT}
            name="postCode"
            inputValue={postCode.value}
            size={INPUT_SIZE.SMALL}
            theme={INPUT_THEME.ROUNDED}
            placeholder={t(text.placeholderPostCode)}
            allowClear={true}
            onChange={handlePostCode}
          />
        </FormItem>
      </FormItemWrapper>
      <FormItemWrapper>
        <FormItemLabelStyled>{t(text.labelAddress)}</FormItemLabelStyled>
        <FormItem {...address} border={false}>
          <Input
            type={INPUT_TYPE.TEXT}
            name="address"
            inputValue={address.value}
            size={INPUT_SIZE.SMALL}
            theme={INPUT_THEME.ROUNDED}
            placeholder={t(text.placeholderAddressInfo)}
            allowClear={true}
            onChange={handleAddress}
          />
        </FormItem>
      </FormItemWrapper>
      <FormItemWrapper>
        <FormItemLabelStyled>{t(text.labelAddressDetail)}</FormItemLabelStyled>
        <FormItem {...detailAddress} border={false}>
          <Input
            type={INPUT_TYPE.TEXT}
            name="detailAddress"
            inputValue={detailAddress.value}
            size={INPUT_SIZE.SMALL}
            theme={INPUT_THEME.ROUNDED}
            placeholder={t(text.placeholderAddressDetail)}
            allowClear={true}
            onChange={handleDetailAddress}
          />
        </FormItem>
      </FormItemWrapper>
      <ButtonWrapper>
        <Button
          label={t(text.check)}
          disabled={!(!hasError && canNext)}
          onClick={onClickHandler}
          size={BUTTON_SIZE.MEDIUM}
          displayType={BUTTON_DISPLAY_TYPE.FULL}
        />
      </ButtonWrapper>
    </GlobalPostInputStyled>
  );
}

const GlobalPostInputTitleStyled = styled.div`
  ${(props) => props.theme.fonts.h1_B};
  ${(props) => props.theme.colors.text_title};
`;

const GlobalPostInputSubTitleStyled = styled.div`
  ${(props) => props.theme.fonts.bd2_R};
  ${(props) => props.theme.colors.text_subtitle};
`;

const FormItemWrapper = styled.div`
  padding: 6px 0px;
`;
const FormItemLabelStyled = styled.div`
  ${(props) => props.theme.fonts.h3_1_B};
  ${(props) => props.theme.colors.text_title};
  padding-bottom: 10px;
`;

const GlobalPostInputStyled = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  padding: 10px 0;
  width: 100%;
`;

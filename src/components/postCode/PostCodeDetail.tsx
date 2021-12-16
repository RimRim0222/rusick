import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { FormItem } from '@components/form/FormItem';
import { Button, BUTTON_DISPLAY_TYPE, BUTTON_SIZE } from '../button';
import { Input, INPUT_SIZE, INPUT_THEME, INPUT_TYPE } from '../input';
import { IPostDetail, GlobalPostForm } from './types';
import { useGlobalPostReducer } from './useGlobalPostReducer';
import text from './text';
import { useEffect } from 'react';

export function PostCodeDetail({ onDetail, address }: IPostDetail) {
  const { t } = useTranslation();
  const { globalPost, dispatchGlobalPost, hasError, canNext, checkValidation } =
    useGlobalPostReducer();

  const onChangeHandler = (value: string) => {
    dispatchGlobalPost({ type: GlobalPostForm.DETAIL_ADDRESS, payload: value });
  };

  const onClickHandler = () => {
    checkValidation();
    onDetail(globalPost.detailAddress.value);
  };

  useEffect(() => {
    dispatchGlobalPost({
      type: GlobalPostForm.INIT,
      payload: {
        postCode: address.postCode,
        address: address.address,
      },
    });
  }, [address]);

  console.log(canNext);

  return (
    <PostCodeDetailStyled>
      <GlobalPostInputTitleStyled>
        {t(text.nativeUserAddressRegisterTitle)}
      </GlobalPostInputTitleStyled>
      <GlobalPostInputSubTitleStyled>
        {t(text.nativeUserAddressRegisterSubTitle)}
      </GlobalPostInputSubTitleStyled>

      <FormItemWrapper>
        <FormItemLabelStyled>{t(text.labelPostCode)}</FormItemLabelStyled>
        <FormItem {...globalPost.postCode} border={false}>
          <Input
            type={INPUT_TYPE.TEXT}
            name="postcode"
            inputValue={address.postCode}
            size={INPUT_SIZE.SMALL}
            theme={INPUT_THEME.ROUNDED}
            readOnly={true}
          />
        </FormItem>
      </FormItemWrapper>
      <FormItemWrapper>
        <FormItemLabelStyled>{t(text.labelAddress)}</FormItemLabelStyled>
        <FormItem {...globalPost.address} border={false}>
          <Input
            type={INPUT_TYPE.TEXT}
            name="address"
            inputValue={address.address}
            size={INPUT_SIZE.SMALL}
            theme={INPUT_THEME.ROUNDED}
            readOnly={true}
          />
        </FormItem>
      </FormItemWrapper>

      <FormItemWrapper>
        <FormItemLabelStyled>{t(text.labelAddressDetail)}</FormItemLabelStyled>
        <FormItem {...globalPost.detailAddress} border={false}>
          <Input
            type={INPUT_TYPE.TEXT}
            name="detailAddress"
            inputValue={globalPost.detailAddress.value}
            size={INPUT_SIZE.SMALL}
            theme={INPUT_THEME.ROUNDED}
            placeholder={t(text.placeholderAddressDetail)}
            allowClear={true}
            onChange={onChangeHandler}
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
    </PostCodeDetailStyled>
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

const PostCodeDetailStyled = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  padding: 10px 0;
  width: 100%;
`;

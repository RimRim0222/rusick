import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Button, BUTTON_DISPLAY_TYPE } from '@components/button';
import { Input, INPUT_TYPE, INPUT_SIZE, INPUT_THEME } from '@components/input';
import { Icon, ICON_LIST } from '@components/icon';
import { FormItem } from '@components/form/FormItem';
import { MemberPassword } from './MemberPassword';
import { MemeberPost } from './MemeberPost';
import { MemberAccountSwitch } from './MemberAccountSwitch';
import { useMemeber } from './useMember';
import { memberText } from './text';
import { MEMBER_TYPE } from '@store/LoginState';
import { useLayer } from '@src/components/modal/useLayer';

import { PostCode } from '@components/postCode/PostCode';
import { LNG_KEY } from '@src/i18n';
import { PasswordChange } from '@features/passwordChange/PasswordChange';
export function MemeberInfo() {
  const { t } = useTranslation();

  const {
    memberType,
    memberName,
    memberPhone,
    memberEmail,
    address,
    hasEmailChange,
    loading,
    changeMemberName,
    onChangeMemberType,
    onChangePhone,
    onChangeEmail,
    onAddress,
    onMemeberInfoSubmit,
  } = useMemeber();

  const memberTypeInfo =
    memberType === MEMBER_TYPE.LOCAL
      ? `${t(memberText.memberTypeNative)} (${t(memberText.memberResiderceInternal)})`
      : `${t(memberText.memberTypeOverseas)} (${t(memberText.memberResiderceOverseas)})`;

  const { onOpenLayer } = useLayer();
  const onChangeAddress = () => {
    const level = 1;
    onOpenLayer({
      level: level,
      contents: {
        id: `layer${level}`,
        isOpen: true,
        title: t(LNG_KEY.HEADER_LAYER_EXPAT_ADDRESS_INPUT),
        usePrev: false,
        useClose: true,
        contents: <PostCode memberType={memberType} onAddress={onAddress} />,
      },
    });
  };

  const onChangePassword = () => {
    const level = 1;
    onOpenLayer({
      level: level,
      contents: {
        id: `layer${level}`,
        isOpen: true,
        title: t(LNG_KEY.HEADER_LAYER_PASSWORD_CHANGE),
        usePrev: false,
        useClose: true,
        contents: <PasswordChange />,
      },
    });
  };

  return (
    <>
      {loading ? (
        <div>loading.................</div>
      ) : (
        <>
          <MemeberInfoTitleWrapper>{t(memberText.memberInfoMainTitle)}</MemeberInfoTitleWrapper>
          <MemeberInfoStyled>
            <FormItem
              label={t(memberText.memberType)}
              isRequired={true}
              isRequiredDisplay={false}
              isMessageDisplay={false}
            >
              <Input
                type={INPUT_TYPE.TEXT}
                name="memberType"
                inputValue={memberTypeInfo}
                size={INPUT_SIZE.SMALL}
                theme={INPUT_THEME.NONROUNDED}
                readOnly={true}
              />
              <SuffixItemStyled>
                <span onClick={onChangeMemberType}>
                  <Icon icon={ICON_LIST['arrow_58x58']} width={'32px'} />
                </span>
              </SuffixItemStyled>
            </FormItem>
            <FormItem {...memberName} isRequiredDisplay={false} isMessageDisplay={false}>
              <Input
                type={INPUT_TYPE.TEXT}
                name="memberName"
                inputValue={memberName.value || ''}
                size={INPUT_SIZE.SMALL}
                theme={INPUT_THEME.NONROUNDED}
                placeholder={t(memberText.placehoderMemberName)}
                onChange={changeMemberName}
                readOnly={true}
              />
            </FormItem>
            <FormItem
              label={memberText.memberPhone}
              isError={false}
              isRequired={true}
              isRequiredDisplay={false}
              isMessageDisplay={false}
            >
              <Input
                type={INPUT_TYPE.TEXT}
                name="memberPhone"
                inputValue={memberPhone || ''}
                size={INPUT_SIZE.SMALL}
                theme={INPUT_THEME.NONROUNDED}
                placeholder={t(memberText.placehoderMemberPhone)}
                readOnly={true}
              />
              <SuffixItemStyled>
                <span onClick={onChangePhone}>
                  <Icon icon={ICON_LIST['arrow_58x58']} width={'32px'} />
                </span>
              </SuffixItemStyled>
            </FormItem>

            <FormItem
              label={t(memberText.labelEmail)}
              isError={false}
              isRequired={true}
              isRequiredDisplay={false}
              isMessageDisplay={false}
            >
              <Input
                type={INPUT_TYPE.TEXT}
                name="memberEmail"
                inputValue={memberEmail || ''}
                size={INPUT_SIZE.SMALL}
                theme={INPUT_THEME.NONROUNDED}
                placeholder={t(memberText.placehoderEmail)}
                readOnly={true}
              />
              {hasEmailChange ? (
                <SuffixItemStyled>
                  <span onClick={onChangeEmail}>
                    <Icon icon={ICON_LIST['arrow_58x58']} width={'32px'} />
                  </span>
                </SuffixItemStyled>
              ) : (
                <></>
              )}
            </FormItem>

            <MemberPassword onChangePassword={onChangePassword} />

            <MemeberPost
              memberType={MEMBER_TYPE.EXPAT}
              onChangeAddress={onChangeAddress}
              onAddress={onAddress}
              address={address}
            />

            <MemberAccountSwitch />

            <RegisterBtnWrapper>
              <Button
                label={t(memberText.btnSave)}
                onClick={onMemeberInfoSubmit}
                displayType={BUTTON_DISPLAY_TYPE.FULL}
              />
            </RegisterBtnWrapper>
          </MemeberInfoStyled>
        </>
      )}
    </>
  );
}

MemeberInfo.defaultProps = { memberType: MEMBER_TYPE.LOCAL };

const MemeberInfoTitleWrapper = styled.div`
  padding-top: 47px;
  ${(props) => props.theme.fonts.bd2_R}
  color: #606060;
`;
const MemeberInfoStyled = styled.div`
  margin-top: 40px;
  > div {
    input {
      ${(props) => props.theme.fonts.bd2_R}
      color: #606060;
    }
  }
  background: ${(props) => props.theme.colors.gray_scale_6};
`;

const SuffixItemStyled = styled.div`
  > button {
    width: fit-content;
    padding: 8px;
    border-radius: 5px;
  }
`;
const RegisterBtnWrapper = styled.div`
  margin-top: 30px;
`;

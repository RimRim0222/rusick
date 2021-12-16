import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { IMemeberPost } from './types';
import { Input, INPUT_TYPE, INPUT_SIZE, INPUT_THEME } from '@components/input';
import { Icon, ICON_LIST } from '@src/components/icon';
import { FormItem } from '@components/form/FormItem';
import { MEMBER_TYPE } from '@store/LoginState';
import { memberText } from './text';
export function MemeberPost({ onChangeAddress, address }: IMemeberPost) {
  const { t } = useTranslation();
  return (
    <>
      <FormItem
        label={t(memberText.memberAddress)}
        isRequiredDisplay={false}
        isMessageDisplay={false}
      >
        <Input
          type={INPUT_TYPE.TEXT}
          name="memberAddress"
          inputValue={address || ''}
          size={INPUT_SIZE.SMALL}
          theme={INPUT_THEME.NONROUNDED}
          placeholder={t(memberText.placehoderAddressSearch)}
          readOnly={true}
        />
        <SuffixItemStyled>
          <span onClick={onChangeAddress}>
            <Icon icon={ICON_LIST['arrow_58x58']} width={'32px'} />
          </span>
        </SuffixItemStyled>
      </FormItem>
    </>
  );
}

MemeberPost.defaultProps = { memberType: MEMBER_TYPE.LOCAL };

const SuffixItemStyled = styled.div`
  > button {
    width: fit-content;
    padding: 8px;
    border-radius: 5px;
  }
`;

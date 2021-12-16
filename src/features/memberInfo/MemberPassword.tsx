import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { IMemberPassword } from './types';
import { Input, INPUT_TYPE, INPUT_SIZE, INPUT_THEME } from '@components/input';
import { Icon, ICON_LIST } from '@src/components/icon';
import { FormItem } from '@components/form/FormItem';
import { memberText } from './text';

export function MemberPassword({ onChangePassword }: IMemberPassword) {
  const { t } = useTranslation();
  return (
    <>
      <FormItem
        label={t(memberText.labelPw)}
        isError={false}
        isRequired={true}
        isRequiredDisplay={false}
        isMessageDisplay={false}
      >
        <Input
          type={INPUT_TYPE.TEXT}
          name="memberPassword"
          inputValue={'*******'}
          size={INPUT_SIZE.SMALL}
          theme={INPUT_THEME.NONROUNDED}
          placeholder={t(memberText.placehoderPwRegister)}
          readOnly={true}
          allowClear={false}
        />
        <SuffixItemStyled>
          <span onClick={onChangePassword}>
            <Icon icon={ICON_LIST['arrow_58x58']} width={'32px'} />
          </span>
        </SuffixItemStyled>
      </FormItem>
    </>
  );
}

const SuffixItemStyled = styled.div`
  > button {
    width: fit-content;
    padding: 8px;
    border-radius: 5px;
  }
`;

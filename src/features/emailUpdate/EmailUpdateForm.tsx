import styled from '@emotion/styled';
import { Button } from '@components/button';
import {
  BUTTON_THEME,
  BUTTON_SIZE,
  BUTTON_SHAPE,
  BUTTON_DISPLAY_TYPE,
} from '@components/button/types';
import { Input, INPUT_TYPE, INPUT_SIZE, INPUT_THEME } from '@components/input';
import { FormItem } from '@components/form/FormItem';
import { useEmailUpdate } from './useEmailUpdate';
import { emailText } from './emailText';
import { useTranslation } from 'react-i18next';

export function EmailUpdateForm() {
  const { t } = useTranslation();
  const { formObject, handleOnChange, handleDuplicateCheck, handleConfirm } = useEmailUpdate();
  return (
    <EmailUpdateFormStyled>
      <FormItem {...formObject} isRequiredDisplay={false}>
        <Input
          type={INPUT_TYPE.TEXT}
          name="email"
          inputValue={formObject.value}
          size={INPUT_SIZE.SMALL}
          theme={INPUT_THEME.NONROUNDED}
          placeholder={t(emailText.placeholder)}
          allowClear={true}
          onChange={handleOnChange}
        />
        <DuplicateCheckBtnStyled>
          <Button
            label={t(emailText.duplicateCheck)}
            size={BUTTON_SIZE.XSSMALL}
            theme={BUTTON_THEME.OUTLINE_GRAY}
            shape={BUTTON_SHAPE.ROUNDED}
            onClick={handleDuplicateCheck}
          />
        </DuplicateCheckBtnStyled>
      </FormItem>
      <EmailUpdateBtnWrapper>
        <Button
          label={t(emailText.confirm)}
          size={BUTTON_SIZE.SMALL}
          displayType={BUTTON_DISPLAY_TYPE.FULL}
          onClick={handleConfirm}
        />
      </EmailUpdateBtnWrapper>
    </EmailUpdateFormStyled>
  );
}

const EmailUpdateFormStyled = styled.div`
  margin-top: 40px;
`;
const DuplicateCheckBtnStyled = styled.div``;

const EmailUpdateBtnWrapper = styled.div``;

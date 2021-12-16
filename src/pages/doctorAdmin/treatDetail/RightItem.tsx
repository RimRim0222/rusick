import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { FormItem } from '@components/form/FormItem';
import { Input, INPUT_TYPE, INPUT_SIZE, INPUT_THEME } from '@components/input';
import { LNG_KEY } from '@src/i18n';
import { FORM_LAYOUT_THEME } from '@src/components/form';
import { TextArea } from '@src/components/textArea';
import { Button, BUTTON_DISPLAY_TYPE, BUTTON_THEME } from '@src/components/button';

export function RightItem() {
  const { t } = useTranslation();

  const handleChange = () => {
    return true;
  };

  const handleClick = () => {
    return true;
  };

  return (
    <>
      <div>진료접수 시간</div>
      <div>2021년 7월 16일 (금) 09:17</div>
      <div>음성 37분경과</div>
      <Button
        label={'환자 연결'}
        theme={BUTTON_THEME.OUTLINE}
        displayType={BUTTON_DISPLAY_TYPE.FULL}
        onClick={handleClick}
      />
      <div>진료비 내역</div>
      <div>[본인 부담금]</div>
      <div>급여 / 비급여 / 재외국민</div>
      <FormItem
        label={t(LNG_KEY.ADDRESS)}
        formTheme={FORM_LAYOUT_THEME.LABEL_VERTICAL}
        isRequired={true}
        isRequiredDisplay={false}
        isMessageDisplay={false}
        border={false}
      >
        <Input
          type={INPUT_TYPE.TEXT}
          inputValue={''}
          size={INPUT_SIZE.SMALL}
          theme={INPUT_THEME.DEFAULT}
        />
        <div>원</div>
      </FormItem>
      <FormItem
        label={t(LNG_KEY.ADDRESS)}
        formTheme={FORM_LAYOUT_THEME.LABEL_VERTICAL}
        isRequired={true}
        isRequiredDisplay={false}
        isMessageDisplay={false}
        border={false}
      >
        <Input
          type={INPUT_TYPE.TEXT}
          inputValue={''}
          size={INPUT_SIZE.SMALL}
          theme={INPUT_THEME.DEFAULT}
        />
        <div>원</div>
      </FormItem>
      <FormItem
        label={t(LNG_KEY.ADDRESS)}
        formTheme={FORM_LAYOUT_THEME.LABEL_VERTICAL}
        isRequired={true}
        isRequiredDisplay={false}
        isMessageDisplay={false}
        border={false}
      >
        <Input
          type={INPUT_TYPE.TEXT}
          inputValue={''}
          size={INPUT_SIZE.SMALL}
          theme={INPUT_THEME.DEFAULT}
        />
        <div>원</div>
      </FormItem>
      <FormItem
        label={t(LNG_KEY.ADDRESS)}
        formTheme={FORM_LAYOUT_THEME.LABEL_VERTICAL}
        isRequired={true}
        isRequiredDisplay={false}
        isMessageDisplay={false}
        border={false}
      >
        <TextArea onChange={handleChange} inputValue={''} />
      </FormItem>
    </>
  );
}

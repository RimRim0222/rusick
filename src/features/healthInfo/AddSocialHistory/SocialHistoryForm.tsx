import styled from '@emotion/styled';
import { FormItem } from '@src/components/form';
import { Select, SELECT_THEME, SELECT_STYLE_THEME } from '@src/components/select';
import { Button, BUTTON_SIZE, BUTTON_THEME, BUTTON_SHAPE } from '@src/components/button';
import { LNG_KEY } from '@src/i18n';
import { FORM_LAYOUT_THEME } from '@src/components/form';
import { useSocialHistoryForm } from './useSocialHistoryForm';
import {
  drinkingOrNotOptions,
  drinkingTimesOptions,
  drinkingAmountOptions,
  smokingOrNotOptions,
  smokingTimesOptions,
  smokingAmountOptions,
} from './selectData';
export function SocialHistoryForm() {
  const {
    isDrinking,
    isSmoking,
    changeDrinkingOrNot,
    changeDrinkingTimes,
    changeDrinkingAmount,
    changeSmokingOrNot,
    changeSmokingTimes,
    changeSmokingAmount,
    handleNextButton,
  } = useSocialHistoryForm();

  return (
    <SocialHistoryFormStyled>
      <FormItem
        label={LNG_KEY.DRINKING_OR_NOT}
        isError={false}
        showMessage={null}
        isRequired={true}
        isRequiredDisplay={false}
        formTheme={FORM_LAYOUT_THEME.LABEL_HORIZONTAL}
      >
        <Select
          id="drinkingOrNot"
          defaultValue={drinkingOrNotOptions[0].id}
          options={drinkingOrNotOptions}
          theme={SELECT_THEME.DIALOG}
          styleTheme={SELECT_STYLE_THEME.NONELINE}
          onSelect={changeDrinkingOrNot}
          OptionKeys={{ id: 'id', text: 'text' }}
          isReadOnly={false}
        />
      </FormItem>
      {isDrinking && (
        <FormItem
          label={LNG_KEY.DRINKING_AMOUNT}
          isError={false}
          showMessage={null}
          isRequired={true}
          isRequiredDisplay={false}
          formTheme={FORM_LAYOUT_THEME.LABEL_HORIZONTAL}
        >
          <Select
            id="drinkingTimes"
            defaultValue={drinkingTimesOptions[0].id}
            options={drinkingTimesOptions}
            theme={SELECT_THEME.DIALOG}
            styleTheme={SELECT_STYLE_THEME.NONELINE}
            onSelect={changeDrinkingTimes}
            OptionKeys={{ id: 'id', text: 'text' }}
            isReadOnly={false}
          />
          <Select
            id="drinkingAmount"
            defaultValue={drinkingAmountOptions[0].id}
            options={drinkingAmountOptions}
            theme={SELECT_THEME.DIALOG}
            styleTheme={SELECT_STYLE_THEME.NONELINE}
            onSelect={changeDrinkingAmount}
            OptionKeys={{ id: 'id', text: 'text' }}
            isReadOnly={false}
          />
        </FormItem>
      )}
      <FormItem
        label={LNG_KEY.SMOKING_OR_NOT}
        isError={false}
        showMessage={null}
        isRequired={true}
        isRequiredDisplay={false}
        formTheme={FORM_LAYOUT_THEME.LABEL_HORIZONTAL}
      >
        <Select
          id="smokingOrNot"
          defaultValue={smokingOrNotOptions[0].id}
          options={smokingOrNotOptions}
          theme={SELECT_THEME.DIALOG}
          styleTheme={SELECT_STYLE_THEME.NONELINE}
          onSelect={changeSmokingOrNot}
          OptionKeys={{ id: 'id', text: 'text' }}
          isReadOnly={false}
        />
      </FormItem>
      {isSmoking && (
        <FormItem
          label={LNG_KEY.SMOKING_AMOUNT}
          isError={false}
          showMessage={null}
          isRequired={true}
          isRequiredDisplay={false}
          formTheme={FORM_LAYOUT_THEME.LABEL_HORIZONTAL}
        >
          <Select
            id="smokingTimes"
            defaultValue={smokingTimesOptions[0].id}
            options={smokingTimesOptions}
            theme={SELECT_THEME.DIALOG}
            styleTheme={SELECT_STYLE_THEME.NONELINE}
            onSelect={changeSmokingTimes}
            OptionKeys={{ id: 'id', text: 'text' }}
            isReadOnly={false}
          />
          <Select
            id="smokingAmount"
            defaultValue={smokingAmountOptions[0].id}
            options={smokingAmountOptions}
            theme={SELECT_THEME.DIALOG}
            styleTheme={SELECT_STYLE_THEME.NONELINE}
            onSelect={changeSmokingAmount}
            OptionKeys={{ id: 'id', text: 'text' }}
            isReadOnly={false}
          />
        </FormItem>
      )}
      <ButtonWrapper>
        <Button
          label={`저장 후 다음 단계로 이동(4/4)`}
          size={BUTTON_SIZE.MEDIUM}
          theme={BUTTON_THEME.DEFAULT}
          shape={BUTTON_SHAPE.ROUNDED}
          onClick={handleNextButton}
        />
      </ButtonWrapper>
    </SocialHistoryFormStyled>
  );
}

const SocialHistoryFormStyled = styled.div``;
const ButtonWrapper = styled.div``;

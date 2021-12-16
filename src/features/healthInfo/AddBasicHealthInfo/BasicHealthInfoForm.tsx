import styled from '@emotion/styled';
import { UserHealthInfoResult } from '@src/store/HealthInfoState';

import { useEffect, useState } from 'react';

import { useBasicFormReducer } from './BasicHealthInfoReducer';
import { useBirthDate } from '..';
import { useCard } from '@src/components/cards';

import { FormItem } from '@src/components/form';
import { FORM_LAYOUT_THEME } from '@src/components/form';
import { Input, INPUT_TYPE, INPUT_SIZE, INPUT_THEME } from '@src/components/input';
import { Card } from '@src/components/cards/Card';
import { Select, SelectIcon, SELECT_THEME, SELECT_STYLE_THEME } from '@src/components/select';
import { Button, BUTTON_SIZE, BUTTON_THEME, BUTTON_SHAPE } from '@src/components/button';

import { formName } from '@src/components/form';
import {
  relations,
  profileImages,
  birthYear,
  birthMonth,
  birthDay,
  bloodType,
  sexuality,
} from './selectData';
import { LNG_KEY } from '@src/i18n';
import { useRecoilValue } from 'recoil';

export function BasicHealthInfoForm() {
  const initState = useRecoilValue(UserHealthInfoResult);

  const { canNext, BasicFormReducer, basicInfoDispatchReducer } = useBasicFormReducer();
  const { birthDate, changeUserBirthDate, getFullBirthDate } = useBirthDate();
  const { activeId, onActiveId } = useCard('single');

  const changeSexualityCard = (val: string) => {
    onActiveId(val);
    basicInfoDispatchReducer.changeUserSexuality(val);
  };

  // 초기정보 셋팅
  useEffect(() => {
    if (initState) {
      basicInfoDispatchReducer.setInitState(initState);
      onActiveId(initState.basic.sexuality);
    }
  }, [initState]);

  useEffect(() => {
    const FullBirthDate = getFullBirthDate(birthDate);
    if (FullBirthDate) {
      basicInfoDispatchReducer.changeFullBirthDate(FullBirthDate);
    }
  }, [birthDate]);

  const changeHeightWithNumber = (value: string) => {
    if (!isNaN(+value)) {
      basicInfoDispatchReducer.changeUserHeight(value);
      return;
    }
    return;
  };

  const changeWeightWithNumber = (value: string) => {
    if (!isNaN(+value)) {
      basicInfoDispatchReducer.changeUserWeight(value);
      return;
    }
    return;
  };

  const handleNextButton = () => {
    console.log(BasicFormReducer);
    console.log('과거력 페이지로 이동');
  };

  return (
    <BasicHealthInfoFormStyled>
      <FormItem {...formName}>
        <Input
          type={INPUT_TYPE.TEXT}
          name="memberName"
          inputValue={BasicFormReducer.name}
          size={INPUT_SIZE.SMALL}
          theme={INPUT_THEME.ROUNDED}
          readOnly={false}
          allowClear={false}
          placeholder={'실명을 입력 해 주세요.'}
          onChange={basicInfoDispatchReducer.changeUserName}
        />
      </FormItem>
      <FormItem
        label={LNG_KEY.RELATION}
        isError={false}
        showMessage={null}
        isRequired={true}
        isRequiredDisplay={false}
        formTheme={FORM_LAYOUT_THEME.LABEL_HORIZONTAL}
      >
        <Select
          id="memberRelation"
          placeholder={'선택해 주세요.'}
          defaultValue={initState.basic.relation}
          options={relations}
          theme={SELECT_THEME.DIALOG}
          styleTheme={SELECT_STYLE_THEME.NONELINE}
          onSelect={basicInfoDispatchReducer.changeUserRelation}
          OptionKeys={{ id: 'id', text: 'text' }}
          isReadOnly={false}
        />
      </FormItem>
      <FormItem label={LNG_KEY.PROFILE_IMAGE}>
        <SelectIcon
          id="memberProfileImage"
          layerSplit="3"
          theme={SELECT_THEME.DIALOG}
          styleTheme={SELECT_STYLE_THEME.NONELINE}
          label="프로필 이미지를 선택해 주세요."
          onSelect={basicInfoDispatchReducer.changeProfileImage}
          isReadOnly={false}
          options={profileImages}
          defaultValue={initState.basic.profileImage}
        />
      </FormItem>
      <FormItem label={LNG_KEY.SEX}>
        {sexuality.map((type) => (
          <Card
            key={type}
            onClick={() => {
              changeSexualityCard(type);
            }}
            active={activeId === type}
          >
            <SexualityCardWrapper>{type}</SexualityCardWrapper>
          </Card>
        ))}
      </FormItem>
      <FormItem label={LNG_KEY.BIRTHDATE}>
        <Select
          id="memberBirthYear"
          placeholder={'년'}
          options={birthYear}
          theme={SELECT_THEME.DIALOG}
          styleTheme={SELECT_STYLE_THEME.NONELINE}
          onSelect={(value) => changeUserBirthDate({ year: +value })}
          OptionKeys={{ id: 'id', text: 'text' }}
          isReadOnly={false}
          defaultValue={initState.basic.birthDate.slice(0, 4)}
        />
        <Select
          id="memerBirthMonth"
          placeholder={'월'}
          options={birthMonth}
          theme={SELECT_THEME.DIALOG}
          styleTheme={SELECT_STYLE_THEME.NONELINE}
          onSelect={(value) => changeUserBirthDate({ month: +value })}
          OptionKeys={{ id: 'id', text: 'text' }}
          isReadOnly={false}
          defaultValue={Number(initState.basic.birthDate.slice(5, 7)).toString()}
        />
        <Select
          id="memberBirthDay"
          placeholder={'일'}
          options={birthDay}
          theme={SELECT_THEME.DIALOG}
          styleTheme={SELECT_STYLE_THEME.NONELINE}
          onSelect={(value) => changeUserBirthDate({ day: +value })}
          OptionKeys={{ id: 'id', text: 'text' }}
          isReadOnly={false}
          defaultValue={Number(initState.basic.birthDate.slice(8, 10)).toString()}
        />
      </FormItem>
      <FormItem label={LNG_KEY.HEIGHT}>
        <Input
          type={INPUT_TYPE.TEXT}
          name="memberHeight"
          inputValue={BasicFormReducer.height}
          size={INPUT_SIZE.SMALL}
          theme={INPUT_THEME.ROUNDED}
          readOnly={false}
          allowClear={false}
          placeholder={'키를 입력해 주세요.'}
          onChange={changeHeightWithNumber}
        />
      </FormItem>
      <FormItem label={LNG_KEY.WEIGHT}>
        <Input
          type={INPUT_TYPE.TEXT}
          name="memberWeight"
          inputValue={BasicFormReducer.weight}
          size={INPUT_SIZE.SMALL}
          theme={INPUT_THEME.ROUNDED}
          readOnly={false}
          allowClear={false}
          placeholder={'몸무게를 입력해 주세요.'}
          onChange={changeWeightWithNumber}
        />
      </FormItem>
      <FormItem label={LNG_KEY.BLOODTYPE}>
        <Select
          id="memberBloodType"
          placeholder={'혈액형을 선택해 주세요.'}
          options={bloodType}
          theme={SELECT_THEME.DIALOG}
          styleTheme={SELECT_STYLE_THEME.NONELINE}
          onSelect={basicInfoDispatchReducer.changeUserBloodtype}
          OptionKeys={{ id: 'id', text: 'text' }}
          isReadOnly={false}
          defaultValue={initState.basic.bloodType}
        />
      </FormItem>
      <ButtonWrapper>
        <Button
          label={'저장 후 다음 단계로 이동(1/4)'}
          size={BUTTON_SIZE.MEDIUM}
          theme={BUTTON_THEME.DEFAULT}
          shape={BUTTON_SHAPE.ROUNDED}
          disabled={!canNext}
          onClick={handleNextButton}
        />
      </ButtonWrapper>
    </BasicHealthInfoFormStyled>
  );
}

const BasicHealthInfoFormStyled = styled.div``;
const ButtonWrapper = styled.div``;
const SexualityCardWrapper = styled.div``;

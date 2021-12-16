import { useState } from 'react';
import styled from '@emotion/styled';
import { ICON_LIST } from '@components/icon';
import { LabelToggle, TOGGLE_SIZE } from '@components/toggle';
import { FormItem } from '@components/form/FormItem';
import { memberText } from './text';
import { cssx } from '@src/theme/';

export function MemberAccountSwitch() {
  const [value, setValue] = useState<{ [key: string]: boolean }>({
    kakao: false,
    naver: false,
    google: false,
    apple: false,
  });

  const onChangeHandler = (id: string) => {
    setValue((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <FormItem label={memberText.memberLinkedSns} isRequiredDisplay={false} isMessageDisplay={false}>
      <MemberAccountSwitchStyled>
        <ItemWrapper>
          <LabelToggle
            checked={value.kakao}
            onChange={onChangeHandler}
            id="kakao"
            size={TOGGLE_SIZE.W50}
            disabled={true}
            icon={ICON_LIST.kakao}
            label="kakao"
          />
        </ItemWrapper>
        <ItemWrapper>
          <LabelToggle
            checked={value.naver}
            onChange={onChangeHandler}
            id="naver"
            size={TOGGLE_SIZE.W50}
            disabled={true}
            icon={ICON_LIST.naver}
            label="naver"
          />
        </ItemWrapper>
        <ItemWrapper>
          <LabelToggle
            checked={value.google}
            onChange={onChangeHandler}
            id="google"
            size={TOGGLE_SIZE.W50}
            disabled={true}
            icon={ICON_LIST.google}
            label="google"
          />
        </ItemWrapper>
        <ItemWrapper>
          <LabelToggle
            checked={value.apple}
            onChange={onChangeHandler}
            id="apple"
            size={TOGGLE_SIZE.W50}
            disabled={true}
            icon={ICON_LIST.apple}
            label="apple"
          />
        </ItemWrapper>
      </MemberAccountSwitchStyled>
    </FormItem>
  );
}

const MemberAccountSwitchStyled = styled.div`
  ${cssx.flexStartR}
  width: 100%;
`;
const ItemWrapper = styled.div`
  width: 100%;
`;

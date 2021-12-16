import styled from '@emotion/styled';
import { MasterCheckbox } from '@src/components/checkbox';
import { useTranslation } from 'react-i18next';

interface IPropTypes {
  onRequireCheck: (val: boolean) => void;
}

export function ReservationTermsList({ onRequireCheck }: IPropTypes) {
  const { t } = useTranslation();

  const checkItems = sampleData;

  const onChecked = (val: string[]) => {
    const requriedCount = checkItems.filter((obj) => obj.isRequired).length;
    onRequireCheck(val.length >= requriedCount);
  };

  const onShowInfo = (id: string) => {
    console.log(`show info ${id}`);
  };

  return (
    <ReservationTermsListStyled>
      <CheckboxWrapper>
        <MasterCheckbox
          options={checkItems}
          allCheckLabel={'all'}
          onCheckIds={onChecked}
          onClickItem={onShowInfo}
        />
      </CheckboxWrapper>
    </ReservationTermsListStyled>
  );
}

const ReservationTermsListStyled = styled.div``;
const CheckboxWrapper = styled.div``;

const sampleData = [
  { id: 'check1', text: '어디아파 서비스 이용약관 (필수)', isRequired: true },
  { id: 'check2', text: '개인정보 수집 및 이용내역 (필수)', isRequired: true },
  { id: 'check3', text: '위치정보 서비스 이용약관 (필수)', isRequired: true },
  { id: 'check4', text: '진료기록 저장 및 의료기관 제공 동의', isRequired: true },
];

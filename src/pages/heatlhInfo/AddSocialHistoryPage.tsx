import styled from '@emotion/styled';
import { AddTitle } from '@src/features/healthInfo';
import { SocialHistoryForm } from '@src/features/healthInfo/AddSocialHistory/SocialHistoryForm';
export function AddSocialHistoryPage() {
  return (
    <AddSocialHistoryPageStyled>
      <AddTitle
        title={'사회력'}
        desc={
          '질환의 발생이나 악화등에 영향을 줄 수 있는 흡연, 음주, 직업과 같은 환경적 요소와 관련된 의학적 정보입니다.'
        }
      />
      <SocialHistoryForm />
    </AddSocialHistoryPageStyled>
  );
}

const AddSocialHistoryPageStyled = styled.div``;
const ContentsWrapper = styled.div``;
const ButtonWrapper = styled.div``;

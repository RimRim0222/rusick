import styled from '@emotion/styled';
import { AddTitle } from '@src/features/healthInfo';
import { BasicHealthInfoForm } from '@src/features/healthInfo/AddBasicHealthInfo/BasicHealthInfoForm';
import { Suspense } from 'react';
import { UserHealthInfoParam } from '@src/store/HealthInfoState';
import { useSetRecoilState } from 'recoil';

export function AddBasicHealthInfoPage({ userId }: { userId: string }) {
  /* 
  건강정보 입력 페이지 접근 경로 
  1.새로운 건강정보 추가 : 
     a. 버튼 클릭시 url파라미터로 userId만 넘겨주기->페이지에서 cardId 없을 경우 기본값으로 렌더링
     b. 버튼 클릭시 페이지 이동, 기본값 렌더링 
  2.기록된 건강정보 카드-> 정보 수정하기 : 
     a. 버튼 클릭시 url 파라미터로 userId, carId 넘겨주기, 페이지에서 해당 값으로 api 조회 후 상태 업데이트
     b. 버튼 클릭시 userId, cardId로 api 조회, 상태값 업데이트 후 페이지 이동
  */
  const setHealthInfoParam = useSetRecoilState(UserHealthInfoParam);

  console.log(userId);
  setHealthInfoParam({ userId });
  return (
    <AddBasicHealthInfoPageStyled>
      <AddTitle title="기본정보" />
      <Suspense fallback={<div>loading...</div>}>
        <BasicHealthInfoForm />
      </Suspense>
    </AddBasicHealthInfoPageStyled>
  );
}

const AddBasicHealthInfoPageStyled = styled.div``;
const ContentsWrapper = styled.div``;
const ButtonWrapper = styled.div``;

import styled from '@emotion/styled';

export function HealthInfoList() {
  //api 조회
  const cardList = [{ name: '홍길동', sex: '남', age: 50, relation: '본인' }];
  const handleAddHealthInfo = () => {
    //AddBasicHealthInfo으로 이동
    /*
    a. 버튼 클릭시 url파라미터로 userId만 넘겨주기->페이지에서 cardId 없을 경우 기본값으로 렌더링
    b. 버튼 클릭시 페이지 이동, 기본값 렌더링
     */
    console.log('건강정보 추가하기');
  };
  const handleHealthInfoCard = (id: string) => {
    console.log('건강정보 카드 클릭, id:' + id);
  };
  return (
    <HealthInfoListStyled>
      <AddHealthInfoItem onClick={handleAddHealthInfo}>
        <AddProfileImg></AddProfileImg>
        <DefaultText>건강정보 추가하기</DefaultText>
      </AddHealthInfoItem>
      {cardList.map((info, idx) => {
        const { name, sex, age, relation } = info;
        return (
          <HealthInfoItem key={name} onClick={() => handleHealthInfoCard(idx + '')}>
            <ProfileImgWrapper></ProfileImgWrapper>
            <PersonalInfo>
              {name}({sex}/{age})<br />
              관계:{relation}
            </PersonalInfo>
          </HealthInfoItem>
        );
      })}
    </HealthInfoListStyled>
  );
}

const HealthInfoListStyled = styled.div``;
const AddHealthInfoItem = styled.div``;
const HealthInfoItem = styled.div``;
const AddProfileImg = styled.div``;
const DefaultText = styled.div``;
const ProfileImgWrapper = styled.div``;
const PersonalInfo = styled.div``;

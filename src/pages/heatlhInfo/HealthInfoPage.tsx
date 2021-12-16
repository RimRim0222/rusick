import styled from '@emotion/styled';
import { HealthInfoTable, HealthInfoTableWithoutIndex } from '@src/features/healthInfo';
import { UseHealthInfo } from '@src/features/healthInfo/LookUpHealthInfo/UseHealthInfo';
import { Button, BUTTON_SIZE, BUTTON_THEME, BUTTON_SHAPE } from '@src/components/button';

export function HealthInfoPage() {
  const { basicItems, medicalHistoryItems, familyHistoryItems, socialHistoryItems, isLoading } =
    UseHealthInfo();
  const handleUpdateButton = () => {
    /*
      a. 버튼 클릭시 url 파라미터로 userId, carId 넘겨주기, 페이지에서 해당 값으로 api 조회 후 상태 업데이트
      b. 버튼 클릭시 userId, cardId로 api 조회, 상태값 업데이트 후 페이지 이동
   */
    console.log('정보수정');
  };
  return (
    <HealthInfoPageStyled>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <HealthInfoTable tableHead={'기본정보'} tableItems={basicItems && basicItems} />
          <HealthInfoTableWithoutIndex
            tableHead={'과거력'}
            tableItems={medicalHistoryItems && medicalHistoryItems}
          />
          <HealthInfoTableWithoutIndex
            tableHead={'가족력'}
            tableItems={familyHistoryItems && familyHistoryItems}
          />
          <HealthInfoTable
            tableHead={'사회력'}
            tableItems={socialHistoryItems && socialHistoryItems}
          />
        </>
      )}
      <Button
        label={'정보수정'}
        theme={BUTTON_THEME.OUTLINE}
        size={BUTTON_SIZE.SMALL}
        shape={BUTTON_SHAPE.ROUNDED}
        onClick={handleUpdateButton}
      />
    </HealthInfoPageStyled>
  );
}

const HealthInfoPageStyled = styled.div``;

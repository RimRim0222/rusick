import styled from '@emotion/styled';
import { RecordTitle2 } from './RecordTitle2';
import { RecordDesc } from './RecordDesc';
import { Button } from '@src/components/button';
import { Icon, ICON_LIST } from '@src/components/icon';

export function Prescription() {
  return (
    <PrescriptionStyled>
      <RecordTitle2 title="알아두면 편리해요!" />
      <RecordDesc desc="진료를 받으신 병원과 가까운 약국을 선택 하시면 병원의 처방전대로 약을 조제 받을 수 있습니다." />
      <Icon icon={ICON_LIST.mymenu_02} width="100%" />
      <div className="btn-wrap">
        <Button
          label={'처방전 보내기'}
          onClick={() => {
            console.log('click');
          }}
        />
        <Button
          label={'다운로드'}
          onClick={() => {
            console.log('click');
          }}
        />
      </div>
    </PrescriptionStyled>
  );
}

const PrescriptionStyled = styled.div`
  padding: 20px;
`;

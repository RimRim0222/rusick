import styled from '@emotion/styled';
import { RecordTitle1 } from './RecordTitle1';
import { RecordTitle2 } from './RecordTitle2';
import { RecordDesc } from './RecordDesc';
import { ViewPdf } from './ViewPdf';
import { Button } from '@src/components/button';

export function TabRecord() {
  return (
    <TabRecordStyled>
      <RecordTitle1 title="진료기록" />

      <TabRecordBlock>
        <RecordTitle2 title="진료비 내역" />
        <RecordDesc desc="비대면 진료 시 진료비 내역입니다." />
      </TabRecordBlock>

      <TabRecordBlock>
        <div>
          본인 부담금 <strong>8,000원</strong>
        </div>
        <p>진료비 결제를 진행해 주세요.</p>
        <Button label={'결제하기'} onClick={() => console.log('click')} />
      </TabRecordBlock>

      <TabRecordBlock>
        <RecordTitle2 title="진료 내용" />
        <RecordDesc desc="의사가 기록한 정보입니다. 글자수 제한은 없습니다.의사가 기록한 정보입니다. 글자수 제한은 없습니다.의사가 기록한 정보입니다. 글자수 제한은 없습니다.의사가 기록한 정보입니다. 글자수 제한은 없습니다.의사가 기록한 정보입니다. 글자수 제한은 없습니다.의사가 기록한 정보입니다." />
      </TabRecordBlock>

      <TabRecordBlock>
        <RecordTitle2 title="처방전" />
        <RecordDesc desc="처방전을 확인 후 약국으로 처방전 전송 후 약배송을 통해 조제약을 받을 수 있습니다." />
        <ViewPdf layerNum={1} />
      </TabRecordBlock>

      <TabRecordBlock>
        <RecordTitle2 title="기타 재증명" />
        <RecordDesc desc="비대면 진료 시 요청하신 진료관련 증명서류입니다." />
        <ViewPdf layerNum={2} />
      </TabRecordBlock>
    </TabRecordStyled>
  );
}

const TabRecordStyled = styled.div``;
const TabRecordBlock = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #8c8c8c;
`;

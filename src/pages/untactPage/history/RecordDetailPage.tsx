import styled from '@emotion/styled';
import { cssx } from '@src/theme';
import { RecordTitle2 } from '@src/features/untact/history/RecordTitle2';
import { RecordCard } from '@src/features/untact/history/RecordCard';
import { useState } from 'react';
import { css } from '@emotion/react';
import { TabRecord } from '@src/features/untact/history/TabRecord';
import { MedicineTab } from '@src/features/untact/history/MedicineTab';

const result = [
  {
    id: 'card1',
    tag: null,
    year: 2021,
    month: 10,
    day: 12,
    person: '홍길동',
    hospital: '부민병원',
    doctor: '정명의',
    cases: '비대면 화상진료',
  },
];

export function RecordDetailPage() {
  const [isActive, setActive] = useState('tab1');
  const activeFnc = (val: string) => {
    setActive(val);
  };

  return (
    <RecordDetailPageStyled>
      <RecordTitle2 title="기본 정보" />

      {result.map((item) => (
        <RecordCard key={item.id} item={item} />
      ))}

      <Tab>
        <TabMenu>
          <TabButton active={isActive === 'tab1'} onClick={() => activeFnc('tab1')}>
            진료기록
          </TabButton>
          <TabButton active={isActive === 'tab2'} onClick={() => activeFnc('tab2')}>
            약조제 및 배송 진행
          </TabButton>
        </TabMenu>

        <TabContent>
          {/** 진료기록 탭 */}
          {isActive === 'tab1' && <TabRecord />}

          {/** 약조제 및 배송 진행 탭 */}
          {isActive === 'tab2' && <MedicineTab />}
        </TabContent>
      </Tab>
    </RecordDetailPageStyled>
  );
}

const RecordDetailPageStyled = styled.div``;
const TabMenu = styled.div`
  ${cssx.flexBtw}
`;
const TabButton = styled.button<{ active: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 10px;
  background: #acacac;
  color: #000;
  font-weight: 400;
  ${(props) => {
    if (props.active) {
      return css`
        background: #ededed;
        color: #000;
        font-weight: 700;
      `;
    }
  }}
`;

const Tab = styled.div``;
const TabContent = styled.div`
  padding: 10px 20px;
  background: #ededed;
`;

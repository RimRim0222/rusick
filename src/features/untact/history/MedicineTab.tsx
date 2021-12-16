import styled from '@emotion/styled';
import { RecordTitle2 } from './RecordTitle2';
import { Button } from '@src/components/button';
import { cssx } from '@src/theme';

const progress = [
  {
    id: 'progress1',
    status: '진료완료',
    desc: '비대면 진료가 완료되어 처방전 발행이 완료 되었습니다.',
  },
  {
    id: 'progress2',
    status: '처방전 전송',
    desc: 'OO약국으로 처방전 전송이 완료되었습니다.',
  },
  {
    id: 'progress3',
    status: '약조제비/배송비 결제 요청',
    button: '결제하기',
    list: [
      {
        name: '약조제비',
        text: '20,000원',
      },
      {
        name: '배송비',
        text: '13,000원',
      },
    ],
    desc: '결제 완료 약조제 진행',
  },
];

export function MedicineTab() {
  return (
    <MedicineTabStyled>
      <RecordTitle2 title="실시간 진행 상황" />
      {progress.map((item, idx) => (
        <TreatProgress key={idx}>
          <div className="title">
            <span>{item.status}</span>
            {item.button && <Button label={'결제하기'} onClick={() => console.log('click')} />}
          </div>
          {item.list && (
            <ul className="list">
              {item.list.map((li, idx) => (
                <li key={idx}>
                  <div className="left">{li.name}</div>
                  <div className="right">: {li.text}</div>
                </li>
              ))}
            </ul>
          )}
          {item.desc && <div className="desc">{item.desc}</div>}
        </TreatProgress>
      ))}
    </MedicineTabStyled>
  );
}

const MedicineTabStyled = styled.div``;
const TreatProgress = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid #8c8c8c;
  .title {
    ${cssx.flexBtw}
    span {
      ${cssx.title3}
    }
  }
  .list {
    li {
      ${cssx.flexBtw}
    }
  }
`;

import styled from '@emotion/styled';
import { cssx } from '@src/theme';
import { isNil } from 'lodash';
import { useEffect, useState } from 'react';
import { samplePatientList } from './sample.data';
import { useTreatList } from './useTreatList';

export function Table() {
  const [targetPatientList, setTargetPatientList] = useState(samplePatientList);
  const { patientList, createRequest } = useTreatList();

  useEffect(() => {
    const targetItem = patientList.find((val) => val.name);
    if (!isNil(targetItem)) {
      const newPatientList = samplePatientList.map((val) => {
        return val.name === targetItem.name
          ? { ...val, id: targetItem.id, socketId: targetItem.socketId, status: 'READY' }
          : val;
      });
      setTargetPatientList(newPatientList);
    }
  }, [patientList]);

  return (
    <TableStyled>
      <div className="table-top">
        <div className="left">
          <span>123</span>/<span>6045</span>
        </div>
        <div className="right">
          <select name="">
            <option value="10">10</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>환자명</th>
            <th>나이</th>
            <th>구분</th>
            <th>성별</th>
            <th>전화번호</th>
            <th>진료횟수</th>
            <th>주증상/질환</th>
            <th>접수시간</th>
            <th>진료상태</th>
            <th>대기시간</th>
            <th>알림</th>
          </tr>
        </thead>
        <tbody>
          {targetPatientList &&
            targetPatientList.map((val) => {
              const handleRequestCall = () => {
                console.log(val.id);
                createRequest(val.id);
              };
              return (
                <tr key={val.seq}>
                  <td>{val.age}</td>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>{val.memberType}</td>
                  <td>{val.gender}</td>
                  <td>{val.phone}</td>
                  <td>{val.disease}</td>
                  <td>{val.treatCnt}</td>
                  <td>{val.receiptTime}</td>
                  <td>{val.treatState}</td>
                  <td>{val.waitTime}</td>
                  <td>
                    {val.status === 'READY' ? (
                      <button onClick={handleRequestCall}>진료실 입장</button>
                    ) : (
                      <span>진료 대기</span>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </TableStyled>
  );
}

const TableStyled = styled.div`
  .table-top {
    ${cssx.flexBtw}
  }
  table {
    width: 100%;
    text-align: center;
    tr > * {
      padding: 10px 20px;
      border-bottom: 1px solid #9c9c9c;
    }
  }
`;

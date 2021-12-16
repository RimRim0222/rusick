import React from 'react';

// 마케팅정보 수신 동의
export const Marketing = () => {
  return <div dangerouslySetInnerHTML={{ __html: contents }}></div>;
};
const contents = `
      <strong>제1조(수집하는 개인정보의 항목 및 처리목적)</strong>
      <p>
        다음 내용은 어디아파 서비스의 마케팅 목적을 위하여, 주식회사 비플러스랩(이하 ‘회사’)이
        회원의 개인정보를 처리하기 위한 동의서입니다. 해당 개인정보는 회원 탈퇴 혹은 마케팅 동의
        철회시까지 처리됩니다. 이에 관하여 동의하지 않으셔도 어디아파 서비스를 이용하실 수 있으나,
        어디아파로부터 마케팅 정보를 받아보실 수 없습니다.
      </p>

      <table>
        <colgroup>
          <col style={{ width: '20%' }} />
          <col style={{ width: '40%' }} />
          <col style={{ width: '40%' }} />
        </colgroup>
        <thead>
          <tr>
            <th>구분</th>
            <th>처리 항목</th>
            <th>처리 목적</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>마케팅 목적</td>
            <td>
              성명, 성별, 이메일 주소, 휴대전화 번호, 주소, 고객ID, 접속 일시, 광고식별자(ADID,
              IDFA), SNS 아이디
            </td>
            <td>어디아파에서 이벤트 정보를 앱 Push, 이메일, 휴대전화로 전송하기 위함</td>
          </tr>
        </tbody>
      </table>
    `;

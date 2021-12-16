export const mock = {
  login: {
    url: '/login',
    params: { id: '', password: '' },
    results: {
      users: [{ id: 'beplus', name: 'john fail' }],
    },
  },
  email: {
    url: '/email',
    params: { email: 'yes@gmail.com' },
    results: {
      isDuplicate: false,
    },
  },
  getSymptom: {
    url: '/getSymptom',
    params: { text: '', sort: '' },
    results: {
      data: [...Array(130)].map((obj, idx) => ({
        idx: idx + 1,
        id: `sy${idx + 1}`,
        image: `${idx < 8 ? `sy_0${(idx % 8) + 1}` : ''}`,
        symptom: ['고혈압', '당뇨', '복통', '탈모'][idx % 4],
        tag: idx % 2 === 0 ? 'DISEASE' : 'SYMPTOM',
      })),
    },
  },
  getSubject: {
    url: '/getSubject',
    params: { text: '' },
    results: {
      data: [...Array(10)].map((obj, idx) => ({
        idx: idx + 1,
        id: `subject${idx + 1}`,
        subjectName: [
          '내과',
          '외과',
          '안과',
          '정형외과',
          '피부과',
          '재활의학과',
          '가정의학과',
          '소아과',
        ][idx % 8],
        image: `icon_sp_0${(idx % 8) + 1}`,
      })),
    },
  },
  agrees: {
    url: 'test/api/agrees',
    params: undefined,
    results: {
      status: '200',
      payload: [
        {
          group: 'testgroup',
          key: 'testKey3',
          version: 1,
          newest: true,
          optional: false,
          used: true,
          createdDate: '2021-11-05T13:57:09.892269',
          modifiedDate: '2021-11-05T13:57:09.892269',
          translations: [
            {
              language: 'KO',
              name: 'testKey3',
              url: 'https://naver.com',
              description: 'testtestKey3',
            },
            {
              language: 'ZH',
              name: 'testKey3',
              url: 'https://naver.com',
              description: 'testtestKey3',
            },
          ],
        },
        {
          group: 'testgroup',
          key: 'testKey1',
          version: 2,
          newest: true,
          optional: false,
          used: true,
          createdDate: '2021-11-05T13:57:09.9091',
          modifiedDate: '2021-11-05T13:57:09.9091',
          translations: [
            {
              language: 'KO',
              name: 'testKey1',
              url: 'https://naver.com',
              description: 'testtestKey1',
            },
            {
              language: 'ZH',
              name: 'testKey1',
              url: 'https://naver.com',
              description: 'testtestKey1',
            },
          ],
        },
        {
          group: 'testgroup',
          key: 'testKey4',
          version: 1,
          newest: true,
          optional: true,
          used: true,
          createdDate: '2021-11-05T13:57:09.898338',
          modifiedDate: '2021-11-05T13:57:09.898338',
          translations: [
            {
              language: 'KO',
              name: 'testKey4',
              url: 'https://naver.com',
              description: 'testtestKey4',
            },
            {
              language: 'ZH',
              name: 'testKey4',
              url: 'https://naver.com',
              description: 'testtestKey4',
            },
          ],
        },
        {
          group: 'testgroup',
          key: 'testKey2',
          version: 1,
          newest: true,
          optional: true,
          used: true,
          createdDate: '2021-11-05T13:57:09.886796',
          modifiedDate: '2021-11-05T13:57:09.886796',
          translations: [
            {
              language: 'KO',
              name: 'testKey2',
              url: 'https://naver.com',
              description: 'testtestKey2',
            },
            {
              language: 'ZH',
              name: 'testKey2',
              url: 'https://naver.com',
              description: 'testtestKey2',
            },
          ],
        },
        {
          group: 'testgroup',
          key: 'testKey5',
          version: 1,
          newest: true,
          optional: false,
          used: true,
          createdDate: '2021-11-05T13:57:09.902188',
          modifiedDate: '2021-11-05T13:57:09.902188',
          translations: [
            {
              language: 'KO',
              name: 'testKey5',
              url: 'https://naver.com',
              description: 'testtestKey5',
            },
            {
              language: 'ZH',
              name: 'testKey5',
              url: 'https://naver.com',
              description: 'testtestKey5',
            },
          ],
        },
      ],
    },
  },

  memberExpatAuthCodeSend: {
    url: '/memberExpatAuthCheck',
    params: undefined,
    results: {
      status: '200',
      payload: { authKey: 'hashValue0002034' },
    },
  },
  memberExpatAuthCheck: {
    url: '/memberExpatAuthCheck',
    params: { authKey: 'hashValue0002034', authCode: 'qwe123' },
    results: {
      status: '200',
      payload: { authResult: true },
    },
  },

  memberBasicInfo: {
    url: '/memberBasicInfo',
    params: {
      tokenKey: '12345',
    },
    results: {
      status: '200',
      payload: {
        memberType: 'EXPAT',
        memberName: '테스트',
        memberPhone: '+82-010',
        memberEmail: 'test@naver.com',
        memberAddress: {
          postCode: '',
          address: '',
          detailAddress: '',
        },
      },
    },
  },
  memberBasicInfoModify: {
    url: '/memberBasicInfoModify',
    params: undefined,
    results: {
      status: '200',
      payload: true,
    },
  },

  getDoctor: {
    url: '/getDoctor',
    params: { userId: null, condition: '', location: '' },
    results: {
      data: [...Array(10)].map((array, idx) => {
        return {
          name: ['정명의', '김명의', '박명의', '강명의', '최명의', '송명의'][idx % 6],
          hospital: ['부민병원', '순천향병원', '을지백병원', '삼성병원'][idx % 4],
          location: idx / 2,
          like: idx * 10,
          reserv: '비대면 진료',
          tag: ['소아청소년과', '내과', '이비인후과'][idx % 3],
        };
      }),
    },
  },
  getHistorySymptom: {
    url: 'getHistorySymptom',
    params: undefined,
    results: {
      data: [
        '해당 사항 없음',
        '당뇨',
        '고지혈증',
        '고혈압',
        '부정맥',
        '협심증',
        '심부전',
        '만성 B형간염',
        '갑상선기능합병증',
        '갑상선기능저하증',
        '전립선비대증',
        '위암',
        '대장암',
        '폐암',
        '간암',
        '유방암',
        '자궁암',
        '전립선암',
        '뇌졸증',
        '골다공증',
      ],
    },
  },
  getFamilySymptom: {
    url: 'getFamilySymptom',
    params: undefined,
    results: {
      data: [
        '해당 사항 없음',
        '당뇨',
        '고지혈증',
        '고혈압',
        '부정맥',
        '협심증',
        '심부전',
        '만성 B형간염',
        '위암',
        '대장암',
        '폐암',
        '간암',
        '유방암',
        '자궁암',
        '전립선암',
        '뇌졸증',
      ],
    },
  },
  getUserHealthInfo: {
    url: '/getUserHealthInfo',
    params: { userId: '' },
    results: {
      basic: {
        name: '홍길동',
        relation: '본인',
        profileImage: 'icon_empty',
        sexuality: '남성',
        birthDate: '1972-07-28',
        height: 173,
        weight: 73,
        bloodType: 'O RH+',
      },
      medicalHistory: ['해당 사항 없음', '고지혈증', '부정맥'],
      familyHistory: ['해당 사항 없음', '당뇨', '부정맥'],
      socialHistory: {
        dirinkingOrNot: '맥주',
        drinkingAmount: '한주에 1회/10잔',
        smokingOrNot: '흡연',
        smokingAmount: '하루에 5개피/4년',
      },
    },
  },
};

export const mockFail = {
  email: {
    url: '/email',
    params: { email: 'yes@naver.com' },
    results: {
      status: '200',
      payload: [{ authResult: true }],
    },
  },
  memberExpatAuthCodeSend: {
    url: '/memberExpatAuthCheck',
    params: { phone: '', email: '', memberName: '', sendType: '' },
    results: {
      status: '400',
      payload: { authKey: null },
    },
  },
  memberExpatAuthCheck: {
    url: '/memberExpatAuthCheck',
    params: { authKey: 'hashValue0002034', authCode: 'qwe124' },
    results: {
      status: '400',
      payload: { authResult: false },
    },
  },
};

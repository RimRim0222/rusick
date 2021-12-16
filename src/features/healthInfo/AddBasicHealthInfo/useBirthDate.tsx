import { useState } from 'react';
import { IBirthDateState } from '../types';

export function useBirthDate() {
  const [birthDate, setBirthDate] = useState<IBirthDateState>({
    year: null,
    month: null,
    day: null,
  });

  const changeUserBirthDate = (val: { [key: string]: number }) => {
    //년,월,일 각각의 정보를 스테이트에 따로 저장
    setBirthDate((state) => {
      return { ...state, ...val };
    });
  };

  const getFullBirthDate = (birthDate: IBirthDateState) => {
    const dateValue = Object.values(birthDate);
    const isBirthDateComplete = dateValue.filter((value) => value).length;
    //birthDate의 년,월,일 정보가 모두 기입됐을때
    if (isBirthDateComplete === 3) {
      //한자리 숫자 앞에 '0' 더하기
      const fullDates = dateValue.map((date) => {
        if (date.toString().length === 1) {
          return '0' + date;
        }
        return date;
      });
      //세가지 정보를 조합해 문자값으로 반환
      return fullDates.join('-');
    }
    return false;
  };
  return { birthDate, changeUserBirthDate, getFullBirthDate };
}

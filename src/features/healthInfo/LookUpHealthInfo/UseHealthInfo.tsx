import {
  UserHealthInfoResult,
  UserHealthInfoParam,
  IUserHealthInfo,
} from '@src/store/HealthInfoState';
import { useLoadable } from '@src/features/tester/useLoadable';
import { useEffect } from 'react';
import { useState } from 'react';

export function UseHealthInfo() {
  //회원 식별 정보 가져오기
  const userId = { userId: '' };

  const { handleParams, result, isLoading } = useLoadable<IUserHealthInfo>(
    UserHealthInfoParam,
    UserHealthInfoResult,
    false,
  );
  const [basicItems, setBasicItems] = useState<null | { key: string; value: string }[]>(null);
  const [medicalHistoryItems, setMedicalHistoryItems] = useState<null | string[]>(null);
  const [familyHistoryItems, setFamilyHistoryItems] = useState<null | string[]>(null);
  const [socialHistoryItems, setSocialHistoryItems] = useState<
    null | { key: string; value: string }[]
  >(null);

  useEffect(() => {
    handleParams(userId);
  }, []);

  useEffect(() => {
    if (!isLoading && result) {
      console.log(result);
      const { basic, medicalHistory, familyHistory, socialHistory } = result;
      const basicItems = [
        { key: '이름', value: basic.name },
        { key: '관계', value: basic.relation },
        { key: '프로필이미지', value: basic.profileImage },
        { key: '성별', value: basic.sexuality },
        { key: '생년월일', value: basic.birthDate },
        { key: '키', value: basic.height + 'cm' },
        { key: '몸무게', value: basic.weight + 'kg' },
        { key: '혈액형', value: basic.bloodType },
      ];

      const socialHistoryItems = [
        { key: '음주여부', value: socialHistory.drinkingOrnot },
        { key: '음주량', value: socialHistory.drinkingAmount },
        { key: '흡연여부', value: socialHistory.smokingOrNot },
        { key: '흡연량', value: socialHistory.smokingAmount },
      ];

      setBasicItems(basicItems);
      setMedicalHistoryItems(medicalHistory);
      setFamilyHistoryItems(familyHistory);
      setSocialHistoryItems(socialHistoryItems);
    }
  }, [result, isLoading]);
  return {
    basicItems,
    medicalHistoryItems,
    familyHistoryItems,
    socialHistoryItems,
    isLoading,
  };
}

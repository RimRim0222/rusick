export const drinkingOrNotOptions = [
  { id: '음주안함', text: '음주안함' },
  { id: '맥주', text: '맥주' },
  { id: '소주', text: '소주' },
];
export const drinkingTimesOptions = Array(7)
  .fill(0)
  .map((_, idx) => {
    return { id: `${idx + 1}회`, text: `${idx + 1}회` };
  });
export const drinkingAmountOptions = Array(30)
  .fill(0)
  .map((_, idx) => {
    if (idx === 29) {
      return { id: `${idx + 1}잔 이상`, text: `${idx + 1}잔 이상` };
    }
    return { id: `${idx + 1}잔`, text: `${idx + 1}잔` };
  });
export const smokingOrNotOptions = [
  { id: '금연', text: '금연' },
  { id: '흡연', text: '흡연' },
  { id: '1년이내 금연', text: '1년이내 금연' },
];
export const smokingTimesOptions = Array(20)
  .fill(0)
  .map((_, idx) => {
    return { id: `${idx + 1}개피`, text: `${idx + 1}개피` };
  });
export const smokingAmountOptions = Array(10)
  .fill(0)
  .map((_, idx) => {
    if (idx === 9) {
      return { id: `${idx + 1}년 이상`, text: `${idx + 1}년 이상` };
    }
    return { id: `${idx + 1}년`, text: `${idx + 1}년` };
  });

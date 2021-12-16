export enum CARD_TAGS {
  DISEASE = 'DISEASE',
  SYMPTOM = 'SYMPTOM',
}

export enum NATION_TYPE {
  LOCAL = 'LOCAL',
  EXPAT = 'EXPAT',
}

export interface ISymptomCard {
  /**
   * card id
   */
  id: string;
  /**
   * 상탄 태그 종류(만성질환, 증상, ...)
   */
  type: CARD_TAGS;
  /**
   * 증상(질환)명? 코드?
   */
  text: string;
  /**
   * 증상(질환) 이미지 파일명
   */
  image: string;
  /**
   * click active
   */
  active: boolean;
  /**
   * click card
   */
  onClick: (id: string) => void;
}

export interface ISubjectCard {
  /**
   * card id
   */
  id: string;
  /**
   * 증상(질환)명? 코드?
   */
  text: string;
  /**
   * 증상(질환) 이미지 파일명
   */
  image: string;
  /**
   * click active
   */
  active: boolean;
  /**
   * click card
   */
  onClick: (id: string) => void;
}

export interface IExpatCard {
  /**
   * 국적
   */
  type: NATION_TYPE;
  /**
   * card id
   */
  id: string;
  /**
   * click active
   */
  active: boolean;
  /**
   * click function
   */
  onClick: (id: string) => void;
}

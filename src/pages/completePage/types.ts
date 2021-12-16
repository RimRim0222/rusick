import { BUTTON_THEME } from '@src/components/button/types';
import { ILNG } from '@src/i18n';
import { RouteList } from '@src/routes/RouteList';

//하단 버튼 배열
export interface ICompleteButton {
  /**
   * 버튼 내부 텍스트
   */
  label: string;
  /**
   * 버튼 스타일 테마
   */
  theme: BUTTON_THEME;
  /**
   * 버튼 클릭 후 넘어갈 페이지 path
   */
  directPath: RouteList | null;
  /**
   * path외 버튼 event function
   */
  onComplete?: () => void;
}

interface ICompleteDescription {
  /**
   * strong : 파란색 sub title 영역,  normal : 검정섹 본문 영역
   */
  type: 'strong' | 'normal';
  text: ILNG | string;
}

export interface ICompleteData {
  [key: string]: {
    /**
     * 상단 이미지 영역
     */
    icon: string;
    /**
     * bolder title 영역
     */
    title: ILNG;
    /**
     * 중앙 텍스트 영역
     */
    description: ICompleteDescription[];
    /**
     * 버튼 배열
     */
    button: ICompleteButton[];
  };
}

/* 
    location state type
*/
export interface ICompleteState {
  text: string;
}

export interface RadioProps {
      /**
   * radio버튼 옆에 들어갈 텍스트 
   */
    label? : string;
    /**
     * button value 
     */
    value : string;
    /**
     * radio is able?
     */
    disabled? : boolean;
    /**
     * onchange handler
     */
    onChange : (val:string) => void;
}
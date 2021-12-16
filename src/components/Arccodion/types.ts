import { Dispatch, SetStateAction } from 'react';

export interface IArccodion {
  title: string;
  content: string;
  setContainerHeight: Dispatch<SetStateAction<string>>;
}

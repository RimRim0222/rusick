import { ISymptomImage } from '@src/store/SymptomState';

export interface ISymptomCards {
  cardData: ISymptomImage[];
  activeValues: string[];
  onClick: (cardId: string) => void;
}

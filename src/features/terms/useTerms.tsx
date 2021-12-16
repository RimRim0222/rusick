import { ICheckList } from '@src/components/checkbox/types';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IAgrees, AgreesAllListResult } from '@src/store/TermsState';
import text from './text';
import { useLoadableDefault } from '../tester/useLoadable';

export function useTerms() {
  const { t } = useTranslation();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [infoTarget, setInfoTarget] = useState('');
  const [checkItems, setCheckItems] = useState<ICheckList[]>([]);
  const { result, isLoading, isError } = useLoadableDefault<IAgrees[]>(AgreesAllListResult, false);

  useEffect(() => {
    if (!isLoading && result) {
      const checkItemsData: ICheckList[] = result.map((obj) => {
        const checkBoxLabel = `${obj.text && t(obj.text)} (${
          obj.isRequired ? t(text.textRequired) : t(text.textChoice)
        })`;
        return { id: obj.id, text: checkBoxLabel, isRequired: obj.isRequired };
      });
      setCheckItems(checkItemsData);
    }
  }, [result]);

  const onButtonCtrl = (val: string[]) => {
    const checkDisabled = val.length === 0 ? true : false;
    setButtonDisabled(checkDisabled);
  };

  const onInfoCtrl = (val: string) => {
    setInfoTarget(val);
  };

  return {
    checkItems,
    buttonDisabled,
    infoTarget,
    isLoading,
    isError,
    onButtonCtrl,
    onInfoCtrl,
  };
}

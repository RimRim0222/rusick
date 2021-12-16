import { Form } from './types';
import { useFormReducer } from './formReducer';

export function useForm() {
  const { FormReducer, dispatchReducer, checkValidation, hasError, canNext } = useFormReducer();
  const { inputValue } = FormReducer;

  const handleChange = (value: string) => {
    dispatchReducer({ type: Form.INPUT_VALUE, payload: value });
  };

  return {
    inputValue,
    hasError,
    canNext,
    handleChange,
  };
}

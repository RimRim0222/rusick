import styled from '@emotion/styled';
import { useFormReducer } from './useFormReducer';
import { EventForm } from './type';
import { Button } from '@src/components/button';

export function FormCheck() {
  const { testReducer, dispatchReducer, checkValidation, hasError, canNext } = useFormReducer();
  const { userName, phone, age } = testReducer;

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchReducer({ type: EventForm.NAME, payload: e.target.value });
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchReducer({ type: EventForm.PHONE, payload: e.target.value });
  };

  const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    dispatchReducer({ type: EventForm.AGE, payload: value });
  };

  const handleCheckNext = () => {
    checkValidation();
  };

  return (
    <FormCheckStyled>
      <span>Error? {hasError ? 'error' : 'passed'}</span>
      <span>Next? {canNext ? 'next' : 'rejected'}</span>
      <div>
        {userName.isRequired && '*'}
        <input type="text" onChange={handleChangeName} value={userName.value} />
      </div>
      <div>
        {phone.isRequired && '*'}
        <input type="text" onChange={handleChangePhone} value={phone.value} />
      </div>
      <div>
        {age.isRequired && '*'}
        <input type="text" onChange={handleChangeAge} value={age.value} />
      </div>
      <Button label="Test Button" onClick={handleCheckNext} />
    </FormCheckStyled>
  );
}

const FormCheckStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 300px;
`;

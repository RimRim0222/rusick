import styled from '@emotion/styled';
import { ChangeEvent, useRef } from 'react';
import { IFileUpload } from './types';

export function FileUpload({ onLoadFile }: IFileUpload) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file) {
      onLoadFile(file[0]);
    }
    e.preventDefault();
  };

  const onClickClear = () => {
    if (inputRef.current) inputRef.current.value = '';
    onLoadFile(null);
  };

  return (
    <FileUploadStyled>
      <input type="file" ref={inputRef} onChange={onChangeHandler} />
      <span onClick={onClickClear}>X</span>
    </FileUploadStyled>
  );
}

const FileUploadStyled = styled.div``;

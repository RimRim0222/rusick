import styled from '@emotion/styled';
import { cssx } from '@src/theme';
import { ChangeEvent, useEffect, useState } from 'react';
import { Image } from '@src/components/images';
import { IButtonImagePreview } from './types';

export function ButtonImagePreview({ id, defaultImage, onChange, disabled }: IButtonImagePreview) {
  const [file, setFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const handleFileOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = e.target.files;
    if (file) {
      reader.onloadend = () => {
        setFile(file[0]);
        setPreviewURL(reader.result as string);
      };

      reader.readAsDataURL(file[0]);
    }
    e.preventDefault();
  };

  const onFileReset = () => {
    setFile(null);
    setPreviewURL(null);
  };

  useEffect(() => {
    if (onChange) onChange({ id, file });
  }, [file]);

  const imagePreview = previewURL ? (
    <PreviewStyled>
      <Image image={previewURL as string} height="100%" />
      <button onClick={onFileReset}>clear</button>
    </PreviewStyled>
  ) : (
    <>+</>
  );

  return (
    // 상위 ul 태그 사용
    <ButtonImagePreviewStyled>
      <input
        type="file"
        accept="image/jpg,impge/png,image/jpeg,image/gif"
        name={`upload_${id}`}
        onChange={handleFileOnChange}
        disabled={disabled}
      />
      <PreviewWrapper>{imagePreview}</PreviewWrapper>
    </ButtonImagePreviewStyled>
  );
}

ButtonImagePreview.defaultProps = {
  defaultImage: '',
  disabled: false,
};

const ButtonImagePreviewStyled = styled.li`
  list-style: none;
  flex: 1;
  position: relative;
  height: 100px;
  margin-left: 20px;
  border: 1px solid red;
  &:first-of-type {
    margin-left: 0;
  }
  > input {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.000001;
    display: block;
    width: 100%;
    height: 100%;
  }
  > div {
    ${cssx.flexCenter}
    width: 100%;
    height: 100%;
  }
`;

const FileInput = styled.input``;

const PreviewWrapper = styled.div`
  button {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const PreviewStyled = styled.div`
  height: 100%;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

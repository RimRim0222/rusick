import styled from '@emotion/styled';
import { cssx } from '@src/theme/';
import { Icon, ICON_LIST } from '@src/components/icon';

export function FileUploader() {
  return (
    <FileUploaderWrapper>
      <ul>
        <li>
          <div className="left">
            <input type="file" />
          </div>
          <div className="right">
            <button>x</button>
          </div>
        </li>
      </ul>
    </FileUploaderWrapper>
  );
}

const FileUploaderWrapper = styled.div`
  li {
    ${cssx.flexBtw}
    border-bottom: 1px solid #9a9a9a;
    .right {
      flex: none;
    }
    button {
      padding: 10px;
      border: 1px solid;
    }
  }
`;

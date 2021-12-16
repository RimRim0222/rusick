import styled from '@emotion/styled';
import { ICON_LIST, Icon } from '@src/components/icon';
import { cssx } from '@src/theme';

export function LeftItem() {
  return (
    <LeftItemStyled>
      <div className="box-area">
        <div className="box">
          <div className="top">
            <strong>홍길동</strong>
            <span>남/38세</span>
            <Icon icon={ICON_LIST['menu_04']} width="30px" />
          </div>
          <div className="bottom">
            <ul>
              <li>
                <span className="left">11111</span>
                <span className="right">11111</span>
              </li>
              <li>
                <span className="left">2222</span>
                <span className="right">2222</span>
              </li>
              <li>
                <span className="left">3333</span>
                <span className="right">3333</span>
              </li>
              <li>
                <span className="left">4444</span>
                <span className="right">4444</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="box">
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
      </div>

      <div className="box-area">
        <div className="box">
          <div className="top">1</div>
          <div className="bottom">1</div>
        </div>
        <div className="box">
          <div className="top">2</div>
          <div className="bottom">2</div>
        </div>
      </div>
    </LeftItemStyled>
  );
}

const LeftItemStyled = styled.div`
  ${cssx.flexStart}
  flex-direction: column;
  .box-area {
    ${cssx.flexBtw}
    flex-direction: row;
    width: 100%;
    border: 1px dashed blue;
  }
  .box {
    width: 50%;
    border: 1px solid;
  }
  .top {
    ${cssx.flexStart}
  }
  .bottom {
    .left {
      color: #666;
    }
  }
`;

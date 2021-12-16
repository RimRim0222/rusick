import styled from '@emotion/styled';
import { LabelToggle, TOGGLE_SIZE } from '@src/components/toggle';
import { IPushSingle } from './types';
import { usePushSetting } from './usePushSetting';

interface ISingleCard {
  data: IPushSingle;
  onChange: (id: string) => void;
}

function SingleCard({ data, onChange }: ISingleCard): JSX.Element {
  return (
    <SettingSingleCardStyled>
      <LabelToggle
        id={data.id}
        checked={data.toggle}
        onChange={onChange}
        size={TOGGLE_SIZE.W50}
        disabled={false}
        label={data.label}
      />
      <CardCommentWrapper>
        <AgreeDateStyled>{data.agreeDate}</AgreeDateStyled>
        <CardTextStyled>{data.text}</CardTextStyled>
      </CardCommentWrapper>
    </SettingSingleCardStyled>
  );
}

export function SettingSingleCard() {
  const { pushSingle, onToggleSingle } = usePushSetting();

  const onChangehandler = (id: string) => {
    onToggleSingle(id);
  };

  return (
    <>
      {pushSingle.map((obj) => (
        <SingleCard key={obj.id} data={obj} onChange={onChangehandler} />
      ))}
    </>
  );
}

const SettingSingleCardStyled = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;
const CardCommentWrapper = styled.div`
  padding: 0 10px;
`;

const AgreeDateStyled = styled.div``;
const CardTextStyled = styled.div`
  padding: 10px 0;
`;

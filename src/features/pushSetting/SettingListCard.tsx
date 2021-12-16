import styled from '@emotion/styled';
import { LabelToggle, TOGGLE_SIZE } from '@src/components/toggle';
import { usePushSetting } from './usePushSetting';

export function SettingListCard() {
  const { pushList, onToggleList } = usePushSetting();

  const onChangehandler = (id: string) => {
    onToggleList(id);
  };

  return (
    <SettingListCardStyled>
      {pushList.map((obj) => (
        <LabelToggle
          key={obj.id}
          id={obj.id}
          checked={obj.toggle}
          onChange={onChangehandler}
          size={TOGGLE_SIZE.W50}
          disabled={false}
          label={obj.text}
        />
      ))}
    </SettingListCardStyled>
  );
}

const SettingListCardStyled = styled.div`
  border-bottom: 1px solid #ddd;
`;

import styled from '@emotion/styled';
import { LNG_KEY } from '@src/i18n';
import { useTranslation } from 'react-i18next';
import { Icon, ICON_LIST } from '@src/components/icon';
import { cssx } from '@src/theme/';
import { useNavigate } from 'react-router-dom';
import { RouteList } from '@src/routes/RouteList';

interface PropTypes {
  type: 'DISEASE' | 'SUBJECT';
}

export function MainSubTitle({ type }: PropTypes) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const subTitle =
    type === 'DISEASE' ? t(LNG_KEY.MAIN_SUB_TITLE_DISEASE) : t(LNG_KEY.MAIN_SUB_TITLE_SUBJECT);

  const onClickHandler = () => {
    switch (type) {
      case 'DISEASE':
        //증상/질환 선택 페이지로 이동
        //`/untactReservation/symptom`
        navigate(RouteList.UNTACT_RESERVATION_SYMPTOM);
        break;

      case 'SUBJECT':
        //진료과 선택 페이지로 이동
        //`/untactReservation/subject`
        navigate(RouteList.UNTACT_RESERVATION_SUBJECT);
        break;

      default:
        throw new Error();
    }
  };

  return (
    <MainSubTitleStyled>
      <TextStyled>{subTitle}</TextStyled>
      <ButtonStyled onClick={onClickHandler}>
        {t(LNG_KEY.MAIN_SUB_TITLE_MORE)}
        <Icon icon={ICON_LIST['arrow_24x24']} width={'auto'} />
      </ButtonStyled>
    </MainSubTitleStyled>
  );
}

const MainSubTitleStyled = styled.div`
  /* line-height: 50px; */
  overflow: hidden;
  margin-top: 35px;
  margin-bottom: 15px;
  ${cssx.flexBtw}
`;

const TextStyled = styled.span`
  /* float: left; */
  ${(props) => props.theme.fonts.h2_1_B}
`;

const ButtonStyled = styled.span`
  /* float: right; */
  ${(props) => props.theme.fonts.bd3_R}
  img {
    width: 6px;
    height: 9px;
    margin-left: 6px;
    vertical-align: middle;
  }
`;

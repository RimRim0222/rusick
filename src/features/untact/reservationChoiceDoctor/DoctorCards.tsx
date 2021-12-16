import styled from '@emotion/styled';
import { DoctorCard } from '@src/components/cards';
import { useLayer } from '@src/components/modal/useLayer';
import { IDoctor } from '@src/features/remoteCall/type';
import { usePatientSocket } from '@src/features/remoteCall/usePatientSocket';
import { LNG_KEY } from '@src/i18n';
import { HeaderStep } from '@src/layout/header';
import { isEmpty } from 'lodash';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DoctorInfoFeatures } from '../reservationDoctorInfo';
import { useReservation } from '../useReservation';

export function DoctorCards() {
  const { t } = useTranslation();
  // const { result, isLoading } = useLoadable<IDoctor[]>(DoctorParams, DoctorResult, []);

  const { contents, dispatch, onSave } = useReservation();
  const { onOpenLayer, handleCloseClick, allLayerClear } = useLayer(1);
  const activeId = contents.doctorValue;

  const { doctorList, patientId, handleResetSocket } = usePatientSocket();

  const onClickDoctor = (doctorId: string) => {
    const payload = { ...{ doctorId, memberId: patientId } };
    dispatch({ type: 'doctorValue', payload });
  };

  const setLayerPrev = () => {
    //의사 선택 취소
    handleCloseClick();

    const payload = { doctorId: '', memberId: '' };
    dispatch({ type: 'doctorValue', payload });
  };

  const onClickReserve = () => {
    handleCloseClick();
    onSave(HeaderStep.STEP3);
  };

  const openDoctorInfoLayer = () => {
    const doctorId = '';
    onOpenLayer({
      level: 1,
      contents: {
        id: `doctorInfo_${doctorId}`,
        isOpen: true,
        title: t(LNG_KEY.HEADER_RESERVATION_DOCTR_INFO),
        usePrev: true,
        useClose: false,
        onClickPrev: setLayerPrev,
        contents: <DoctorInfoFeatures onClickReserve={onClickReserve} />,
      },
    });
  };

  useEffect(() => {
    if (!isEmpty(contents.doctorValue)) openDoctorInfoLayer();
  }, [contents.doctorValue]);

  useEffect(() => {
    handleResetSocket();
    allLayerClear();
  }, []);

  return (
    <DoctorCardsStyled>
      <DoctorCardsContainer>
        {doctorList.map((doctor: IDoctor) => {
          const { id, socketId, name, status } = doctor;

          return (
            <DoctorCard
              key={id}
              name={name}
              hospital={''}
              location={0}
              like={0}
              reserv={''}
              tag={''}
              active={activeId === name}
              onClick={() => onClickDoctor(id)}
            />
          );
        })}
      </DoctorCardsContainer>
    </DoctorCardsStyled>
  );
}

const DoctorCardsStyled = styled.div``;
const DoctorCardsContainer = styled.div``;

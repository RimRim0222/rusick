import { useEffect, useMemo, useRef, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import { IDoctor, IOfferCare, IPatient, IRequested } from './type';
import { useNavigate } from 'react-router-dom';
import { SocketDomain } from './config';
import { nanoid } from 'nanoid';
import { RouteList } from '@src/routes/RouteList';
import { isEmpty } from 'lodash';
import { PatientCallPopup } from './PatientCallPopup';
import { useSetRecoilState } from 'recoil';
import { PopupState } from '@src/store/PopupState';
import { LNG_KEY } from '@src/i18n';

const PATIENT_INFO: IPatient = {
  id: nanoid(),
  name: '환자 1번',
  socketId: '',
};

export function usePatientSocket() {
  const socketRef = useRef<Socket>();
  const [doctorList, setDoctorList] = useState<IDoctor[]>([]);
  const [offerCareInfo, setOfferCareInfo] = useState<IOfferCare>();
  const setPopupState = useSetRecoilState(PopupState);

  const navigate = useNavigate();

  useEffect(() => {
    socketRef.current = io(SocketDomain);
    const socket = socketRef.current;

    socket.on('getDoctorList', (getDoctorList: IDoctor[]) => {
      setDoctorList(getDoctorList);
    });

    socket.on('offerCare', (offerInfo: IOfferCare) => {
      setOfferCareInfo(offerInfo);
    });

    socket.on('reset', () => {
      socket.emit('joinPatientRoom', PATIENT_INFO);
    });

    socket.emit('joinPatientRoom', PATIENT_INFO);

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  const handleSocketEmit = (type: string, message: unknown) => {
    if (socketRef.current) {
      socketRef.current.emit(type, message);
    }
  };

  const createRequest = (id: string) => {
    const requestCareInfo: IRequested = {
      patientId: PATIENT_INFO.id,
      doctorId: id,
    };
    handleSocketEmit('requestCare', requestCareInfo);
  };

  const handleResetSocket = () => {
    handleSocketEmit('reset', '');
    setOfferCareInfo(undefined);
  };

  const handleOfferConfirm = () => {
    if (offerCareInfo) {
      navigate(RouteList.PATIENT_CALL, {
        state: { roomId: offerCareInfo?.roomId },
      });
    }
  };
  // const isOffered = doctor.id === offerCareInfo?.doctorId;
  // (!isOffered) 진료요청 버튼 노출 : 진료수락 버튼 노출

  return {
    patientId: nanoid(), //환자 id(random)
    doctorList, //진료가능 의사 리스트
    createRequest, //진료 요청
    offerCareInfo,
    handleOfferConfirm, //진료 수락
    handleResetSocket, //reset
  };
}

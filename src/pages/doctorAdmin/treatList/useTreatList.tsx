import { useEffect, useRef, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import { IDoctor, IOfferCare, IPatient } from '@src/features/remoteCall/type';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { SocketDomain } from '@src/features/remoteCall/config';
import { RouteList } from '@src/routes/RouteList';

const DOCTOR_INFO: IDoctor = {
  id: nanoid(),
  name: '의사 1번',
  socketId: '',
};

export function useTreatList() {
  const socketRef = useRef<Socket>();
  const [patientList, setPatientList] = useState<IPatient[]>([]);
  const [offerCareInfo, setOfferCareInfo] = useState<IOfferCare>();

  const navigate = useNavigate();

  useEffect(() => {
    socketRef.current = io(SocketDomain);
    const socket = socketRef.current;

    //진료를 요청한 환자정보 데이터 서버에서 받음
    socket.on('getRequestPatientList', (getPatientList: IPatient[]) => {
      setPatientList(getPatientList);
    });

    //방번호, 환자ID, 의사ID 데이터를 서버에서 받음
    socket.on('offerCare', (offerInfo: IOfferCare) => {
      setOfferCareInfo(offerInfo);
    });

    // 소켓 데이터 초기화를 서버에 전달
    socket.on('reset', () => {
      socket.emit('joinDoctorRoom', DOCTOR_INFO);
    });

    // 의사 데이터 서버에 전달
    socket.emit('joinDoctorRoom', DOCTOR_INFO);

    return () => {
      // 언마운트시 소켓연결 해제
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (offerCareInfo) {
      navigate(RouteList.DOCTOR_TREAT_DETAIL, {
        state: { roomId: offerCareInfo?.roomId },
      });
    }
  }, [offerCareInfo]);

  // 진료를 위한 방번호, 환자ID, 의료진ID 서버로 전송
  const handleSocketEmit = (type: string, message: unknown) => {
    // 소켓정보가 있다면 전달
    if (socketRef.current) {
      socketRef.current.emit(type, message);
    }
  };

  const createRequest = (id: string) => {
    const roomId = nanoid();
    handleSocketEmit('offerCare', {
      roomId,
      patientId: id,
      doctorId: DOCTOR_INFO.id,
    });
  };

  const handleJoinCareRoom = () => {
    // 진료요청 정보가 있다면 진료정보의 방ID를 전달하여 페이지 이동
    if (offerCareInfo) {
      navigate(RouteList.DOCTOR_CALL, {
        state: { roomId: offerCareInfo?.roomId },
      });
    }
  };

  return {
    patientList,
    createRequest,
  };
}

import { RouteList } from '@src/routes/RouteList';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useWebRTC } from '@src/features/remoteCall/useWebRTC';

export function useDoctorCall() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const roomId = state?.roomId;
  const { setChatRoomId, setVideoTracks, localVideoRef, remoteVideoRef } = useWebRTC();

  const handleBackToRoom = () => {
    return navigate(RouteList.DOCTOR_TREAT_LIST, { state: '' });
  };

  if (!roomId) {
    handleBackToRoom();
  }

  useEffect(() => {
    if (roomId) {
      setChatRoomId(roomId);
    }
  }, [roomId]);

  return {
    localVideoRef,
    remoteVideoRef,
    setVideoTracks,
    handleBackToRoom,
  };
}

import { RouteList } from '@src/routes/RouteList';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useWebRTC } from './useWebRTC';

export function PatientCall() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const roomId = state?.roomId;

  const { setChatRoomId, setVideoTracks, localVideoRef, remoteVideoRef } = useWebRTC();

  const handleBackToRoom = () => {
    navigate(RouteList.PATIENT_ROOM);
  };

  if (!roomId) {
    handleBackToRoom();
  }

  useEffect(() => {
    if (roomId) {
      setChatRoomId(roomId);
    }
  }, [roomId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button onClick={setVideoTracks}>통화 시작</button>
      <button onClick={handleBackToRoom}>방으로 되돌아가기</button>
      <video
        id={'localVideo'}
        autoPlay
        playsInline
        controls={false}
        ref={localVideoRef}
        width={800}
        height={800}
      />
      <video
        id={'remoteVideo'}
        autoPlay
        playsInline
        controls={false}
        ref={remoteVideoRef}
        width={200}
        height={200}
      />
    </div>
  );
}

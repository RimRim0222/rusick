import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { PC_CONFIG, SocketDomain } from './config';

const offerOptions = {
  offerToReceiveVideo: true,
  offerToReceiveAudio: true,
};

export function useWebRTC() {
  const socketRef = useRef<Socket>();
  const pcRef = useRef<RTCPeerConnection>();
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  const [roomId, setRoomId] = useState<string>('');

  const setChatRoomId = (chatRoomId: string) => {
    setRoomId(chatRoomId);
  };

  const createOffer = async () => {
    if (!(pcRef.current && socketRef.current)) return;
    try {
      const sdp = await pcRef.current.createOffer(offerOptions);

      await pcRef.current.setLocalDescription(new RTCSessionDescription(sdp));
      socketRef.current.emit('offer', sdp);
    } catch (e) {
      console.error(e);
    }
  };

  const createAnswer = async (sdp: RTCSessionDescription) => {
    if (!(pcRef.current && socketRef.current)) return;
    try {
      await pcRef.current.setRemoteDescription(new RTCSessionDescription(sdp));

      const mySdp = await pcRef.current.createAnswer(offerOptions);

      await pcRef.current.setLocalDescription(new RTCSessionDescription(mySdp));
      socketRef.current.emit('answer', mySdp);
    } catch (e) {
      console.error(e);
    }
  };

  const closeConnection = () => {
    if (socketRef.current) {
      socketRef.current.disconnect();
    }
    if (pcRef.current) {
      pcRef.current.close();
    }
  };

  const setVideoTracks = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      if (localVideoRef.current) localVideoRef.current.srcObject = stream;
      if (!(pcRef.current && socketRef.current)) {
        return;
      }
      stream.getTracks().forEach((track) => {
        if (!pcRef.current) return;
        pcRef.current.addTrack(track, stream);
      });
      pcRef.current.oniceconnectionstatechange = (e) => {
        console.log('current state', e);
      };
      pcRef.current.onicecandidate = (e) => {
        if (e.candidate) {
          if (!socketRef.current) return;
          socketRef.current.emit('candidate', e.candidate);
        }
      };
      pcRef.current.ontrack = (ev) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = ev.streams[0];
        }
      };
      socketRef.current.emit('join_room', roomId);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    socketRef.current = io(SocketDomain);
    pcRef.current = new RTCPeerConnection(PC_CONFIG);

    const socket = socketRef.current;

    socket.on('all_users', (allUsers: Array<string>) => {
      if (allUsers.length > 0) {
        createOffer();
      }
    });

    socket.on('getOffer', (sdp: RTCSessionDescription) => {
      createAnswer(sdp);
    });

    socket.on('getAnswer', (sdp: RTCSessionDescription) => {
      if (!pcRef.current) return;
      pcRef.current.setRemoteDescription(new RTCSessionDescription(sdp));
    });

    socket.on('getCandidate', async (candidate: RTCIceCandidateInit) => {
      if (!pcRef.current) return;
      await pcRef.current.addIceCandidate(new RTCIceCandidate(candidate));
    });

    socket.on('disconnect', () => {
      console.log('disconnect', socket.id);
    });

    return () => {
      closeConnection();
    };
  }, []);

  return { setChatRoomId, setVideoTracks, localVideoRef, remoteVideoRef };
}

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useDoctorCall } from './useDoctorCall';
import { TextArea } from '@src/components/textArea';

export function CenterItem() {
  const { localVideoRef, remoteVideoRef, setVideoTracks, handleBackToRoom } = useDoctorCall();

  const handleChange = () => {
    return true;
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button onClick={setVideoTracks}>통화 시작</button>
        <button onClick={handleBackToRoom}>방으로 되돌아가기</button>
        <div>
          <video
            id={'localVideo'}
            autoPlay
            playsInline
            controls={false}
            ref={localVideoRef}
            width={500}
            height={500}
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

        <div>
          <TextArea onChange={handleChange} inputValue={''} />
        </div>
        <div>
          <div>토글영역 [처방전 첨부]</div>
          <div>첨부파일영역</div>
        </div>
        <div>
          <div>토글영역 [자료정보 전달]</div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>토글영역 [기타 재증명 첨부]</div>
          <div>첨부파일영역</div>
        </div>
      </div>
    </>
  );
}

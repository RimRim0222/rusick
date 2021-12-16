import styled from '@emotion/styled';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer } from '@src/layout/footer';
import { ErrorPage } from '@src/pages/error';
import { LoginPage, AuthPage } from '@src/pages/login';
import { TestStepContainer } from '@src/container/testStep';
import { MemberJoinContainer } from '@src/container/memberJoin';
import { TestPage, LoginTestPage, AuthTestPage } from '@src/pages/testPage';

import { ProtectedRouter } from './ProtectedRouter';
import { HeaderRouter } from './HeaderRouter';
import { AuthRouter } from './AuthRouter';
import { MainPage } from '@src/pages/mainPage/MainPage';

import { GateRouter } from './GateRouter';
import { RouteList } from './RouteList';
import { CompletePage } from '@src/pages/completePage';

import { MemberInfoPage } from '@src/pages/membeInfo/MemberInfoPage';

import { Modal, Alert, Layer1, Layer2, Layer3, Popup } from '@components/modal';
import { TestArccodion } from '@src/components/Arccodion/TestArccodion';

import { UntactReservationSymptomContainer } from '@src/container/untactReservation';
import { UntactReservationSubjectContainer } from '@src/container/untactReservation/UntactReservationSubjectContainer';
import { MemberAuthExpatPage } from '@src/pages/memberAuthExpat/MemberAuthExpatPage';
import { MemberAuthTypeCheckPage } from '@src/pages/memberAuthType/MemberAuthTypeCheckPage';
import { PatientRoom } from '@src/features/remoteCall/PatientRoom';
import { DoctorRoom } from '@src/features/remoteCall/DoctorRoom';
import { PatientCall } from '@src/features/remoteCall/PatientCall';
import { DoctorCall } from '@src/features/remoteCall/DoctorCall';
import { MyInfoPage } from '@src/pages/myInfo/MyInfoPage';
import { MenuPage } from '@src/pages/menuPage/MenuPage';
import { TreatListPage } from '@src/pages/doctorAdmin/treatList/TreatListPage';
import { TreatDetailPage } from '@src/pages/doctorAdmin/treatDetail/TreatDetailPage';
import { PatientCallPopup } from '@src/features/remoteCall/PatientCallPopup';

export function RouterManager() {
  return (
    <Router>
      <HeaderRouter />
      <BodyStyled>
        <Routes>
          <Route path={RouteList.DOCTOR_TREAT_LIST} element={<TreatListPage />} />
          <Route path={RouteList.DOCTOR_TREAT_DETAIL} element={<TreatDetailPage />} />
          <Route path={RouteList.MAIN} element={<MainPage />} />
          <Route path={RouteList.TEST_PAGE} element={<TestPage />} />
          <Route path={RouteList.LOGIN} element={<LoginPage />} />
          <Route path={RouteList.GATE} element={<GateRouter />} />
          <Route path={RouteList.ALL_MENU} element={<MenuPage />} />
          <Route
            path={RouteList.AUTH}
            element={
              <ProtectedRouter>
                <AuthPage />
              </ProtectedRouter>
            }
          />
          <Route
            path={RouteList.LOGIN_TEST}
            element={
              <ProtectedRouter>
                <LoginTestPage />
              </ProtectedRouter>
            }
          />
          <Route
            path={RouteList.AUTH_TEST}
            element={
              <AuthRouter>
                <AuthTestPage />
              </AuthRouter>
            }
          />
          <Route path={RouteList.TEST_STEP} element={<TestStepContainer />} />
          <Route path={RouteList.MEMBER_JOIN} element={<MemberJoinContainer />} />
          <Route path={RouteList.MEMBER_MYINFO} element={<MyInfoPage />} />
          <Route
            path={RouteList.MEMBER_INFO}
            element={
              <AuthRouter redirectPath={RouteList.MEMBER_AUTH_SELECT}>
                <MemberInfoPage />
              </AuthRouter>
            }
          />
          <Route path={RouteList.MEMBER_AUTH_SELECT} element={<MemberAuthTypeCheckPage />} />
          <Route path={RouteList.MEMBER_AUTH_EXPAT} element={<MemberAuthExpatPage />} />

          <Route path={RouteList.PASSWORD_SEARCH_COMPLETE} element={<CompletePage />} />
          <Route path={RouteList.JOIN_COMPLETE} element={<CompletePage />} />
          <Route path={RouteList.MODIFY_COMPLETE} element={<CompletePage />} />
          <Route path={RouteList.MODIFY_COMPLETE_PAYMENT} element={<CompletePage />} />
          <Route path={RouteList.UNTACT_RESERVATION_COMPLETE} element={<CompletePage />} />

          <Route
            path={RouteList.UNTACT_RESERVATION_SYMPTOM}
            element={<UntactReservationSymptomContainer />}
          />
          <Route
            path={RouteList.UNTACT_RESERVATION_SUBJECT}
            element={<UntactReservationSubjectContainer />}
          />
          <Route path={RouteList.PATIENT_ROOM} element={<PatientRoom />} />
          <Route path={RouteList.DOCTOR_ROOM} element={<DoctorRoom />} />
          <Route path={RouteList.PATIENT_CALL} element={<PatientCall />} />
          <Route path={RouteList.DOCTOR_CALL} element={<DoctorCall />} />
          <Route path={'/arccodion'} element={<TestArccodion />} />
          <Route element={<ErrorPage />} />
        </Routes>
      </BodyStyled>
      <Footer />
      <Modal />
      <Alert />
      <Layer1 />
      <Layer2 />
      <Layer3 />
      <Popup />
      <PatientCallPopup />
    </Router>
  );
}

const BodyStyled = styled.div`
  padding: 0px 20px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  min-height: calc(100% - 50px);
`;

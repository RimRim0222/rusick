import { TestPage } from '@src/pages/testPage';
import { Route, Routes } from 'react-router-dom';

export function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
    </Routes>
  );
}

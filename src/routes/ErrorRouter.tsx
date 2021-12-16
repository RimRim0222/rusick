import { ErrorPage } from '@src/pages/error';
import { Route } from 'react-router-dom';

export function ErrorRouter() {
  return <Route element={<ErrorPage />} />;
}

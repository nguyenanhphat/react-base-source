import { lazy } from 'react';
import * as routePath from '../route-path';

const LoginPage = lazy(() => import('components/pages/login/index'));

const routes = [
  {
    path: routePath.LOGIN,
    component: LoginPage,
    exact: true,
  }
];
export default routes;

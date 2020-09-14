import { lazy } from 'react';
import * as routePath from '../route-path';
const HomePage = lazy(() => import('components/pages/home'));

const routes = [
  {
    path: routePath.HOME,
    component: HomePage,
    exact: true
  },
];

export default routes;

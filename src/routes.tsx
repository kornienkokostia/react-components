import { RouteObject } from 'react-router';
import { MainPage } from './pages/main-page/MainPage';
import { AboutPage } from './pages/about-page/AboutPage';
import { FormsPage } from './pages/forms-page/FormsPage';
import { ErrorPage } from './pages/error-page/ErrorPage';
import { Layout } from './components/layout/Layout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'forms',
        element: <FormsPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
];

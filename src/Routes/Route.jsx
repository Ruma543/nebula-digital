import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Solutions from '../Pages/Solutions/Solutions';
import UseCases from '../Pages/UseCases/UseCases';
import About from '../Pages/About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/solutions',
        element: <Solutions></Solutions>,
      },
      {
        path: '/useCases',
        element: <UseCases></UseCases>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
    ],
  },
]);

export default router;

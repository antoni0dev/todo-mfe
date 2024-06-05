import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { PATHS } from './constants';
import TodoListPage from './pages/TodoListPage';

export const router = createBrowserRouter(
  [
    {
      element: <App />,
      path: PATHS.ROOT,
      children: [
        {
          element: <TodoListPage />,
          index: true,
        },
      ],
    },
  ],
  { basename: '/todos' },
);

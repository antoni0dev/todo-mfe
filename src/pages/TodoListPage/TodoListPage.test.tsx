import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoListPage from './';

jest.mock('../../components/TodosController', () => ({
  TodosController: jest.fn(() => <div>TodosController</div>),
}));

test('renders TodoListPage with the correct title', () => {
  render(<TodoListPage />);
  const todayDate = new Date().toLocaleDateString();
  expect(screen.getByText(`Todos for ${todayDate}`)).toBeInTheDocument();
  expect(screen.getByText('TodosController')).toBeInTheDocument();
});

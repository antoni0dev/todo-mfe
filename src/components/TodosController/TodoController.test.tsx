import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodosController } from './';
import { useTodos } from '../../hooks/useTodos';

jest.mock('../../hooks/useTodos');

const mockUseTodos = useTodos as jest.Mock;

beforeEach(() => {
  mockUseTodos.mockReturnValue({
    input: '',
    todos: [],
    filter: 'ALL',
    setInput: jest.fn(),
    addTodo: jest.fn(),
    toggleTodo: jest.fn(),
    setFilter: jest.fn(),
  });
});

test('renders TodosController with input, filter, and list', () => {
  render(<TodosController />);
  expect(screen.getByPlaceholderText('Start typing a todo...')).toBeInTheDocument();
  expect(screen.getByText('ALL')).toBeInTheDocument();
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodosList from './';
import { Todo } from '../../lib/@types/todos';

const mockTodos: Todo[] = [
  { id: '1', name: 'Test Todo 1', isCompleted: false },
  { id: '2', name: 'Test Todo 2', isCompleted: true },
];

test('renders TodosList with todos and handles toggle', () => {
  const mockOnToggleTodo = jest.fn();

  render(<TodosList list={mockTodos} onToggleTodo={mockOnToggleTodo} />);

  mockTodos.forEach((todo, index) => {
    expect(screen.getByText(todo.name)).toBeInTheDocument();
    const checkboxes = screen.getAllByRole('checkbox');
    const checkbox = checkboxes[index] as HTMLInputElement;
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(todo.isCompleted);

    fireEvent.click(checkbox);
    expect(mockOnToggleTodo).toHaveBeenCalledWith(index);
  });
});

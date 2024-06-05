import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodosInput from './';

describe('TodosInput', () => {
  test('renders input and button', () => {
    render(<TodosInput input='' onInputChange={() => {}} onAddTodo={() => {}} />);
    expect(screen.getByPlaceholderText('Start typing a todo...')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  test('calls onInputChange when typing', () => {
    const onInputChange = jest.fn();
    render(<TodosInput input='' onInputChange={onInputChange} onAddTodo={() => {}} />);
    fireEvent.change(screen.getByPlaceholderText('Start typing a todo...'), {
      target: { value: 'New Todo' },
    });
    expect(onInputChange).toHaveBeenCalledWith(expect.anything());
  });

  test('calls onAddTodo when Add button is clicked', () => {
    const onAddTodo = jest.fn();
    render(<TodosInput input='New Todo' onInputChange={() => {}} onAddTodo={onAddTodo} />);
    fireEvent.click(screen.getByText('Add'));
    expect(onAddTodo).toHaveBeenCalled();
  });
});

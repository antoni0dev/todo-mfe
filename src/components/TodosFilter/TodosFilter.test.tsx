import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodosFilter } from './';
import { TodosFilterType } from '../../lib/@types/todos';

describe('TodosFilter', () => {
  it('renders TodosFilter with all filter buttons', () => {
    const mockOnFilterChange = jest.fn();
    const currentFilter: TodosFilterType = 'ALL';

    render(<TodosFilter filter={currentFilter} onFilterChange={mockOnFilterChange} />);

    expect(screen.getByText(/all/i)).toBeInTheDocument();
    expect(screen.getByText(/active/i)).toBeInTheDocument();
    expect(screen.getByText(/completed/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/all/i));
    expect(mockOnFilterChange).toHaveBeenCalledWith('ALL');
  });
});

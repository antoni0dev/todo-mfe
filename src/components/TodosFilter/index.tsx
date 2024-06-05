import React, { FC } from 'react';
import { Wrapper, FilterButton } from './TodosFilter.styled';
import { TODO_FILTERS } from '../../constants';
import { TodosFilterType } from '../../lib/@types/todos';

interface TodosFilterProps {
  filter: TodosFilterType;
  onFilterChange: (filter: TodosFilterType) => void;
}

export const TodosFilter: FC<TodosFilterProps> = ({ filter: currentFilter, onFilterChange }) => {
  return (
    <Wrapper>
      {TODO_FILTERS.map((filter) => (
        <FilterButton
          key={filter}
          $isActive={currentFilter === filter}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </FilterButton>
      ))}
    </Wrapper>
  );
};

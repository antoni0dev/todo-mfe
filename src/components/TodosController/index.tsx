import React, { ChangeEvent } from 'react';
import { Wrapper, InputAndFilterWrapper, ErrorText } from './TodosController.styled';
import TodosInput from '../TodosInput';
import TodosList from '../TodosList';
import { useTodos } from '../../hooks/useTodos';
import { TodosFilter } from '../TodosFilter';

export const TodosController = () => {
  const { input, todos, filter, setInput, addTodo, toggleTodo, setFilter, error } = useTodos();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  const handleAddTodo = () => addTodo();
  const handleToggleTodo = (index: number) => toggleTodo(index);

  return (
    <Wrapper>
      <InputAndFilterWrapper>
        <TodosInput input={input} onInputChange={handleInputChange} onAddTodo={handleAddTodo} />
        <TodosFilter filter={filter} onFilterChange={setFilter} />
      </InputAndFilterWrapper>
      {error ? (
        <ErrorText>{error}</ErrorText>
      ) : (
        <TodosList list={todos} onToggleTodo={handleToggleTodo} />
      )}
    </Wrapper>
  );
};

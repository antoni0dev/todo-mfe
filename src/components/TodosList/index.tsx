import React, { FC } from 'react';
import { Wrapper, ListItem, TodoName, DoneCheckbox } from './TodoList.styled';
import { Todo } from '../../lib/@types/todos';

interface TodosListProps {
  list: Todo[];
  onToggleTodo: (index: number) => void;
}

const TodosList: FC<TodosListProps> = ({ list, onToggleTodo }) => {
  return (
    <Wrapper>
      {list.map(({ id, isCompleted, name }, index) => {
        return (
          <ListItem key={id}>
            <TodoName $isCompleted={isCompleted}>{name}</TodoName>
            <DoneCheckbox
              type='checkbox'
              value={isCompleted ? 'Not Done' : 'Done'}
              checked={isCompleted}
              $isCompleted={isCompleted}
              onChange={() => onToggleTodo(index)}
            />
          </ListItem>
        );
      })}
    </Wrapper>
  );
};

export default TodosList;

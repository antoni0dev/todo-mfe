import React from 'react';
import { MaxWidthWrapper, Title } from './TodoListPage.styled';
import { TodosController } from '../../components/TodosController';

const TodoListPage = () => {
  const todayDate = new Date();
  const formattedTodayDate = todayDate.toLocaleDateString();

  return (
    <MaxWidthWrapper>
      <Title>Todos for {formattedTodayDate}</Title>
      <TodosController />
    </MaxWidthWrapper>
  );
};

export default TodoListPage;

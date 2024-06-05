import React, { ChangeEventHandler, FC, KeyboardEventHandler } from 'react';
import { Input, Wrapper, Button } from './TodosInput.styled';

interface TodosInputProps {
  input: string;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
  onAddTodo: () => void;
}

const TodosInput: FC<TodosInputProps> = ({ input, onInputChange, onAddTodo }) => {
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter' && input) {
      onAddTodo();
    }
  };

  return (
    <Wrapper>
      <Input
        placeholder='Start typing a todo...'
        type='text'
        value={input}
        onChange={onInputChange}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={onAddTodo} disabled={!input}>
        Add
      </Button>
    </Wrapper>
  );
};

export default TodosInput;

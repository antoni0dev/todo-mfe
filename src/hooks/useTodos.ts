import { useEffect, useReducer, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Todo, TodosFilterType } from '../lib/@types/todos';

interface State {
  input: string;
  todos: Todo[];
  filter: TodosFilterType;
}

type Action =
  | { type: 'SET_INPUT'; payload: string }
  | { type: 'ADD_TODO' }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'SET_FILTER'; payload: TodosFilterType }
  | { type: 'SET_TODOS'; payload: Todo[] };

const initialState: State = {
  input: '',
  todos: [],
  filter: 'ALL',
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, input: action.payload };
    case 'ADD_TODO':
      if (state.input.trim() === '') return state;
      return {
        ...state,
        todos: [...state.todos, { id: uuid(), name: state.input, isCompleted: false }],
        input: '',
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo,
        ),
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_TODOS':
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

const loadTodos = (): { data: Todo[] | null; error: string | null } => {
  try {
    const storedTodos = localStorage.getItem('todos');
    console.log('stored todos', storedTodos);
    return { data: storedTodos ? JSON.parse(storedTodos) : [], error: null };
  } catch (error) {
    console.error('Could not load todos from localStorage', error);
    return { data: null, error: 'Could not load todos from localStorage' };
  }
};

const saveTodos = (todos: Todo[]) => {
  try {
    localStorage.setItem('todos', JSON.stringify(todos));
  } catch (error) {
    console.error('Could not save todos to localStorage', error);
  }
};

export const useTodos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const { data: todos, error } = loadTodos();
    if (todos) {
      dispatch({ type: 'SET_TODOS', payload: todos });
    }
    if (error) {
      setError(error);
    }
  }, []);

  useEffect(() => {
    saveTodos(state.todos);
  }, [state.todos]);

  const setInput = (input: string) => dispatch({ type: 'SET_INPUT', payload: input });
  const addTodo = () => dispatch({ type: 'ADD_TODO' });
  const toggleTodo = (index: number) => dispatch({ type: 'TOGGLE_TODO', payload: index });
  const setFilter = (filter: TodosFilterType) => dispatch({ type: 'SET_FILTER', payload: filter });

  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === 'ACTIVE') return !todo.isCompleted;
    if (state.filter === 'COMPLETED') return todo.isCompleted;
    return true;
  });

  return {
    input: state.input,
    todos: filteredTodos,
    filter: state.filter,
    setInput,
    addTodo,
    toggleTodo,
    setFilter,
    error,
  };
};

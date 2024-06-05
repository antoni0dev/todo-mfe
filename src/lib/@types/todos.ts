import { TODO_FILTERS } from '../../constants';

export interface Todo {
  id: string;
  name: string;
  isCompleted: boolean;
}

export type TodosFilterType = (typeof TODO_FILTERS)[number];

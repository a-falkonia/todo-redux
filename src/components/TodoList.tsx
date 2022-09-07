import styled from 'styled-components';
import { Todo } from '../types.d';
import { TodoListItem } from './TodoListItem';
import { useSelector } from 'react-redux';
import { FilterState, TodoState } from '../redux';
import { useState } from 'react';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const TodoList = () => {
  const todos: Todo[] = useSelector((state: TodoState) => state.todos);
  const filter: string = useSelector((state: FilterState) => state.filters);

  const getVisibleTodos = (todos: Todo[], filter: string): Todo[] => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter((t) => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter((t) => !t.completed);
      default:
        return todos;
    }
  };

  const visibleTodos = getVisibleTodos(todos, filter);

  return (
    <StyledList>
      {visibleTodos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </StyledList>
  );
};

export default TodoList;

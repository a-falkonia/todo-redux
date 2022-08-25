import styled from 'styled-components';
import { Todo } from '../types.d';
import { TodoListItem } from './TodoListItem';
import { useSelector } from 'react-redux';
import { TodoState } from '../redux';

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

  return (
    <StyledList>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </StyledList>
  );
};

export default TodoList;

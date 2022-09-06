import styled from 'styled-components';
import { Todo } from '../types.d';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todoSlice';

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 8px;
  padding: 10px;
  border: 1px solid #c1c1c1;
  border-radius: 8px;
  cursor: pointer;

  label {
    width: 100%;
    font-size: 20px;
  }

  input {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    button {
      display: none;
    }
  }
`;

const StyledButton = styled.button`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 18px;
  font-family: monospace;
  color: #36395a;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-color: #36395a;
  /* border-width: 0; */
  box-shadow: rgba(45, 35, 66, 0.2) 0 2px 4px,
    rgba(45, 35, 66, 0.15) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;

  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  cursor: pointer;

  :focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  :hover {
    box-shadow: rgba(45, 35, 66, 0.3) 0 4px 8px,
      rgba(45, 35, 66, 0.2) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }
  :active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
`;

export const TodoListItem = (todo: Todo) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo({ id: todo.id }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  return (
    <StyledListItem>
      <label
        style={{
          width: '100%',
          textDecoration: todo.completed ? 'line-through' : undefined,
          cursor: 'pointer'
        }}
      >
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={handleToggle}
          style={{
            marginRight: '16px'
          }}
        />
        {todo.description}
      </label>
      <StyledButton onClick={handleDelete}>Delete</StyledButton>
    </StyledListItem>
  );
};

import styled from 'styled-components';
import { useState, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  padding: 32px 0px;

  input {
    flex-grow: 1;
    padding: 0px 10px;
    font-size: 18px;
    font-family: monospace;
  }

    @media (max-width: 768px) {
    flex-direction: column;

    input {
      height: 40px;
    }

    button {
      border-radius: 0 0 4px 4px;
    }
  }

`;
const StyledAddTodoButton = styled.button`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 20px;
  font-family: monospace;
  color: white;
  background-color:  #4c8bf5;
  border-radius: 0 4px 4px 0;
  border-color: #36395a;
  border-width: 0;

  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  cursor: pointer;
`;

const AddTodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(
      addTodo({
        description: text,
      })
    );
    setText('');
  };

  return (
    <StyledForm>
      <input
        type='text'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <StyledAddTodoButton type='submit' onClick={handleSubmit}>
        Add Todo
      </StyledAddTodoButton>
    </StyledForm>
  );
};

export default AddTodoForm;

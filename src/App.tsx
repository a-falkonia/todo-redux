import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { Todo } from './types.d';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-content: center;
  font-weight: normal;
  font-style: italic;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <div className='App'>
        <StyledHeader>
          <h1>Todo App</h1>
        </StyledHeader>
        <main>
          <TodoList/>
          <AddTodoForm/>
        </main>
      </div>
    </Fragment>
  );
}

export default App;

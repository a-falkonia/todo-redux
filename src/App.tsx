import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';

import { Fragment } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  font-style: italic;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: monospace;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  max-width: 600px;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <div className='App'>
        <StyledHeader>
          <h1>Todo App</h1>
        </StyledHeader>
        <StyledMain>
          <StyledContainer>
            <TodoList />
            <AddTodoForm />
          </StyledContainer>
        </StyledMain>
      </div>
    </Fragment>
  );
}

export default App;

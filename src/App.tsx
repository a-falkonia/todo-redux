import { Fragment, useState } from 'react';
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

const initialTodos: Todo[] = [
  {
    description: 'Walk the dog',
    completed: false,
  },
  {
    description: 'Write app',
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const handleToggle = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleTodoAdd = (description: string) => {
    setTodos([...todos, { description: description, completed: false }]);
  };

  return (
    <Fragment>
      <GlobalStyle />
      <div className='App'>
        <StyledHeader>
          <h1>Todo App</h1>
        </StyledHeader>
        <main>
          <TodoList todos={todos} toggleTodo={handleToggle} />
          <AddTodoForm addTodo={handleTodoAdd} />
        </main>
      </div>
    </Fragment>
  );
}

export default App;

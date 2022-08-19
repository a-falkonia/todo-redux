import { Todo } from '../types.d';
import { TodoListItem } from './TodoListItem';
import { useSelector } from 'react-redux';
import { TodoState } from '../redux';

const TodoList = () => {
  const todos: Todo[] = useSelector((state: TodoState) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;

import { Todo } from '../types.d'
import { TodoListItem } from './TodoListItem';
interface Props {
  todos: Todo[];
  toggleTodo: (selectedTodo: Todo) => void;
}

const TodoList = ({todos, toggleTodo}: Props) => {
    return <ul>
        {todos.map((todo) => <TodoListItem key={todo.description} todo={todo} toggleTodo={toggleTodo}/>)}
  </ul>;
};

export default TodoList;

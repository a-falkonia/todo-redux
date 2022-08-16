import { Todo } from '../types.d';
interface Props {
  todo: Todo;
  toggleTodo: (selectedTodo: Todo) => void;
}
export const TodoListItem = ({ todo, toggleTodo }: Props) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.completed ? 'line-through' : undefined }}
      >
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => toggleTodo(todo)}
        />
        {todo.description}
      </label>
    </li>
  );
};

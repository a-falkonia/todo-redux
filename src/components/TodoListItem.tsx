import { Todo } from '../types.d';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todoSlice';

export const TodoListItem = (todo: Todo) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo({ id: todo.id }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  return (
    <li
      style={{
        width: '240px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px',
        userSelect: 'none',
      }}
    >
      <label
        style={{
          width: '100%',
          textDecoration: todo.completed ? 'line-through' : undefined,
        }}
      >
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={handleToggle}
        />
        {todo.description}
      </label>
      <button
        style={{
          display: 'inline-block',
          backgroundColor: 'transparent',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          color: 'red',
        }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

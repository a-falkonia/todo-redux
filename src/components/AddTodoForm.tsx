import { useState, MouseEvent } from 'react';

interface Props {
  addTodo: (description: string) => void;
}

const AddTodoForm = ({ addTodo }: Props) => {
  const [text, setText] = useState('');
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form>
      <input
        type='text'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button type='submit' onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;

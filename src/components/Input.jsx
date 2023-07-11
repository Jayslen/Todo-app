import { useContext } from 'react';
import { todosContext } from '../context/TodosContext';
import { themeContext } from '../context/ThemeContext';

export function InputForm() {
  const { updateState, todos } = useContext(todosContext);
  const {colors} = useContext(themeContext)
  const {todosBg} = colors

  const handleSubmit = (event) => {
    event.preventDefault();
    const { todo } = Object.fromEntries(new FormData(event.target));
    if (
      todo === '' ||
      todo.match(/^\s/) ||
      todo.length < 4 ||
      todos.some((item) => item.todo === todo.trimEnd())
    ) return;
    updateState({ todo, status: 'active' });
    event.target.children[0].value = '';
  };
  localStorage.setItem('todosData', JSON.stringify(todos));

  return (
    <form onSubmit={handleSubmit} className='shadow-2xl'>
      <input
        style={{ backgroundColor: todosBg}}
        type="text"
        name="todo"
        placeholder="Write TODO"
        className="w-full rounded p-3 focus:outline-0"
      />
      <button hidden></button>
    </form>
  );
}

import { useContext } from 'react';
import { todosContext } from '../context/TodosContext';

export function TodosStats() {
  const { todos, setTodos } = useContext(todosContext);

  const clearCompletedTodos = () => {
    const newTodos = todos.filter((item) => {
      return item.status === 'active';
    });
    setTodos(newTodos);
  };

  return (
    <li className="flex justify-between text-sm px-2 py-2.5 rounded-b">
      <span>
        {todos.filter((item) => {
          return item.status === 'active';
        }).length} Todos Left
      </span>
      {/* <ul className='flex gap-3 [&>li]:cursor-pointer'>
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul> */}
      <span className="cursor-pointer" onClick={clearCompletedTodos}>
        Clear Completed
      </span>
    </li>
  );
}

import { useContext, useState } from 'react';
import { todosContext } from '../context/TodosContext';

export function useTodos() {
  const { todos } = useContext(todosContext);
  const [todosLeft, setTodosLeft] = useState(0);
  
  const handleTodosLeft = () => {
    setTodosLeft(todos.filter((item) => {
        return item.status === 'active'
    }).length)
  }

  return { todosLeft, handleTodosLeft };
}

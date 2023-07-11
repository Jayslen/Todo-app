import { createContext, useState } from 'react';

export const todosContext = createContext();

export function TodosProvider({ children }) {
  const localStorageTodos = (JSON.parse(localStorage.getItem('todosData')))
  const [todos, setTodos] = useState(localStorageTodos ? localStorageTodos : []);
  
  const updateState = (value) => {
    setTodos((prevState) => [...prevState, value]);
  };
  
  const handleStatusUpdate = (data) => {
    const newTodo = [...todos]
    const index = todos.findIndex((item) => {
      return item.todo === data.todo
    })
    newTodo[index].status = newTodo[index].status === 'active' ? 'done' : 'active'
    setTodos(newTodo)
  };

  return (
    <todosContext.Provider value={{ todos, setTodos,updateState, handleStatusUpdate}}>
      {children}
    </todosContext.Provider>
  );
}

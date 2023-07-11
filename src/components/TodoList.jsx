import { useContext } from 'react';
import { todosContext } from '../context/TodosContext';
import { TodoLi } from './TodoLi';
import { TodosStats } from './TodosStats';
import { themeContext } from '../context/ThemeContext';

export function TodoList() {
  const { todos } = useContext(todosContext);
  const { colors } = useContext(themeContext)
  const {todosBg} = colors


  return (
    <ul style={{backgroundColor: todosBg}} className='shadow-2xl'>
      {todos.map((data, index) => {
        return <TodoLi data={data} key={index} />;
      })}
      <TodosStats/>
    </ul>
  );
}

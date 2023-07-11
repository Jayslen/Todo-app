import { themeContext } from '../context/ThemeContext';
import { todosContext } from '../context/TodosContext';
import { CheckIcon } from './icons';
import { useContext } from 'react';

function CheckCircle({ updated }) {
  return (
    <div
      className="bg-gradient-to-t from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)] w-7 h-7 rounded-full grid place-content-center cursor-pointer"
      onClick={updated}
    >
      <CheckIcon></CheckIcon>
    </div>
  );
}

export function TodoLi({ data }) {
  const { colors } = useContext(themeContext)
  const {utilities} = colors
  const { handleStatusUpdate } = useContext(todosContext);

  const handleStatus = () => {
    handleStatusUpdate(data)
  }
  return (
    <li className="w-full flex items-center gap-4 px-3 py-3.5 border-b first:rounded-t" style={{borderBottomColor: utilities}}>
      {data.status === 'active' ? 
      <div className="w-7 h-7 rounded-full border cursor-pointer" style={{borderColor : utilities}}
        onClick={handleStatus}></div> :
         <CheckCircle updated={handleStatus} />
      }

      <p className={`${data.status === 'active' ? '' : 'line-through'} text-sm`}>{data.todo}</p>
    </li>
  );
}

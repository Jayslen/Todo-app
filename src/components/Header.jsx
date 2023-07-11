import { useContext } from 'react';
import { SunIcon, MoonIcon } from './icons'
import { themeContext } from '../context/ThemeContext';


export function Header() {
  const {darkMode, setDarkMode} = useContext(themeContext)
  const handleChangeTheme = () => {
    setDarkMode(!darkMode)
  }
  return (
    <header className="flex justify-between items-center w-[300px] md:w-[400px] mt-28">
      <h1 className="text-3xl font-bold text-white">TODO</h1>
      <div onClick={handleChangeTheme} className='cursor-pointer'>
        {darkMode ? <MoonIcon/> : <SunIcon/> }
      </div>
    </header>
  );
}

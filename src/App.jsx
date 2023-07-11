import { useContext } from 'react';
import { BgImage } from './components/BackgroundImage';
import { Header } from './components/Header';
import { InputForm } from './components/Input';
import { TodoList } from './components/TodoList';
import { themeContext } from './context/ThemeContext';
import { TodosProvider } from './context/TodosContext';

function App() {
  const {colors} = useContext(themeContext)
  const {background, text} = colors
  window.document.body.style.backgroundColor = background
  return (
    <>
      <BgImage />
      <main className="grid place-content-center gap-4 font-Josefin" style={{color: text}}>
        <Header />
        <TodosProvider>
          <InputForm />
          <TodoList />
        </TodosProvider>
      </main>
    </>
  );
}

export default App;

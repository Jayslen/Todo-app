import { createContext, useState } from 'react';
import imageDark from '../assets/images/bg-desktop-dark.jpg'
import imageLight from '../assets/images/bg-desktop-light.jpg'


export const themeContext = createContext();

export function ThemeProvider({children}) {
    const [darkMode, setDarkMode] = useState(true)
    const colors = {
        background : darkMode ? '#181824': '#fafafa',
        todosBg : darkMode ? '#25273c' : '#ffffff',
        utilities: '#2e3045',
        text : darkMode ? '#aaacc3' : '#5e5b74',
        image : darkMode ? imageDark : imageLight
        

    }
    return (
        <themeContext.Provider value={{colors, darkMode, setDarkMode}}>
            {children}
        </themeContext.Provider>
    )

}
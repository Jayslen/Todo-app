import { useContext } from 'react'
import image from '../assets/images/bg-desktop-dark.jpg'
import { themeContext } from '../context/ThemeContext'

export function BgImage () {
    const {colors} = useContext(themeContext) 
    return (
        <div style={{ backgroundImage: `url(${colors.image})` }} className='w-screen h-[30vh] bg-cover absolute -z-10'></div>
    )
}
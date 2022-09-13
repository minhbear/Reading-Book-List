import React from 'react';
import { useTheme } from '../hooks/useThemeContext';
import DarkMode from '../image/dark-mode.png';

const ThemeToggle = () => {
    const { toggleTheme } = useTheme();

    // <button onClick={toggleTheme}>Toggle the theme</button>
    return (
        <div onClick={toggleTheme} id="toggleTheme">
            <img src={DarkMode} alt="" />
        </div>
    )
}

export default ThemeToggle
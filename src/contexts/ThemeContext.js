import React, { createContext } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const[lightTheme, setLightTheme] = React.useState(true);

    const state = {
        isLightTheme: lightTheme,   
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    }

    const toggleTheme = () => {
        setLightTheme(!lightTheme);
    }

    return (
        <ThemeContext.Provider value={{...state, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
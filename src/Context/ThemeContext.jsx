import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(false);

    function handleTheme() {
        setTheme(!theme);
    }
    return (
        <ThemeContext.Provider value={{ theme, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

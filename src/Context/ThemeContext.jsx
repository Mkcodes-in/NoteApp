import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(JSON.parse(savedTheme));
        }
    }, []);

    function handleTheme() {
        const myTheme = !theme;
        setTheme(myTheme);
        localStorage.setItem("theme", JSON.stringify(myTheme));
    }

    return (
        <ThemeContext.Provider value={{ theme, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

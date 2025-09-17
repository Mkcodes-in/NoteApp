import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"

export const UseTheme = () => {
    const {theme, handleTheme} = useContext(ThemeContext);
    return {theme, handleTheme};
}

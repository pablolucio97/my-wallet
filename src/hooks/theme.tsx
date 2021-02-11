import React, {createContext, useState, useContext} from 'react'

import light from '../themes/light'
import dark from '../themes/dark'

interface IThemeContext{
    toggleTheme():void;
    theme: ITheme;
}

interface ITheme{
    title: string;
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        
        white: string;
        black: string;
        gray: string;

        success: string;
        info: string;
        warning: string;
    }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider : React.FC = ({children}) => {
    const [theme, setTheme] = useState<ITheme>( () => {
        const currentTheme = localStorage.getItem('@my-wallet:theme');
        if(currentTheme){
            return JSON.parse(currentTheme)
        }else{
            return dark;
        }
    });

    const toggleTheme = () => {
        if(theme.title === 'dark'){
            setTheme(light)
            localStorage.setItem('@my-wallet:theme' , JSON.stringify(light))
        }else{
            setTheme(dark)
            localStorage.setItem('@my-wallet:theme' , JSON.stringify(dark))

        }
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

function useTheme() : IThemeContext{
    const context = useContext(ThemeContext)
    return context
}

export {ThemeProvider,  useTheme}

import React, { useState } from 'react';
import Context from './themeContext';
import light from '../themes/light';
import dark from '../themes/dark';
const ThemeChangeProvider: React.FunctionComponent = ({ children }) => {

    const [theme, setTheme] = useState(dark);
    const toggleChangeTheme = () => {
        setTheme(theme.title == 'dark' ? light : dark);
    }
    return (
        <Context.Provider
            value={{
                theme: theme,
                setTheme: toggleChangeTheme,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default ThemeChangeProvider;
import React, { useState } from 'react';
import Context from './themeContext';
import dark from './dark';
import light from './light';
const ThemeChangeProvider: React.FunctionComponent = ({ children }) => {

    const [theme, setTheme] = useState(dark);
    const toggleChangeTheme = () => {
        setTheme(theme.title == 'light' ? dark : light);
    }
    return (
        <Context.Provider
            value={{
                theme: theme,
                setTheme: toggleChangeTheme
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default ThemeChangeProvider;
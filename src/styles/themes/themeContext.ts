import { createContext } from 'react';
import light from './light';
const context = createContext({
    theme: light,
    setTheme: () => { },
});

export default context;
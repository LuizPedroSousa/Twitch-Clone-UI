import { createContext } from 'react';
import light from '../themes/light';
const context = createContext({
    theme: light,
    setTheme: () => { },
});

export default context;
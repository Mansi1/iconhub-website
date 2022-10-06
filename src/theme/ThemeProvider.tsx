import React, {PropsWithChildren, useLayoutEffect} from 'react';
import {Theme} from "./types";
import {DEFAULT_THEME, ThemeContext} from "./context/ThemeContext";


export interface ThemeProviderProps {
    theme?: Theme
}

export const ThemeProvider = ({theme = DEFAULT_THEME, children}: PropsWithChildren<ThemeProviderProps>) => {
    useLayoutEffect(()=> {
        import("normalize.css/normalize.css")
    },[])

    return (<ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>);
};

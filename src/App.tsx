import React from 'react';
import {GlobalStyles, JSSProvider} from "./jss";
import {MainPage} from "./page/MainPage";
import {ThemeProvider} from "./theme/ThemeProvider";
import {createTheme} from "./theme";

export const App = () => {
    const theme = createTheme();
    return (
        <JSSProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyles global={{
                    'a': {color: theme.palette.main,},
                    'html, body, #root': {height: '100%', margin: 0, padding: 0, background: '#000000'}
                }}/>
                <MainPage/>
            </ThemeProvider>
        </JSSProvider>
    )
}

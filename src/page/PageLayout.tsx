import React, {PropsWithChildren} from 'react';
import {Container} from "../components";
import {useTheme} from "../theme";

export const PageLayout = ({children}: PropsWithChildren) => {
    const theme = useTheme();
    return (<Container maxWidth={theme.breakpoints.desktop}>
        {children}
    </Container>);
};

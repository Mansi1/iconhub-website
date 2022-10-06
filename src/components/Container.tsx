import React, {PropsWithChildren} from 'react';
import {makeStyles} from "../theme";

export interface ContainerProps {
    maxWidth: number;
}

const useStyle = (maxWidth: number) => makeStyles(({palette}) => ({
    root: {
        margin: "auto",
        maxWidth: maxWidth,
        backgroundColor: palette.main,
        height: '100%'
    }
}))()

export const Container = ({maxWidth, children}: PropsWithChildren<ContainerProps>) => {
    const classes = useStyle(maxWidth);
    return (<div className={classes.root}>
        {children}
    </div>);
};

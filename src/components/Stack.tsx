import React, { HTMLAttributes, PropsWithChildren} from 'react';
import {makeStyles,useComponents} from "../theme";
import {buildClassNames} from "../jss";

const useStyle = (spaceAmount: number) => makeStyles(({spacing}) =>({
  root: {display: "flex", gap: `${spacing(spaceAmount)}px`},
  rootRow: {flexDirection: "row", },
  rootRowReverse: {flexDirection: "row-reverse", },
  rootColumn: {flexDirection: "column", },
  rootColumnReverse: {flexDirection: "column-reverse",},
}))()

export type  FlexDirection = "column" | "column-reverse" | "row" | "row-reverse"

export interface StackProps{
  direction?: FlexDirection
  spacing?: number;
}
export interface StackMergedProps extends StackProps,PropsWithChildren,  HTMLAttributes<HTMLDivElement> {}
export const Stack = (props: StackMergedProps) => {
  
  const {  defaultProps } = useComponents('IhStack');
  const {direction = defaultProps.direction, spacing= defaultProps.spacing!, className,style, children, ...otherProps} = props
  
  const classes = useStyle(spacing);
  
  return (<div className={buildClassNames({
    [classes.root]: true,
    [classes.rootColumn]: direction === "column",
    [classes.rootColumnReverse]: direction === "column-reverse",
    [classes.rootRow]: direction === 'row',
    [classes.rootRowReverse]: direction === 'row-reverse',
  }, className)} style={style} {...otherProps}>
    {children}
  </div>);
};

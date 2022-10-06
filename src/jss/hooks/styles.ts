import {useContext, useLayoutEffect, useState} from "react";
import {JSSContext} from "../JSSProvider";
import {makeJSS} from "../functions";
import {ClassProperty} from "../types";


const STYLES: { [id: string]: [Record<string, string>, string, HTMLElement] } = {}

let counter = 0

const createStyleElementWithId = (id: string): HTMLElement => {
    const el =document.createElement('style');
    el.setAttribute('type', 'text/css');
    el.setAttribute('id', id);
    return el
}  

export const useStyles = <T extends string = string>(classes: ClassProperty<T>): Record<T, string> => {
    const config = useContext(JSSContext)
    const [id] = useState('jss-' + (++counter))
    const [styleElement] = useState<HTMLElement>(createStyleElementWithId(id))
    const [classNames, styleAsText] = makeJSS<T>(classes, {id}, config);

    useLayoutEffect(() => {
        STYLES[id] = [classNames, styleAsText, styleElement]
        Object.entries(STYLES).forEach(([key, [, content,styleEl]]) => {
            styleEl.innerHTML = content
            document.head.appendChild(styleEl)
        })
    })

    useLayoutEffect(() => {
        return () => {
            styleElement.parentElement?.removeChild(styleElement)
        }
    }, [styleElement])
    return classNames
}


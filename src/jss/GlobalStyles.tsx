import React from 'react';
import {useJssConfig} from "./hooks";
import {makeJSS} from "./functions";
import {ClassProperty} from "./types";

export interface GlobalStylesProps {
    global: ClassProperty<string>
}

export const GlobalStyles = ({global}: GlobalStylesProps) => {
    const config = useJssConfig();
    const [, styles] = makeJSS<string>(global, {
            id: '', forceClassName: false, joinClassParts: (array: Array<string | number>) => {
                const [, classNameOriginal] = array;
                return classNameOriginal + ''
            }
        },
        config)
    return (<style id="global-styles" type="text/css">
            {styles}
        </style>
    );
};

import React, {createContext, PropsWithChildren} from 'react';
import {DEFAULT_CONFIG, JSSConfig} from "./JSSConfig";

export const JSSContext = createContext<JSSConfig>(DEFAULT_CONFIG)

export interface JssProviderProps {
    config?: JSSConfig;
}

export const JSSProvider = ({config = DEFAULT_CONFIG, children}: PropsWithChildren<JssProviderProps>) => {
    return (<JSSContext.Provider value={config}>
        {children}
    </JSSContext.Provider>);
};


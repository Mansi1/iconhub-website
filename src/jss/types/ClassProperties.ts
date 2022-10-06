import {CSSProperties} from "react";

export type MediaStyle = {
    [media: string]: Partial<CSSProperties> | { [media: string]: Partial<CSSProperties> };
};

export type JssProperties = Partial<CSSProperties> | MediaStyle;

export type ClassProperty<K extends keyof any> = {
    [P in K]: JssProperties;
};

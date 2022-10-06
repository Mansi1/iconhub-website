export interface JSSConfig {
    space: string;
    defaultUnit: 'px' | 'em' | 'mm' | string;
    classNamePrefix: string;
}

export const DEFAULT_CONFIG: JSSConfig = {
    space: '  ',
    defaultUnit: 'px',
    classNamePrefix: 'jss',
};

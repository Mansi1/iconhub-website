import { camelToKebabCase } from './camelToKebabCase';
import { cssLengthRawKeys } from '../cssLengthRawKeys';

export const getCssAsText = (key: string, value: any, defaultUnit: string) => {
    const normalizedKey = camelToKebabCase(key);
    if (typeof value === 'number' && cssLengthRawKeys[normalizedKey]) {
        return `${normalizedKey}: ${value}${defaultUnit};`;
    }
    return `${normalizedKey}: ${value};`;
};

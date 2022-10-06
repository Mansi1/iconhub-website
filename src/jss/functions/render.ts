import { JssProperties } from '../types';
import { getCssAsText } from './getCssAsText';
import { CSS_OPERATORS } from '../constants';
import {JSSConfig} from "../JSSConfig";

export const render = (style: JssProperties, counterClassName: string, forceClassName: boolean, jss: JSSConfig): Array<string> => {
    let result: Array<string> = [];
    const other: Array<string> = [];

    const styleKeys = Object.keys(style);

    for (let sIndex = 0; sIndex < styleKeys.length; sIndex++) {
        const styleName = styleKeys[sIndex];
        const styleValue = (style as any)[styleName];

        if (typeof styleValue !== 'object') {
            result.push(jss.space + getCssAsText(styleName.trim(), styleValue, jss.defaultUnit));
        }

        if (typeof styleValue === 'object') {
            if (styleName.trim().indexOf('@') === 0) {
                // media query start here
                other.push(
                    `${styleName.trim()} {`,
                    // add space to media query
                    ...render(styleValue, counterClassName,forceClassName, jss).map((v) => jss.space + v),
                    '}',
                );
            } else {
                const [firstCharacter, ...normalizedName] = styleName.split('');
                const operator = CSS_OPERATORS.find((op) => op === firstCharacter) || ` ${firstCharacter}`;
                other.push(...render(styleValue, counterClassName + operator + normalizedName.join(''),forceClassName, jss));
            }
        }
    }

    if (result.length !== 0) {
        
        result = [`${forceClassName?'.': ''}${counterClassName} {`, ...result, '}'];
    }

    result.push(...other);

    return result;
};
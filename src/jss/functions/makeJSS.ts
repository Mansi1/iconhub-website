import {ClassProperty} from '../types';
import {LINEBREAK} from '../constants';
import {render} from './render';
import {createStyleNode} from './createStyleNode';
import {joinClassParts as joinClassPartsOrg} from "./joinClassParts";
import {JSSConfig} from "../JSSConfig";

export type RenderOptions = {
    id: string;
    joinClassParts?: (arr: Array<string>) => string;
    forceClassName?: boolean
}
export const makeJSS = <T extends string = string>(
    classProperties: ClassProperty<T>, options: RenderOptions,
    jss: JSSConfig,
): [Record<T, string>, string] => {
    const {id, forceClassName = true, joinClassParts = joinClassPartsOrg} = options
    const styleLines: Array<string> = [];
    const classes: any = {};
    const classNameKey = Object.keys(classProperties);
    for (let index = 0; index < classNameKey.length; index++) {
        const className = classNameKey[index];
        const counterClassName = joinClassParts([jss.classNamePrefix, className, id]);

        classes[className] = counterClassName;
        const result = render((classProperties as any)[className], counterClassName, forceClassName, jss);
        // collect all css parts
        styleLines.push(result.join(LINEBREAK));
    }
    return [classes, createStyleNode(styleLines)];
};
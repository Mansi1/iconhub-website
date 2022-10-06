import { LINEBREAK } from '../constants';

export const createStyleNode = (styleLines: Array<string>): string => styleLines.join(LINEBREAK)

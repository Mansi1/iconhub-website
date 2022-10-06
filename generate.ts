import json from 'mdn-data/css/properties.json' assert { type: "json" };
import {writeFileSync} from 'fs'
import {join} from 'path';

const result = [
    '/* this code is generated */',
    'export const cssLengthRawKeys: { [cssProperty: string]: boolean } = {',
];
Object.entries(json)
    .filter(
        ([key, value]) =>
            !key.startsWith('-') &&
            (value.syntax.indexOf('<length>') > -1 || value.syntax.indexOf('<length-percentage>') > -1),
    )
    .forEach(([key, value]) => {
        result.push(`  // syntax: ${value.syntax.trim()}`);
        if (key.indexOf('-') > -1) {
            result.push(`  '${key}': true,`);
        } else {
            result.push(`  ${key}: true,`);
        }
    });
result.push('};\n');

writeFileSync(join(process.cwd(), 'src','jss' , 'cssLengthRawKeys.ts'), result.join('\n'));
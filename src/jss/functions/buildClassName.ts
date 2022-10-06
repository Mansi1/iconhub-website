export type Primitive = string | undefined |null;
export type PrimitiveList = Array<Primitive>
export type Condition ={ [className: string]: boolean }


export const buildClassName = (classNamePrimitiveOrPrimitiveListOrCondition: Primitive| PrimitiveList | Condition): string | undefined => {
    if(!classNamePrimitiveOrPrimitiveListOrCondition){
        return undefined
    }
    
    const classNameList: Array<string | number> = []
    if (typeof classNamePrimitiveOrPrimitiveListOrCondition === 'object') {
        Object.entries(classNamePrimitiveOrPrimitiveListOrCondition).forEach(([className, condition]) => {
            if (condition) {
                classNameList.push(className)
            }
        })
    } 
    if(typeof classNamePrimitiveOrPrimitiveListOrCondition === 'string'){
        classNameList.push(classNamePrimitiveOrPrimitiveListOrCondition)
    }
    if(Array.isArray(classNamePrimitiveOrPrimitiveListOrCondition)) {
        classNamePrimitiveOrPrimitiveListOrCondition.forEach((className) => {
            if (!!className) {
                classNameList.push(className)
            }
        })
    }
    return classNameList.join(' ');
}

export const buildClassNames = (...array: Array<Primitive| PrimitiveList | Condition>) => {
    const list = array.map(item => buildClassName(item))
    return list.join(' ')
}
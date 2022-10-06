export const joinClassParts = (classParts: Array<string| number>) => {
        return classParts
            .map((c) => `${c}`.trim())
            .filter((c) => !!c)
            .join('-');
}
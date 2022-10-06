export const camelToKebabCase = (str: string): string =>
    str
        .split(/(?=[A-Z])/)
        .filter((v) => !!v)
        .join('-')
        .toLowerCase();

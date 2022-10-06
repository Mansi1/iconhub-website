import {Theme, ThemeOption} from "../types";

export const createTheme = (options?: ThemeOption): Theme =>
    ({
        breakpoints: {
            mobile: 0,
            tablet: 720,
            desktop: 1200,
            ...options?.breakpoints
        },
        palette: {
            main: '#6200ee',
            error: '#AA1E00',
            info: '#1E6EB4',
            warning: '#E69100',
            success: '#95B733',
            ...options?.palette
        },
        spacing: (amount: number) => (options?.spacing || 1) * amount,
        components: {
            IhStack: {
                defaultProps: {
                    spacing: 1,
                    direction: 'row',
                    ...options?.components?.IhStack?.defaultProps
                }
            }
        }
    })


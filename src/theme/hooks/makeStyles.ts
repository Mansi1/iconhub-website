import {useStyles} from "../../jss/hooks";
import {Theme} from "../types";
import {ClassProperty} from "../../jss";
import {useTheme} from "./useTheme";

export type  MakeStyleFn<T extends string = string> = (theme: Theme) => ClassProperty<T>;

export const makeStyles = <T extends string = string>(classesOrFn: ClassProperty<T> | MakeStyleFn<T>) => () => {
    const theme = useTheme();
    let classes = classesOrFn as ClassProperty<T>;
    if (typeof classesOrFn === 'function') {
        classes = classesOrFn(theme)
    }
    return useStyles<T>(classes);
}
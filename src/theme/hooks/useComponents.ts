import {useTheme} from "./useTheme";
import {Components} from "../../components";

export const useComponents = (component: keyof Components) =>
    useTheme().components[component]

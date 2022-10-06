import {createTheme} from "../functions";
import {createContext} from "react";
import {Theme} from "../types";


export const DEFAULT_THEME = createTheme();
export const ThemeContext = createContext<Theme>(DEFAULT_THEME)

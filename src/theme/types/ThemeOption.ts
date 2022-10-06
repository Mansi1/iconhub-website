import {Components} from "../../components";
import {Palette} from "./Palette";
import {Breakpoints} from "./Breakpoints";

export interface ThemeOption {
    breakpoints?: Partial<Breakpoints>,
    palette?: Partial<Palette>
    spacing?: number
    components?: Partial<Components>
}

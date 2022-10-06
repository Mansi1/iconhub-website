import {Components} from "../../components";
import {Palette} from "./Palette";
import {Breakpoints} from "./Breakpoints";

export interface Theme {
    breakpoints: Breakpoints,
    palette: Palette,
    spacing: (amount: number) => number
    components: Components
}
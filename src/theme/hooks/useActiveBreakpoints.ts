import {useEffect, useState} from "react";
import {Breakpoint, Breakpoints} from "../types";
import {useTheme} from "./useTheme";


export const getBodyWidth = (): number => {
    const dimension = !!document && document.body.getBoundingClientRect();
    return dimension?.width || 0;
}

let BODY_WITH: number = getBodyWidth();

!!window && window.addEventListener('resize', () => {
    BODY_WITH = getBodyWidth()
})

export const calculateState = (breakpoints: Breakpoints, bodyWidth: number): ActiveBreakpointState => {
    const active: Record<Breakpoint, boolean> = Object.entries(breakpoints)
        .sort((a, b) => a[1] - b[1])
        .reduce((prev, [breakpoint, fromWidth], index, all) => {
            let condition = true;
            if (condition && index < (all.length -1)) {

                const toWidth = all[index+1][1]
                condition = toWidth >bodyWidth
            }
            if (condition) {
                condition = fromWidth <= bodyWidth
            }
            prev[breakpoint] = condition
            return prev
        }, {} as Record<string, boolean>);
    return {active: active as ActiveBreakpoint, bodyWidth}
}

export type ActiveBreakpoint = Record<Breakpoint, boolean>

export type ActiveBreakpointState = { active: ActiveBreakpoint, bodyWidth: number }

export const useActiveBreakpoints = () => {
    const {breakpoints} = useTheme();
    const [state, setState] = useState<ActiveBreakpointState>(calculateState(breakpoints, BODY_WITH));
    useEffect(() => {
        let mounted = true;
        const resize = () => {
            if (mounted) {
                setState(calculateState(breakpoints, BODY_WITH))
            }
        }

        !!window && window.addEventListener('resize', resize)
        return () => {
            mounted = false
            !!window && window.removeEventListener('resize', resize)
        }
    }, [breakpoints])
    return state.active
}
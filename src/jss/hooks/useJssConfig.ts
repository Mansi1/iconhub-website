import {useContext} from "react";
import {JSSContext} from "../JSSProvider";

export const useJssConfig = ()  => useContext(JSSContext)
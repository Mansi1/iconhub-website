import React from 'react';
import {PageLayout} from "./PageLayout";
import {useActiveBreakpoints} from "../theme/hooks/useActiveBreakpoints";


export const MainPage = () => {
    const breakpoints = useActiveBreakpoints()
    console.log(breakpoints)
  return (<PageLayout>
     ICONhub
  </PageLayout>);
};

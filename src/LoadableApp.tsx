import React, { ReactElement } from "react";
import Loadable from "@loadable/component";
const App = Loadable(() => import("./App"))

const LoadableApp = ():ReactElement => {
    return (<App />);
}

export default LoadableApp;

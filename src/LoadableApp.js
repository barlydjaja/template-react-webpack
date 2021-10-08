import React from "react";
import Loadable from "@loadable/component";
const App = Loadable(() => import("./App"))

const LoadableApp = () => {
    return (<App />);
}

export default LoadableApp;

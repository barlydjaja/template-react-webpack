import React, { useState } from "react";
import { hot } from "react-hot-loader";
import './sass/app.scss';

const App = () => {
    const [count, setCount] = useState(0)
    const handleClick = (): void =>{
        setCount(count+1)
    }

    return (
        <div className="App">
            <h1>I'm configuring setting up Webpack!</h1>
            <p>{`The count now is: ${count}`}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
export default hot(module)(App);
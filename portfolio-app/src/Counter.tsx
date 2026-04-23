import { useState } from "react"
import "./App.css";
import "./Counter.css";


function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const incrementTwice = () => {
        setCount(count + 1)
        setCount(count + 1);
    }

    const incrementDelay = () => {
        setTimeout(() => {
            setCount(count + 1);
        }, 2000);
    }

    const incrementTwiceCorrectly = () => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    const reset = () => setCount(0);

    return (<div className="container counter-container">
        <h1>Counter: {count}</h1>
        <div className="button-group">
        <button onClick={increment}>Increment</button>
        <button className="warning-btn" onClick={incrementTwice}>Increment Twice</button>
        <button onClick={incrementDelay}>Increment with Delay</button>
        <button onClick={incrementTwiceCorrectly}>Correct Increment Twice</button>
        <button onClick={reset}>Reset</button>
        </div>
    </div>)
}

export default Counter;

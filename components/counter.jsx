import React, { useState } from 'react';
const Counter = function () {
    const [count, setCount] = useState(initialState: 0)
    function increment() {
        setClicks(value: count + 1)
    }
    function decrement() {
        setClicks(value: count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}> increment</button>
            <button onClick={decrement}> decrement</button>
        </div>
        )
}
export default Counter;
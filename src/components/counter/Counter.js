import React, { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => setCounter(counter + 1);

    return (
        <div>
            Counter: <span data-testid="counter-value">{counter}</span>
            <button data-testid="counter-button" onClick={incrementCounter}>+</button>
        </div>
    )
}

export default Counter;
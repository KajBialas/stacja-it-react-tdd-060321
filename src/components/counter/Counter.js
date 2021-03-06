import React, { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => setCounter(counter + 1);
    const decrementCounter = () => setCounter(counter - 1);
    const resetCounter = () => setCounter(0);

    return (
        <div>
            Counter: <span data-testid="counter-value">{counter}</span>
            <button data-testid="counter-button-increment" onClick={incrementCounter}>+</button>
            <button data-testid="counter-button-decrement" onClick={decrementCounter}>-</button>
            <button data-testid="counter-button-reset" onClick={resetCounter}>RESET</button>
        </div>
    )
}

export default Counter;
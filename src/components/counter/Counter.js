import React, { useState } from 'react';
import useCounter from '../../hooks/useCounter/useCounter';

function Counter() {
    const { count, increment } = useCounter();

    return (
        <div>
            <div data-testid="counterValue">{count}</div>
            <button data-testid="counterButton" onClick={increment}>+</button>
        </div>
    )
}

export default Counter;
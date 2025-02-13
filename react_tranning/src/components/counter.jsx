import React from 'react';

const Counter = () => {
    const [count, setCount] = React.useState(0);

    function Increment() {
        setCount(count + 1)
    }

    function Decrement() {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
        </div>
    );
};

export default Counter;
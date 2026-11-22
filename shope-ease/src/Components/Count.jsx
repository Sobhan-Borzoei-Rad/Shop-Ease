import { useState } from "react";

function Count() {
    const [count, setCount] = useState(10);
    const addition = () => setCount(prev => prev + 1);
    const little = () => setCount(prev => prev - 1);
    return (
        <>
            <p>{count}</p>
            <button onClick={addition}>
                Addition
            </button>
            <button onClick={little}>
                Little
            </button>
        </>
    );
}

export default Count;
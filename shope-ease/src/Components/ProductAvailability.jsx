import { useState } from "react";

function ProductAvailability() {
    const [available, setAvailabel] = useState(true);
    const button =
        () => setAvailabel(prev => !prev)
    return (
        <>
            <p>
                {available ? (
                    'Product Available'
                ) : (
                    'Out of Stock'
                )}
            </p>
            <button onClick={button}>Click</button >
        </>
    );
}

export default ProductAvailability;
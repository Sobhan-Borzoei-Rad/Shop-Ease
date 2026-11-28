import { useState } from "react";

function ProductManager({ shopName }) {
    const [product, setProduct] = useState({
        name: "Keyboard",
        price: 80,
        stock: 10
    });


    return (
        <>
            <h1>{shopName}</h1>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button
                onClick=
                {
                    () =>
                        setProduct
                            (
                                prev =>
                                (
                                    {
                                        ...prev,
                                        price: prev.price + 20
                                    }
                                )
                            )
                }
            >
                Increase Price
            </button>
            <p>{product.stock}</p>
            <button
                disabled={product.stock === 0}
                onClick={() =>
                    setProduct(prev => ({
                        ...prev,
                        stock: Math.max(0, prev.stock - 1)
                    }))
                }
            >
                Decrease Stock
            </button>
        </>
    );
}

export default ProductManager;
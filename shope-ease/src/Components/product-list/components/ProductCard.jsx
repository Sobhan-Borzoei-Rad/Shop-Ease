function ProductCard() {
    const productName = 'Keyboard';
    const price = 100;
    const discount = 20;
    return (
        <div>
            <h2>{productName.toUpperCase()}</h2>
            <p>Price : ${price}</p>
            <p>Discount : ${discount}</p>
            <p>final price: {price - discount}</p>
            <p>Double Price: ${price * 2}</p>
        </div>
    );
}

export default ProductCard;
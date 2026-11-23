import { useState } from "react";

function ProductSearch({placeholder}) {
    const [search,setSearch] = useState('');

    const handleChange = (event) => setSearch(event.target.value)

    return (
        <>
            <label htmlFor="search">جستوجوی محصول</label>
            <input type="search" placeholder={placeholder} onChange={handleChange} dir="rtl" />
            <p>{search}</p>
        </>
    );
}

export default ProductSearch;
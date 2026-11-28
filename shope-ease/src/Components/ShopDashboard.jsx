import { useState } from "react";

function ShopDashboard({ shopName }) {
    const [cartCount, setCartCount] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);

    return (
        <>
            <h1>{shopName}</h1>
            <p>{cartCount}</p>
            <button
                onClick={
                    () => setCartCount(prev => prev + 1)
                }
            >
                Add To Cart
            </button>

            <div>
                {
                    isLoggedIn
                        ? (
                            <div>
                                <p>Welcome Back!</p>
                                <button onClick={() => setIsLoggedIn(prev => !prev)}>Logout</button>
                            </div>
                        )
                        : (
                            <div>
                                <p>Please Login</p>
                                <button onClick={() => setIsLoggedIn(prev => !prev)}>Login</button>
                            </div>
                        )
                }

            </div>

            <p>
                {isDarkMode ? "Dark Mode Enabled" : "Light Mode Enabled"}
            </p>

            <button onClick={() => setDarkMode(prev => !prev)}>
                Change Mode
            </button>
        </>
    );
}

export default ShopDashboard;
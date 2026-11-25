import { useState } from "react";

function LoginSystem() {
    const [isLoggedIn, Setter] = useState(false);
    const button = () => Setter(prev => !prev);

    return (
        <>
            <div>{isLoggedIn ? (
                <div>
                    <p>Welcome Back!</p>
                    <button onClick={button}>Logout</button>
                </div>
            ) : (
                <div>
                    <p>Please Login</p>
                    <button onClick={button}>Login</button>
                </div>
            )}</div>
        </>
    );
}

export default LoginSystem;
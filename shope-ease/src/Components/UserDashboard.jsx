import { useState } from "react";

function UserDashboard() {

    const [login, setLogin] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [notification, setNotification] = useState(true);

    const loginUser = () => {
        setLogin(prev => {
            const nextLogin = !prev;

            if (!nextLogin) {
                setAdmin(false);
            }

            return nextLogin;
        });
    };
    const adminUser = () => setAdmin(prev => !prev);
    const changeNotification = () => setNotification(prev => !prev);

    return (
        <>
            <div>
                {login ? (
                    <div>
                        <p>Welcome Back!</p>
                        <div>
                            {notification && <p>New Notification</p>}

                            <button onClick={changeNotification}>
                                {notification ? "Disable Notification" : "Enable Notification"}
                            </button>
                        </div>
                        {admin && <p>Admin Panel</p>}
                        <button onClick={adminUser}>
                            {admin
                                ?
                                (<p>Log out as Admin</p>)
                                :
                                (<p>Log in as Admin</p>)
                            }
                        </button>
                        <br />
                        <button onClick={loginUser}>Logout</button>
                    </div>
                ) : (
                    <button onClick={loginUser}>Login</button>
                )}
            </div>
        </>
    );
}

export default UserDashboard;
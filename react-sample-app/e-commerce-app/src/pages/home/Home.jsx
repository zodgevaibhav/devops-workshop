import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

    function onClickOfUserManagement() {
        console.log("User Management clicked");
    }

    function onClickOfProductManagement() {
        console.log("Product Management clicked");
        navigate("/addProduct")
    }

    function logout() {
        console.log("Logout clicked");
        navigate("/")
    }

    return (
        <>
            <h1>Home</h1>
            <div className="home-container">
                <button onClick={onClickOfUserManagement}>User Management</button>
                <button onClick={onClickOfProductManagement}>Product Management</button>
                
                <button onClick={logout}>Logout</button>
            </div>
        </>
    );
}

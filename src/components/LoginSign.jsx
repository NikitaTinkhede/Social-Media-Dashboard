import React, { useState, useEffect } from 'react';
import Login from './Login';
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';
import "./styles/loginsign.css";


export default function LoginSign() {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const userLoggedIn = localStorage.getItem("isLoggedIn");
        if (userLoggedIn) {
            navigate("/home");  
        }
    }, [navigate]);

    return (
        <div>
            {isLogin ? (
                <Login onOpen={() => setIsLogin(false)} />
            ) : (
                <Signup onOpen={() => setIsLogin(true)} />
            )}
        </div>
    );
}

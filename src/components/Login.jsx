import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/loginsign.css";


function Login({ onOpen }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();
        if (email && password) {
            localStorage.setItem("isLoggedIn", true); 
            alert('Login successful');
            navigate("/home"); 
        } else {
            alert('Please enter valid credentials');
        }
    }

    return (
        <div className="container-1 main-login">
            <div className="screen">
                <div className="screen__content">
                    <form onSubmit={handleLogin} className="login">
                        <h2 className="page_heading">LOG-IN</h2>
                        <div className="login__field">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="login__input" placeholder="User name / Email" />
                        </div>
                        <div className="login__field">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="login__input" placeholder="Password" />
                        </div>
                        <button className="button login__submit" type="submit">
                            <span className="button__text">Login Now</span>
                        </button>
                        <br />
                        <div className="link">
                            <span> Not a member? </span> <br />
                            <button onClick={onOpen}>Create-New-Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

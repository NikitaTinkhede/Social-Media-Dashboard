import React, { useState } from 'react';
import "./styles/loginsign.css";


const Signup = ({ onOpen }) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp(e) {
        e.preventDefault();
        if (userName && email && password) {
            localStorage.setItem("isLoggedIn", true); 
            alert("Signup successful. Now log in!");
            onOpen(); 
        } else {
            alert("Please fill all fields!");
        }
    }

    return (
        <div className="container-1">
            <div className="screen">
                <div className="screen__content">
                    <form onSubmit={handleSignUp} className="login">
                        <h2 className="page_heading">SIGNUP</h2>
                        <div className="login__field">
                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="login__input" placeholder="Your Name" />
                        </div>
                        <div className="login__field">
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="login__input" placeholder="Your Email" />
                        </div>
                        <div className="login__field">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="login__input" placeholder="Password" />
                        </div>
                        <button type='submit' className="button login__submit">
                            <span className="button__text">SignUp</span>
                        </button>
                        <br />
                        <h5>Already have an account? 
                            <button onClick={onOpen}>Login</button>
                        </h5>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;

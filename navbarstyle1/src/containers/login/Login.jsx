import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div className="project__login">
            <form className="project__login-form">
                <div className="project__login-form_group success">
                    <label htmlFor="email">Email</label>
                    <input pattern="[a-zA-Z0-9._+-]+@[a-zA-Z0-9*-]+\.[a-zA-Z]{2,}" type="email" title="must be valid" id="email" required />
                    <span className="msg">Valid email</span>
                </div>
                <div className="project__login-form_group error">
                    <label htmlFor="password">Password</label>
                    <input pattern="[a-zA-Z0-9._+-!]{8,}" title="Must be at least 8 characters" type="password" id="password" required />
                    <span className="project__login-form_group-inputhint">
                        Must be at least 8 characters
                    </span>
                    <span className="msg">Incorrect password</span>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
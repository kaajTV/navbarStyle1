import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading]);
    return (
        <div className="project__login">
            <form action="" className="project__login-form">
                <div className="project__login-form_group">
                    <label htmlFor="email" className="form__label">Email</label>
                    <input type="email" name="email" id="email" className="form__input" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="project__login-form_group">
                    <label htmlFor="password" className="form__label">Password</label>
                    <input type="password" name="password" id="password" className="form__input" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="submit" value="Login" onClick={() => logInWithEmailAndPassword(email, password)} />
                <div className="project__login-form_group">
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div className="project__login-form_group">
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </form>
        </div>
    );
}

export default Login
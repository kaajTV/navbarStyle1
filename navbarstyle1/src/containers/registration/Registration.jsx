import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import './registration.css';
import {
    auth,
    registerWithEmailAndPassword
} from '../../firebase';

function Registration() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) navigate.replace("/dashboard");
    }, [user, loading]);

    return (
        <div className="project__registration">
            <form action="" className="project__registration-form">
                <div className="project__registration-form_group">
                    <label htmlFor="name" className="form__label">Full Name</label>
                    <input type="text" name="name" id="name" className="form__input" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="project__registration-form_group">
                    <label htmlFor="email" className="form__label">Email</label>
                    <input type="email" name="email" id="email" className="form__input" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="project__registration-form_group">
                    <label htmlFor="password" className="form__label">Password</label>
                    <input type="password" name="password" id="password" className="form__input" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="submit" value="Register" className="form__submit" onClick={register} />
                <div className="project__registration-form_group">
                    Already have an account? <Link to="/">Login</Link> now.
                </div>
            </form>
        </div>
    )
}

export default Registration
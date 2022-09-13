import React, { useState } from 'react';
import './registration.css';
import { database } from '../../firebase';
import { ref, push, child, update } from 'firebase/database';

function Registration() {

    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "userName") {
            setUserName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }
    }

    const handleSubmit = () => {
        let obj = {
            userName : userName,
            email : email,
            password : password,
            confirmPassword : confirmPassword,
        }
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj;
        return update(ref(database), updates);
    }

    return (
        <div className="project__registration">
            <form action="" className="project__registration-form">
                <div className="project__registration-form_group">
                    <label htmlFor="userName" className="form__label">Username</label>
                    <input type="text" name="userName" id="userName" className="form__input" value={userName} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="project__registration-form_group">
                    <label htmlFor="email" className="form__label">Email</label>
                    <input type="email" name="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="project__registration-form_group">
                    <label htmlFor="password" className="form__label">Password</label>
                    <input type="password" name="password" id="password" className="form__input" value={password} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="project__registration-form_group">
                    <label htmlFor="confirmPassword" className="form__label">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" className="form__input" value={confirmPassword} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="project__registration-form_register">
                    <input type="submit" value="Register" className="form__register" onClick={() => handleSubmit()} />
                </div>
            </form>
        </div>
    )
}

export default Registration
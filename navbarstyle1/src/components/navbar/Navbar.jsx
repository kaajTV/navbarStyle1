import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
import { Sidebar } from '../index';
import { Login } from '../../containers';
import { Registration } from '../../containers';

import { database } from '../../firebase';
import { ref, push, child, update } from 'firebase/database';

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#features">Features</a></p>
        <p><a href="#prices">Prices</a></p>
        <p><a href="#contact">Contact us</a></p>
        {/* <p><a href="#blog">Library</a></p> */}
    </>
)



const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleLogin, setToggleLogin] = useState(false);
    const [toggleRegistration, setToggleRegistration] = useState(false);
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);




    // DataBase
    // const database = [
    //     {
    //         username: "username1",
    //         password: "password1"
    //     },
    //     {
    //         username: "username2",
    //         password: "password2"
    //     }
    // ];

    // Error Text
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    // Find UserData
    const handleSubmit = (event) => {
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        const userData = database.find((user) => user.userName === uname.value);

        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Rendering Error Messages

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

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

    const handleSubmits = () => {
        let obj = {
            userName: userName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        }
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj;
        return update(ref(database), updates);
    }

    return (
        <div className="project__navbar">
            <div className="project__navbar-links">

                {/* Logo */}
                <div className="project__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>

                {/* Menu Context */}
                <div className="project__navbar-links_container">
                    <Menu />
                </div>
            </div>

            {/* Login & SignUp */}
            <div className="project__navbar-sign">
                {toggleLogin
                    ? <p onClick={() => setToggleLogin(false)}>Sign in</p>
                    : <p onClick={() => setToggleLogin(true)}>Sign in</p>
                }
                {toggleLogin && (
                    <div className="project__login">
                        <div className="project__login-overlay" onClick={() => setToggleLogin(false)}></div>
                        <form className="project__login-form" onSubmit={handleSubmit}>
                            <div className="project__login-form_close">
                                <RiCloseLine color="#fff" size={35} onClick={() => setToggleLogin(false)} />
                            </div>
                            <div className="project__login-form_group success">
                                {/* <label htmlFor="email">Email</label>
                                <input pattern="[a-zA-Z0-9._+-]+@[a-zA-Z0-9*-]+\.[a-zA-Z]{2,}" type="email" title="must be valid" id="email" required />
                                <span className="msg">Valid email</span> */}
                                <label htmlFor="">Username </label>
                                <input type="text" name="userName" id="userName" required />
                                {renderErrorMessage("uname")}
                            </div>
                            <div className="project__login-form_group error">
                                {/* <label htmlFor="password">Password</label> */}
                                {/* <input pattern="[a-zA-Z0-9._+-!]{8,}" title="Must be at least 8 characters" type="password" id="password" required /> */}
                                <label htmlFor="">Password </label>
                                <input type="password" name="password" id="password" required />
                                {renderErrorMessage("pass")}
                                <span className="project__login-form_group-inputhint">
                                    Must be at least 8 characters
                                </span>
                                {/* <span className="msg">Incorrect password</span> */}
                            </div>
                            <input type="submit" value="Login" />
                            {/* <button type="submit">Login</button> */}
                        </form>
                        {/* {isSubmitted ? toggleLogin : toggleLogin} */}
                    </div>
                )}

                {/* Registration */}
                {toggleRegistration
                    ? <button onClick={() => setToggleRegistration(false)}>Sign up</button>
                    : <button onClick={() => setToggleRegistration(true)}>Sign up</button>
                }
                {toggleRegistration && (
                    <div className="project__registration">
                        <div className="project__registration-overlay" onClick={() => setToggleRegistration(false)}></div>
                        <form action="" className="project__registration-form">
                            <div className="project__registration-form_close">
                                <RiCloseLine color="#fff" size={35} onClick={() => setToggleRegistration(false)} />
                            </div>
                            <div className="project__registration-form_group">
                                <label htmlFor="userName" className="form__label">Username</label>
                                <input type="text" name="userName" id="userName" className="form__input" required value={userName} onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div className="project__registration-form_group">
                                <label htmlFor="email" className="form__label">Email</label>
                                <input type="email" name="email" id="email" className="form__input" required value={email} onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div className="project__registration-form_group">
                                <label htmlFor="password" className="form__label">Password</label>
                                <input type="password" name="password" id="password" className="form__input" required value={password} onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div className="project__registration-form_group">
                                <label htmlFor="confirmPassword" className="form__label">Confirm Password</label>
                                <input type="password" name="confirmPassword" id="confirmPassword" className="form__input" required value={confirmPassword} onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div className="project__registration-form_register">
                                <input type="submit" value="Register" className="form__register" onClick={() => handleSubmits()} />
                            </div>
                        </form>
                    </div>
                )}
            </div>

            {/* Sidebar Menu */}
            <div className="project__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    // <Sidebar />
                    <div className="project__navbar-menu_container scale-up-center">
                        <div className="project__navbar-menu_container-links">
                            <Sidebar />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
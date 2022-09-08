import React, { useState } from 'react';
import './login.css';

function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: "username1",
            password: "password1"
        },
        {
            username: "username2",
            password: "password2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        const userData = database.find((user) => user.username === uname.value);

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

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="">Username </label>
                    <input type="text" name="uname" id="username" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label htmlFor="">Password </label>
                    <input type="password" name="pass" id="password" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" value="" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="login-page">
            <div className="login-form">
                <div className="title">Sign In</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );


    // const Login = () => {
    //      return (
    //          <div className="project__login">
    //              <form className="project__login-form">
    //                  <div className="project__login-form_group success">
    //                      <label htmlFor="email">Email</label>
    //                      <input pattern="[a-zA-Z0-9._+-]+@[a-zA-Z0-9*-]+\.[a-zA-Z]{2,}" type="email" title="must be valid" id="email" required />
    //                      <span className="msg">Valid email</span>
    //                  </div>
    //                  <div className="project__login-form_group error">
    //                      <label htmlFor="password">Password</label>
    //                      <input pattern="[a-zA-Z0-9._+-!]{8,}" title="Must be at least 8 characters" type="password" id="password" required />
    //                      <span className="project__login-form_group-inputhint">
    //                          Must be at least 8 characters
    //                      </span>
    //                      <span className="msg">Incorrect password</span>
    //                  </div>
    //                  <button type="submit">Login</button>
    //              </form>
    //          </div>
    //      )
     }

    export default Login
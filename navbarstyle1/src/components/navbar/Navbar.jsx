import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#about">About</a></p>
        <p><a href="#possibility">Possibility</a></p>
        <p><a href="#features">Features</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)

// const subMenu = () => (
//     <>
//         <p><a href="#">Firefox</a></p>
//         <p><a href="#">Chrome</a></p>
//         <p><a href="#">Safari</a></p>
//         <p><a href="#">Explorer</a></p>
//         <p><a href="#">Micro</a></p>
//     </>
// )

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="project__navbar">
            <div className="project__navbar-links">
                <div className="project__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="project__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="project__navbar-sign">
                <p>Sign in</p>
                <button>Sign up</button>
            </div>
            <div className="project__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="project__navbar-menu_container scale-up-center">
                        <div className="project__navbar-menu_container-links">
                            <Menu />
                            <div className="project__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button>Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
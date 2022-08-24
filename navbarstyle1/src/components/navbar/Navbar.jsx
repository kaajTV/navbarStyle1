import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
import { Sidebar } from '../index';

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
                    // <Sidebar />
                     <div className="project__navbar-menu_container scale-up-center">
                         <div className="project__navbar-menu_container-links">
                             <Sidebar />
                             {/* <div className="project__navbar-menu_container-links-sign">
                                 <p>Sign in</p>
                                 <button>Sign up</button>
                             </div> */}
                         </div>
                     </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
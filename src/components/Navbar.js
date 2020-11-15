import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {GiFingerPrint} from 'react-icons/gi';
import {FaBars, FaTimes} from "react-icons/fa";
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <=960) {
          setButton(false);
      } else {
          setButton(true);
      }
  }
  useEffect(() => {
      showButton();
  }, [])
  window.addEventListener('resize', showButton)
    return (
        <>
        <IconContext.Provider value={{color:"#fff"}}>
            <div className="navbar">
                <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img alt="tokilo" src="./images/design-images/logo.png" />
                   </Link>
                 <div className="menu-icon" onClick={handleClick}>
                     {click ?<FaTimes />:  <FaBars /> }
                 </div>
                 <ul className={`nav-menu ${click ? "active" : ""}`}>
                     <li className="nav-item">
                            <Link className="nav-links" to="/" onClick={closeMobileMenu}>
                              Home
                            </Link>
                     </li>
                     <li className="nav-item">
                            <Link className="nav-links" to="/products" onClick={closeMobileMenu}>
                              Products
                            </Link>
                     </li>
                     <li className="nav-btn">
                            {button ? (<Link to="/sign-up" className="btn-link">
                                <Button buttonStyle="btn--outline">SING UP</Button>
                            </Link>) : (<Link to="/sign-up" className="btn-link" onClick={closeMobileMenu}>
                                <Button buttonStyle="btn--outline" buttonSize='btn--mobile'>SING UP</Button>
                            </Link>)}
                     </li>
                  

                 </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

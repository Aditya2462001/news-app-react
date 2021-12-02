import React,{useState} from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import logo from '../img/news.png';
import hamberger from '../img/meat.png';
import close from '../img/cancel.png';

const Navbar = () => 
{
    const [active,setActive] = useState(false);

    const GetEvent = () =>
    {
        console.log("Navber wins")
        setActive(true);

    }
    const releaseEvent = () =>
    {
        setActive(false);
    }
    return (
        <nav className="navbar">
            <div className="logo">
                <div className="logo_img">
                    <img src={logo} alt=""  />
                </div>
                <div className="logo_name">
                    <h2><Link to="/">News Web</Link></h2>
                </div>
            </div>
            <div className="hamberger_btn">
                <img src={hamberger} alt="" onClick={GetEvent} />
            </div>
            <div className="menu" id={ active ? "active" : ""}>
                <img src={close} alt="" onClick={releaseEvent} />
                <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/categories">Categories</Link>
                        </li>
                        <li>
                            <Link to="/countries">Countries</Link>
                        </li>
                        <li>
                            <Link to="/search">Search News</Link>
                        </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

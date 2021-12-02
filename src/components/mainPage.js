import React from 'react';
import './mainPage.css';
import img from '../img/img.svg';
import {Link} from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="Main__page">
          
            <div className="mainPage_conatiner">
                <div className="left">
                    <h1>Read the Fresh News</h1>
                    <p>We provide the all category news and country wise news</p>
                    <div className="button_block">
                        <button>Join Me</button>
                        <button>Share</button>
                    </div>
                </div>
                <div className="right">
                    <img src={img} alt="" />
                    <div className="follow_icons">
                        <Link to="#"><i className="fab fa-facebook"></i></Link>
                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                        <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;

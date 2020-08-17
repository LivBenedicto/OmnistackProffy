import React from 'react';
import { Link } from 'react-router-dom';

// css
import './styles.css';

// img
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

// icon
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';


function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Your online study plataform</h2>
                </div>

                <img src={landingImg} alt="Study plataform" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Study"/>
                        Study
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Give Classes"/>
                        Give Classes
                    </Link>
                </div>

                <span className="total-connections">
                    Total of 200 connections already made
                    <img src={purpleHeartIcon} alt="Purple heart"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;
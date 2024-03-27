import React from "react";

import logoPageImg from '../../assets/images/logo.png';
import landingImg from '../../assets/images/logo-landing-page.png';
import serviceIcon from '../../assets/images/icons/services.svg';
import toolsIcon from '../../assets/images/icons/tools.svg';
import blackHeart from '../../assets/images/icons/black-heart.svg';

import './styles.css';

import { Link } from "react-router-dom";


function Landing() {
    return (
        <div id="landing-page">
            <div id="landing-page-content" className="container">
                <div className="logo-container">
                    <img src={logoPageImg} alt="On Serv"/>
                    <h2>Encontre o serviço que precisa</h2>
                </div>
                <img src={landingImg} alt="" className="logo-service"/>
                <div className="buttons-container">
                    <Link to="customer-form" className="service">
                        <img src={serviceIcon} alt="Serviços" />
                        Seja um cliente
                    </Link>
                    <Link to="worker-form" className="hands-on">
                        <img src={toolsIcon} alt="" />
                        Trabalhe conosco
                    </Link>
                </div>
                <span className="login">
                    Já possui uma conta? Entre <Link to="login"> clicando aqui</Link>
                </span>
                <span className="total-connections">
                    Total de 5000 serviços realizados <img src={blackHeart} alt="Coração" />
                </span>
            </div>
        </div>
    )
}

export default Landing;
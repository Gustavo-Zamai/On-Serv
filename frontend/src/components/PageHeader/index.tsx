import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import backPageIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.png';

import './styles.css';

interface PageHeaderProps {
    children?: ReactNode;
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/"> 
                <img src={backPageIcon} alt="Voltar" />
            </Link>
            <img src={logoImg} alt="Logo aplicação" />
        </div>
        <div className="header-content">
            <strong>{props.title}</strong>
            {props.children}
        </div>
        
    </header>
    )
}

export default PageHeader;
import React from 'react';
import { Link } from 'react-router-dom';

// img
import logoImg from '../../assets/images/logo.svg';

// icon
import backIcon from '../../assets/images/icons/back.svg';

// css
import './styles.css';

// properties
interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (properties) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Back" />
                </Link>

                <img src={logoImg} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{properties.title}</strong>
                {properties.children}
            </div>
        </header>
    );
}

export default PageHeader;
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

import Logo from './Logo.webp';

function Header() {
    return (
        <nav>
            <Link to="/">
                <img src={Logo} alt="Logo" />
            </Link>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">A propos</Link></li>
                <li><Link to="/projects">Projets</Link></li>
            </ul>
        </nav>
    );
}

export default Header;

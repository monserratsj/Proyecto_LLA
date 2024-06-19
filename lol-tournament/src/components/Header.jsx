// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/header.css'
const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/teams">Equipos malos</Link></li>
                    <li><Link to="/matches">Partidos aburridos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

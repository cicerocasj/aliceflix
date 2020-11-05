import React from 'react';
import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom';
import Button from '../Button'
// import ButtonLink from './components/ButtonLink'
import  './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
          <a to="/">
            <img className="Logo" src={Logo} alt="AliceFlix logo"/>
          </a>
          <Button as={Link} className="ButtonLink" to="/cadastro/video" label="Novo vídeo2">
            Novo vídeo
          </Button>
        </nav>
    );
}

export default Menu;

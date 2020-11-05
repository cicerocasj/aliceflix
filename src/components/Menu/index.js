import React from 'react';
import Logo from '../../assets/img/Logo.png'
import Button from '../Button'
// import ButtonLink from './components/ButtonLink'
import  './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
          <a href="/">
            <img className="Logo" src={Logo} alt="AliceFlix logo"/>
          </a>
          <Button as="a" className="ButtonLink" href="/" label="Novo vídeo2">
            Novo vídeo
          </Button>
        </nav>
    );
}

export default Menu;

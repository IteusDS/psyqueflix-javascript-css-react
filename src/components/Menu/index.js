import React from 'react';
import Logo from '../../assets/logo.png';
import  './menu.css';
import  ButtonLink from './components/ButtonLink';

function Menu() {
    return (
      <nav className="Menu">
          <a href="/">
          <img className="Logo" src={Logo} alt ="logo"/>
</a>
     <ButtonLink className="ButtonLink" href="/">Entre em Contato!</ButtonLink>
     
      </nav>
    );
}


export default Menu;
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu({ menuButton }) {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Holzflix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to={menuButton.path}>
        {menuButton.text}
      </Button>
    </nav>
  );
}

Menu.propTypes = {
  menuButton: PropTypes.node.isRequired,
};

export default Menu;

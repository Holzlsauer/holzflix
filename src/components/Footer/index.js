import React from 'react';
import footer from '../../assets/img/footer.png'
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.github.com/holzlsauer">
        <img src={footer} alt="Holzlsauer" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;

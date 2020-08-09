import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-bottom: 10px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }) => paddingAll > -1 && css`
    padding: ${paddingAll}
  `}
`;

function PageDefault({ children, paddingAll, menuButton }) {
  return (
    <>
      <Menu menuButton={menuButton} />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  paddingAll: -1,
  menuButton: {
    text: 'Novo vídeo',
    path: '/cadastro/video',
  },
};

PageDefault.propTypes = {
  children: PropTypes.node.isRequired,
  paddingAll: PropTypes.number,
  menuButton: PropTypes.node,
};

export default PageDefault;

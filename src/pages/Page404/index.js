import React from 'react';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';

function Page404() {
  const H1 = styled.h1`
        color: #F0F7FF;
  `;

  return (
    <PageDefault>
      <H1>
        Página não encontrada
      </H1>
    </PageDefault>
  );
}

export default Page404;

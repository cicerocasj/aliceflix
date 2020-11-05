import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import styled from 'styled-components';


const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

function PageDefault({children}) {
  return (
    <React.Fragment>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer />
    </React.Fragment>
  );
}

export default PageDefault;

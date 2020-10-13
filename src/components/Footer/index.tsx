import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

import logoImg from '../../assets/ze-white-logo.png';

import { Container, GridColumn, LinksContainer } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <GridColumn>
        <img src={logoImg} />
        <LinksContainer>
          <a href='https://twitter.com/ZeDelivery'><FaTwitter color='#FFF' size={24} /></a>
          <a href='https://facebook.com/zedeliverybebidas'><FaFacebook color='#FFF' size={24} /></a>
          <a href='https://instagram.com/zedelivery'><FaInstagram color='#FFF' size={24} /></a>
        </LinksContainer>
      </GridColumn>
      <GridColumn>
        <h3>Sobre o Zé Delivery</h3>
        <a href='https://zedelivery.freshdesk.com/support/home'>Me ajuda, Zé</a>
        <a href='https://zedelivery.gupy.io/'>Trabalhe conosco</a>
        <a href='https://zedelivery.freshdesk.com/support/solutions/articles/60000601483-posso-fazer-meu-pagamento-online-no-app-'>Pagamento na Entrega</a>
        <a href='https://ze.delivery/cidades-atendidas'>Cidades Antendidas</a>
      </GridColumn>
      <GridColumn>
        <h3>Parcerias</h3>
        <a href='https://ze.delivery/cadastro-parceiro'>Quero ser parceiro</a>
      </GridColumn>
      <GridColumn>
        <h3>Já baixou o aplicativo?</h3>
        <a><img src="https://courier-images-web.imgix.net/static/img/play_store_badge.png?auto=compress,format&amp;fit=max&amp;w=136&amp;h=40&amp;dpr=2&amp;fm=png" alt='Zé delivery play store' /></a>
        <a><img src="https://courier-images-web.imgix.net/static/img/apple_store_badge.png?auto=compress,format&amp;fit=max&amp;w=136&amp;h=40&amp;dpr=2&amp;fm=png" alt='Zé delivery store' /></a>
      </GridColumn>
    </Container >
  )
}

export default Footer;

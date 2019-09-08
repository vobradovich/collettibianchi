import React from 'react';
import { Container } from './footer.css';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem;
`;

const Text = styled.p`
  color: #757575;
  font-size: 1.3rem;
  margin: 0 2rem 2rem;
`;


const Footer = () => (
  <Container>    
    <div>
      <Title>Contacts</Title>
      <Text>Via XI Maggio, 122, Marsala, TP, Italy</Text>
      <Text><a href="mailto:collettibianchi1@gmail.com">collettibianchi1@gmail.com</a></Text>
    </div>
    <div>
      <Title>Colletti Bianchi</Title>
      <Text>Per i cultori della camicia di prestigio</Text>
      <Text>Made in Italy</Text>      
      <Text>Spedizione in tutto il mondo</Text>
    </div> 
    <div></div>
  </Container>
);

export default Footer;

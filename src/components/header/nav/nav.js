import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import Facebook from 'images/social/facebook.svg';
import Instagram from 'images/social/instagram.svg';

const Nav = () => (
  <Container>
    <ul>
      {/* <li>
        <Link to="/Facebook">Facebook</Link>
      </li> */}
      {/* <li>
        <a href="https://github.com/fabe/gatsby-universal">GitHub</a>
      </li> */}
      <li>
        <a
          href="https://www.facebook.com/Colletti-Bianchi-446620442059309/"
          target="blank"
          title="facebook"
        >
          <Facebook width="64" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/colletti_bianchi/" target="blank">
          <Instagram width="64" />
        </a>
      </li>
    </ul>
  </Container>
);

export default Nav;

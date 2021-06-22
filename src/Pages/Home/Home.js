import React from 'react';
import avatar from '../../Assets/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <section className='container'>
      <div className='landing-hero'>
        <div className='landing-image'>
          <img alt='Donaldo Avatar' src={avatar} width='100%' />
        </div>
        <div className='landing-content'>
          <h1>Donaldo Lara-Reyes</h1>
          <p>
            Creative Photographer based in New York and happy to travel all over
            Europe to capture photos.
          </p>
          <ul>
            <li>
              <a href='https://twitter.com/DonaldoLR' target='_blank'>
                <FontAwesomeIcon icon={['fab', 'twitter']} size='2x' />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/donaldolr/' target='_blank'>
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} size='2x' />
              </a>
            </li>
            <li>
              <a href='https://github.com/DonaldoLR' target='_blank'>
                <FontAwesomeIcon icon={['fab', 'github']} size='2x' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;

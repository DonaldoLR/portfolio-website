import React from 'react';
import avatar from '../../Assets/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  return (
    <div>
      <img alt='Donaldo Avatar' src={avatar} width='100%' />
      <h1>Donaldo Lara-Reyes</h1>
      <p>
        Creative Photographer based in New York and happy to travel all over
        Europe to capture photos.
      </p>
      <ul>
        <li>
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </li>
        <li>
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
        </li>
        <li>
          <FontAwesomeIcon icon={['fab', 'github']} />
        </li>
      </ul>
    </div>
  );
};

export default Home;

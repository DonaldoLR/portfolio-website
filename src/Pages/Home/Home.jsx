import React from 'react';
// import avatar from '../../Assets/avatar.png';
import avatar from '../../Assets/portrait.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { NavLink } from 'react-router-dom';
const Home = () => {
	return (
		<section className='landing'>
			<div className='grid grid-twoCol landing-hero container'>
				<div className='landing-image'>
					<img alt='Donaldo Avatar' src={avatar} width='100%' />
				</div>
				<div className='landing-content'>
					<h1>Donaldo Lara-Reyes</h1>
					<p>
						Software Engineer located in North Carolina. Here to help any
						company, community, organizaition build awesome ideas. I specialize
						in Front-End Website Development.
					</p>
					{/* 	<NavLink to='/Portfolio' className='button'>
						<span>See my work</span>
						<FontAwesomeIcon icon='arrow-right' size='2x' /> 
					</NavLink> */}
					<ul>
						<li>
							<a
								className='social-twitter'
								href='https://twitter.com/DonaldoLR'
								target='_blank'
								rel='noreferrer'>
								<FontAwesomeIcon icon={['fab', 'twitter']} size='2x' />
							</a>
						</li>
						<li>
							<a
								className='social-linkedin'
								href='https://www.linkedin.com/in/donaldolr/'
								target='_blank'
								rel='noreferrer'>
								<FontAwesomeIcon icon={['fab', 'linkedin-in']} size='2x' />
							</a>
						</li>
						<li>
							<a
								className='social-github'
								href='https://github.com/DonaldoLR'
								target='_blank'
								rel='noreferrer'>
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

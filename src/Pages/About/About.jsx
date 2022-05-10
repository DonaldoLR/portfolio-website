import React from 'react';
import portrait from '../../Assets/portrait.png';
import { NavLink } from 'react-router-dom';
const About = () => {
	return (
		<section>
			<div className='container'>
				<p className='section-tag'>About</p>
				<h1 className='section-heading'>About Me!</h1>
				<div className='grid grid-twoCol'>
					<img
						id='portrait-photo'
						alt='Portrait'
						src={portrait}
						width='100%'></img>
					<div className='about-info-container'>
						<h1>Donaldo Lara Reyes</h1>
						<p>
							Hello, I am a detail oriented Software Engineer based in North
							Carolina. I enjoy helping others, build things that make my job
							easier, and efficient. On my free time, I like taking Udemy
							(online courses in general) courses, currently I am taking "Github
							& Git" by Colt Steele.
						</p>
						<NavLink className='button' to='/Contact'>
							Contact Me
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

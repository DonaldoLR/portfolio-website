import React from 'react';
import websiteImage from '../../Assets/Lara-Roofing.png';

const Portfolio = () => {
	return (
		<section className='portfolio-section'>
			<div className='container'>
				<p className='section-tag'>Work</p>
				<h1 className='section-heading'>
					Hand-picked projects for you to see.
				</h1>
				<div className='portfolio-project grid grid-twoCol'>
					<div className='portfolio-website-image'>
						<img alt='Pizzeria' src={websiteImage} width='100%' />
					</div>
					<div className='portfolio-website-information'>
						<div className='portfolio-website-primary-info'>
							<h2>1. Lara's Roofing</h2>
							<p className='section-tag'>Wordpress, Elementor</p>
							<p>
								Lara's Roofing is a business that specializes in roof, siding,
								and decking repairs. The work I did for Lara's Roofing consisted
								of building & maintaining their wordpress page, and photography
								work.{' '}
							</p>
							<p className='results-p'>
								<span className='goals-improvement'>Results:</span> Increased
								organic site visitors by{' '}
								<span className='goals-improvement'>200%</span>, and revenue by{' '}
								<span className='goals-improvement'>450%</span>
							</p>
							<div className='project-links'>
								{/* <a
                  href='#'
                  className='button'
                  target='_blank'
                  rel='noreferrer nofollow'
                >
                  Visit Site
                </a> */}
								<a
									href='https://lara-roofing.com/'
									className='button'
									target='_blank'
									rel='noreferrer nofollow'>
									View Website
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;

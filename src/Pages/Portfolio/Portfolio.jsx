import React from 'react';
import websiteImage from '../../Assets/Pizza.png';

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
							<h2>1. Brooklyn Pizzeria</h2>
							<p className='section-tag'>ReactJS, Bootstrap</p>
							<p>
								Noyer is a Danish design company that crafts handmade quality
								products in American walnut wood. The work I do for Noyer
								consists of helping them building/maintaining their WordPress
								shop with multiple language layers, and photography work such as
								cropping and slight manipulations.{' '}
							</p>
							<p className='results-p'>
								<span className='goals-improvement'>Results:</span> Increased
								organic site visitors by{' '}
								<span className='goals-improvement'>200%</span>, revenue by{' '}
								<span className='goals-improvement'>450%</span> and newsletter
								opt ins by <span className='goals-improvement'>300%</span>
								<span className='goals-improvement'></span>
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
									href='https://github.com/DonaldoLR/brooklyn-pizzeria'
									className='button'
									target='_blank'
									rel='noreferrer nofollow'>
									View Code
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

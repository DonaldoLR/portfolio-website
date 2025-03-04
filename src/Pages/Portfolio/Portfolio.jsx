import React from 'react';
import websiteImageDonaldo from '../../Assets/Lara-Roofing.png';
import websiteImageJen from '../../Assets/Virtual-Jen.png';
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
						<img
							alt='Donaldo Roofing Website Screenshot'
							src={websiteImageDonaldo}
							width='100%'
						/>
					</div>
					<div className='portfolio-website-information'>
						<div className='portfolio-website-primary-info'>
							<h2>1. Lara's Roofing</h2>
							<p className='section-tag'>Wordpress</p>
							<p>
								Lara's Roofing is a business that specializes in roof, siding,
								and decking repairs. The work I did for Lara's Roofing consisted
								of building & maintaining their wordpress page, and photography
								work.{' '}
							</p>
							<p className='results-p'>
								<span className='goals-improvement'>Results:</span> Website
								traffic <span className='goals-improvement'>200%</span>, and
								increased revenue by{' '}
								<span className='goals-improvement'>60%</span>
							</p>
							<div className='project-links'>
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
				<div className='portfolio-project grid grid-twoCol'>
					<div className='portfolio-website-information'>
						<div className='portfolio-website-primary-info'>
							<h2>2. Virtual Support by Jen</h2>
							<p className='section-tag'>Wordpress</p>
							<p>
								Virtual Support by Jen is pretty straightforward; it's a company
								that provides virtual assistance to other businesses. The work I
								did for jennifer consisted of building their wordpress page, and
								deployment of said website.
							</p>
							<div className='project-links'>
								<a
									href='https://virtualsupportbyjen.com/'
									className='button'
									target='_blank'
									rel='noreferrer nofollow'>
									View Website
								</a>
							</div>
						</div>
					</div>
					<div className='portfolio-website-image'>
						<img
							alt='Donaldo Roofing Website Screenshot'
							src={websiteImageJen}
							width='100%'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;

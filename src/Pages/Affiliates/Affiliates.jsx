import React from 'react';
import cloudwaysLogo from '../../Assets/cloudways-logo.png';
import sitegroundLogo from '../../Assets/siteground-logo.png';
// import seopressLogo from '../../Assets/seopress-logo.png';
// import wprocketLogo from '../../Assets/wprocket-logo.svg';

import AffiliateCard from '../../Components/AffiliateCard';

const Affiliates = () => {
	return (
		<section className='affiliate-section'>
			<div className='container'>
				<p className='section-tag'>Affiliated Links</p>
				<h1 className='section-heading'>Recommended Services</h1>
				<h2>Hosting</h2>
				<div className='affiliate-block grid grid-twoCol'>
					<AffiliateCard
						company='Cloudways'
						image={cloudwaysLogo}
						notes='A nice pay as you go hosting with no locking contracts'
						link='https://www.cloudways.com/en/?id=269968'
					/>
					<AffiliateCard
						company='SiteGround'
						image={sitegroundLogo}
						notes='Afforable and awesome hosting; specifically for WP websites'
						link='https://www.siteground.com/index.htm?afcode=a2bc715a5ce0df7e5b65c21e1f723e35'
					/>
				</div>
				{/* 
				<h2>Wordpress Plugins</h2>
				<div className='affiliate-block grid grid-twoCol'>
					<AffiliateCard
						company='SEOPress'
						image={seopressLogo}
						notes='Assists by improving search engine visibility and increasing traffic to your website'
						link='https://www.cloudways.com/en/?id=269968'
					/>
					<AffiliateCard
						company='WP Rocket'
						image={wprocketLogo}
						notes='Speeds up your WP site; which helps improve customer experience'
						link='https://www.siteground.com/index.htm?afcode=a2bc715a5ce0df7e5b65c21e1f723e35'
					/>
				</div> */}
			</div>
		</section>
	);
};

export default Affiliates;

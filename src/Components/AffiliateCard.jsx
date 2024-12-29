import React from 'react';

const AffiliateCard = ({ company, image, notes, link }) => {
	return (
		<div className='affiliated-service-information'>
			<div className='affiliated-service-primary-info'>
				{/* <div className='affiliated-service-website-logo'>
					<img className='affiliates-logo' alt='logo' src={image} />
				</div> */}
				<p className='section-tag'>{company}</p>
				<p className='affiliate-p'>
					<span className='affiliate-features'>Notes:</span> {notes}
				</p>
				<div className='project-links'>
					<a
						href={link}
						className='button'
						target='_blank'
						rel='noreferrer nofollow'>
						Sign Up
					</a>
				</div>
			</div>
		</div>
	);
};

export default AffiliateCard;

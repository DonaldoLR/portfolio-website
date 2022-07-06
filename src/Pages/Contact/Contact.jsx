import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// import { useHistory } from 'react-router-dom';
const Contact = () => {
	// const history = useHistory();
	const initialFormData = {
		name: '',
		email: '',
		message: '',
	};
	const [formData, setFormData] = useState(initialFormData);
	const [displaySubmissionMessage, setDisplaySubmissionMessage] =
		useState(false);
	// const [isValidEmail, setIsValidEmail] = useState(false);
	const handleInputChange = (event) => {
		// const pattern = new RegExp(
		// 	/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
		// );
		const key = event.target.name;
		const value = event.target.value;
		// if (pattern.test(value)) {
		// 	setIsValidEmail(true);
		// } else {
		// 	setIsValidEmail(false);
		// }
		setFormData({
			...formData,
			[key]: value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		if (isValidEmail) {
			emailjs
				.sendForm(
					'service_pwn5wen',
					'template_qjbiqah',
					event.target,
					'user_yhyZkgKtlVJj0ca02HLB3'
				)
				.then(
					() => {
						setFormData(initialFormData);
						setDisplaySubmissionMessage(true);
						setTimeout(() => {
							setDisplaySubmissionMessage(false);
						}, 3000);
						// history.push('/Message-Sent');
					},
					(error) => {
						console.log(error.text);
					}
				);
		}
	};
	const buttonStyle = {
		display: displaySubmissionMessage ? 'block' : 'none',
	};
	return (
		<section>
			<div className='container'>
				<p className='section-tag'>Contact</p>
				<h1 className='section-heading'>Let's get in touch!</h1>
				<div className='grid grid-twoCol'>
					<div className='contact-info contact-info-1'>
						<ul>
							<li>
								<p>
									Email:{' '}
									<span className='goals-improvement'>
										contact@DonaldoReyes.com
									</span>
								</p>
							</li>
							<li>
								<p>
									Phone:{' '}
									<span className='goals-improvement'>(919) 322-9174</span>
								</p>
							</li>
							<li>
								<p>
									Freelance Availability:
									<span className='goals-improvement'> Available</span>
								</p>
							</li>
							<li>
								<p>
									Location:{' '}
									<span className='goals-improvement'>North Carolina, USA</span>
								</p>
							</li>
						</ul>
					</div>
					<div className='contact-info contact-info-2'>
						<div className='alert alert-success' style={buttonStyle}>
							Your message has been sent!
						</div>
						<form onSubmit={handleSubmit}>
							<input
								type='text'
								placeholder='Name:'
								name='name'
								onChange={handleInputChange}
								value={formData.name}
							/>
							<input
								className={isValidEmail ? '' : 'display-email-error'}
								type='email'
								placeholder='Email:'
								name='email'
								onChange={handleInputChange}
								value={formData.email}
							/>
							<p
								className='alert alert-error'
								style={{ display: isValidEmail ? 'none' : 'block' }}>
								Invalid Email Address
							</p>
							<textarea
								type='textarea'
								placeholder='Message:'
								rows='4'
								cols='50'
								name='message'
								onChange={handleInputChange}
								value={formData.message}></textarea>
							<button className='button' type='submit'>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;

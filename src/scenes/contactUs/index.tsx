import { SelectedPage } from '@/types/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactStanding from '@/assets/contact/standingDog.jpg';
import TitleText from '@/shared/TitleText';
import { faPaw, faBone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e: any) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	const formDesignStyle = `mx-auto border-b-2 border-light-green-20 w-full`;
	const formInputStyle = `w-full bg-sand-80 p-2 text-sm outline-none placeholder:uppercase text-base`;

	return (
		<section id='contactus' className='bg-light-green-100 py-36'>
			<div className='mx-auto w-5/6'>
				<motion.div
					onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
				>
					{/* Header */}
					<motion.div
						className='md:w-3/5'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.8 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<TitleText>
							See <span className='text-dark-blue-50'>You </span> Real{' '}
							<span className='text-dark-blue-50'>Soon </span>
							<FontAwesomeIcon
								icon={faPaw}
								className='align-baseline text-light-green-20'
							/>
						</TitleText>
						<p className='mt-8 text-sm leading-5'>
							Dogation is a membership only. But don't worry! It's completely
							free to become a member. We want to tell you our information and
							send coupons. You can choose a free membership or an executive
							membership. You can enough enjoy a free membership. But executive
							members always get a free welcome drink and everything membership
							price. It's only $50 per year and pays only one person!
						</p>
					</motion.div>

					{/* Form and Image */}
					<div className='mt-10 justify-between gap-8 md:flex'>
						<motion.div
							className='relative mt-12 basis-2/5 sm:order-2 md:mt-32'
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.4, duration: 0.8 }}
							variants={{
								hidden: { opacity: 0, y: -50 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<div className='w-full before:absolute before:-right-7 before:-top-24 before:z-[1] md:before:content-dogation-contact'>
								<img
									src={ContactStanding}
									alt={ContactStanding}
									className='mx-auto w-[280px] rounded-full shadow-lg md:mt-8 sm:w-[350px] md:w-full md:rounded-md'
								/>
							</div>
						</motion.div>

						<motion.div
							className='mt-10 basis-3/5 md:mt-0'
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.2, duration: 0.8 }}
							variants={{
								hidden: { opacity: 0, y: -50 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<div className='mx-auto mt-6 border-2 border-light-green-20 bg-sand-80 p-10 shadow-lg'>
								<h1 className='pb-2 pt-5 text-center text-xl font-bold sm:pb-6 sm:pt-10 sm:text-4xl'>
									<FontAwesomeIcon
										icon={faBone}
										className='sm:fa-lg fa-xs mr-2 text-light-green-20 sm:mr-4'
									/>
									Dogation Member
									<FontAwesomeIcon
										icon={faBone}
										className='sm:fa-lg fa-xs ml-2 text-light-green-20 sm:ml-4'
									/>
								</h1>

								<form
									action='https://formsubmit.co/d8ba071863b209c206352f351fbccf9e'
									method='POST'
									target='_blank'
									onSubmit={onSubmit}
								>
									<div className='mt-4 grid grid-cols-2 gap-x-3'>
										<div className={`${formDesignStyle} sm:w-[80%]`}>
											<label htmlFor='firstName'></label>
											<input
												placeholder='My First Name is'
												// name='firstName'
												className={formInputStyle}
												type='text'
												{...register('firstName', {
													required: true,
													maxLength: 100,
												})}
											/>
											{errors.firstName && (
												<p className='mt-1 text-sun-300'>
													{errors.firstName.type === 'required' &&
														'This field is required.'}
													{errors.firstName.type === 'maxLength' &&
														'Max length is 100 char.'}
												</p>
											)}
										</div>
										<div className={`${formDesignStyle} sm:w-[80%]`}>
											<label htmlFor='lastName'></label>
											<input
												placeholder='My Last Name is'
												// name='lastName'
												className={formInputStyle}
												type='text'
												{...register('lastName', {
													required: true,
													maxLength: 100,
												})}
											/>
											{errors.lastName && (
												<p className='mt-1 text-sun-300'>
													{errors.lastName.type === 'required' &&
														'This field is required.'}
													{errors.lastName.type === 'maxLength' &&
														'Max length is 100 char.'}
												</p>
											)}
										</div>
									</div>

									<div className='mt-6'>
										<div className={`${formDesignStyle} sm:w-[90%]`}>
											<label htmlFor='phone'></label>
											<input
												placeholder='My number is'
												// name='phone'
												className={formInputStyle}
												type='text'
												{...register('phone', {
													required: true,
													pattern: /^0\d{9,10}$/,
												})}
											/>
											{errors.phone && (
												<p className='mt-1  text-sun-300'>
													{errors.phone.type === 'required' &&
														'This field is required.'}
													{errors.phone.type === 'pattern' &&
														'Invalid phone number.'}
												</p>
											)}
										</div>

										<div className={`${formDesignStyle} mt-6 sm:w-[90%]`}>
											<label htmlFor='email' />
											<input
												placeholder='My E-Mail is'
												// name='email'
												className={formInputStyle}
												type='text'
												{...register('email', {
													required: true,
													pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												})}
											/>
											{errors.email && (
												<p className='mt-1  text-sun-300'>
													{errors.email.type === 'required' &&
														'This field is required.'}
													{errors.email.type === 'pattern' &&
														'Invalid email address.'}
												</p>
											)}
										</div>

										<div className={`${formDesignStyle} mt-6 sm:w-[90%]`}>
											<label htmlFor='subject'></label>
											<select
												// name='subject'
												className={`${formInputStyle} text-slate-400`}
												placeholder='Subject line'
												defaultValue={'DEFAULT'}
												{...register('subject', {
													required: true,
												})}
											>
												<option disabled hidden value={'DEFAULT'}>
													What are you expecting from our hotel?
												</option>
												<option value='activity'>
													I'd like to do some activities.
												</option>
												<option value='relax'>
													I'd like to chill out all day.
												</option>
												<option value='for dog'>
													I'd like to do something special for my dog.
												</option>
											</select>
											{errors.subject && (
												<p className='mt-1 text-sun-300'>
													{errors.subject.type === 'required' &&
														'This field is required.'}
												</p>
											)}
										</div>
									</div>

									<div className='group mx-auto mb-12 mt-16 w-full shadow-lg transition duration-500 sm:mb-24 sm:w-[45%]'>
										<input
											type='submit'
											value='Become A Member'
											className='flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-banana-yellow-50 px-10 py-3 font-title-serif text-sun-300 transition duration-500 group-hover:bg-sun-300 group-hover:text-banana-yellow-50'
										/>
									</div>
								</form>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactUs;

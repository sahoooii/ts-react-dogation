import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { faBone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactForm = () => {
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
	const formInputStyle = `w-full bg-sand-80 p-2 text-lg outline-none placeholder:uppercase`;

	return (
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
				<h1 className='flex items-center justify-center pb-2 pt-5 text-center text-2xl font-bold sm:pb-6 sm:pt-10 sm:text-4xl'>
					<FontAwesomeIcon
						icon={faBone}
						className='sm:fa-lg fa-xs mr-2 text-light-green-20 sm:mr-4'
					/>{' '}
					Membership{' '}
					<FontAwesomeIcon
						icon={faBone}
						className='sm:fa-lg fa-xs ml-2 text-light-green-20 sm:ml-4'
					/>
				</h1>

				<form
					method='POST'
					target='_blank'
					action={import.meta.env.VITE_FORM_SUBMIT}
					onSubmit={onSubmit}
				>
					<div className='sm:flex sm:justify-between'>
						<div className={`${formDesignStyle} mt-6 sm:w-[40%]`}>
							<label htmlFor='firstName'></label>
							<input
								placeholder='First Name'
								// name='firstName'
								className={formInputStyle}
								type='text'
								autoComplete='on'
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
						<div className={`${formDesignStyle} mt-6 sm:w-[40%]`}>
							<label htmlFor='lastName'></label>
							<input
								placeholder='Last Name'
								// name='lastName'
								className={formInputStyle}
								type='text'
								autoComplete='on'
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

					<div className={`${formDesignStyle} mt-6 sm:w-[90%]`}>
						<label htmlFor='phone'></label>
						<input
							placeholder='Phone Number'
							// name='phone'
							className={formInputStyle}
							type='text'
							autoComplete='on'
							{...register('phone', {
								required: true,
								pattern:
									/^^\(?([0-9]{3})\)?[-. ]?([0-9]{3,4})[-. ]?([0-9]{4})$/,
							})}
						/>
						{errors.phone && (
							<p className='mt-1  text-sun-300'>
								{errors.phone.type === 'required' && 'This field is required.'}
								{errors.phone.type === 'pattern' && 'Invalid phone number.'}
							</p>
						)}
					</div>

					<div className={`${formDesignStyle} mt-6 sm:w-[90%]`}>
						<label htmlFor='email' />
						<input
							placeholder='E-Mail'
							// name='email'
							className={formInputStyle}
							type='text'
							autoComplete='on'
							{...register('email', {
								required: true,
								pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							})}
						/>
						{errors.email && (
							<p className='mt-1  text-sun-300'>
								{errors.email.type === 'required' && 'This field is required.'}
								{errors.email.type === 'pattern' && 'Invalid email address.'}
							</p>
						)}
					</div>

					<div className={`${formDesignStyle} mt-6 sm:w-[90%]`}>
						<label htmlFor='subject'></label>
						<select
							// name='subject'
							className={`${formInputStyle}`}
							placeholder='Subject line'
							defaultValue={'DEFAULT'}
							{...register('subject', {
								required: true,
							})}
							required
						>
							<option hidden value=''>
								{/* SELECT HERE */}
							</option>
							<option disabled value='DEFAULT'>
								What are you looking forward to at Dogation?
							</option>
							<option value='activity'>
								Exciting Activities (Fun experiences offered at our facilities)
							</option>
							<option value='relax'>
								A Relaxing Getaway (Enjoy a peaceful, all-day retreat at our
								resort)
							</option>
							<option value='for dog'>
								Something Special for My Dog (Unique treats, services, or
								surprises for my furry friend!)
							</option>
						</select>
						{errors.subject && (
							<p className='mt-1 text-sun-300'>
								{errors.subject.type === 'required' &&
									'This field is required.'}
							</p>
						)}
					</div>

					<div className='hover:translate-y-0.7 group mx-auto mb-12 mt-16 w-full shadow-lg transition duration-500 sm:mb-24 sm:w-[45%]'>
						<input
							type='submit'
							value='Become A Member'
							className='flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-banana-yellow-50 px-8 py-3 font-title-serif text-xl text-sun-300 transition duration-500 group-hover:translate-y-0.5 group-hover:bg-sun-300 group-hover:text-banana-yellow-50  md:px-6 md:py-3'
						/>
					</div>
				</form>
			</div>
		</motion.div>
	);
};

export default ContactForm;

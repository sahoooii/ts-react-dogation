import { SelectedPage } from '@/types/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactImage from '@/assets/contact/standingDog.jpg';
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

	const formDesignStyle = `mx-auto w-[90%] border-b-2 border-light-green-20 sm:w-[80%]`;
	const formInputStyle = `w-full bg-sand-80 p-2 text-sm outline-none placeholder:uppercase sm:text-lg`;

	return (
		<section id='contactus' className='h-full bg-light-green-100 py-36'>
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
							<form
								action='https://formsubmit.co/d8ba071863b209c206352f351fbccf9e'
								method='POST'
								target='_blank'
								onSubmit={onSubmit}
							>
								<div className='mx-auto border-2 border-light-green-20 bg-sand-80 p-10 shadow-lg'>
									<h1 className='pb-2 pt-5 text-center text-lg font-bold sm:pb-6 sm:pt-10 sm:text-4xl'>
										<FontAwesomeIcon
											icon={faBone}
											className=' mr-3 text-banana-yellow-200'
										/>
										Dogation Member
										<FontAwesomeIcon
											icon={faBone}
											className=' ml-3 text-banana-yellow-200'
										/>
									</h1>

									<div className='grid gap-y-6 sm:grid-cols-2'>
										<div className={formDesignStyle}>
											<label htmlFor='name'></label>
											<input
												placeholder='My Name is'
												name='name'
												className={formInputStyle}
												type='text'
											></input>
										</div>
										<div className={formDesignStyle}>
											<label htmlFor='phone'></label>
											<input
												placeholder='My number is'
												name='phone'
												className={formInputStyle}
												type='text'
											></input>
										</div>
									</div>
								</div>
							</form>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactUs;

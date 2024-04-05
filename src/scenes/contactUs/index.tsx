import { SelectedPage } from '@/types/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactStanding from '@/assets/contact/standingDog.jpg';
import TitleText from '@/shared/TitleText';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from './ContactForm';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
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
							<div className='w-full before:absolute before:-right-1 before:-top-24 before:z-[1] md:before:content-dogation-contact'>
								<img
									src={ContactStanding}
									alt={ContactStanding}
									className='mx-auto w-[280px] rounded-full shadow-lg transition duration-500 hover:scale-90 sm:w-[350px] md:mt-8 md:w-full md:rounded-md'
								/>
							</div>
						</motion.div>

						{/* Contact form */}
						<ContactForm />
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactUs;

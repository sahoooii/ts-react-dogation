import { SelectedPage } from '@/types/types';
import { motion } from 'framer-motion';
import TitleText from '@/shared/TitleText';
import { faBone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Service from './Service';
import Tagline from '@/shared/Tagline';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ setSelectedPage }: Props) => {
	return (
		<section id='services' className='min-h-full bg-sand-50 py-36'>
			<div className='mx-auto w-5/6'>
				<motion.div
					onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
				>
					{/* Header */}
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.8 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<div className='flex flex-col items-center justify-center md:w-3/5 md:items-start'>
							<TitleText>
								<span className='text-dark-blue-50'>Our </span>Services{' '}
								<FontAwesomeIcon
									icon={faBone}
									className='text-light-green-100'
								/>
							</TitleText>
							<div className='my-5 w-full text-xl leading-relaxed sm:leading-8'>
								<Tagline>- UNFORGETTABLE EXPERIENCE -</Tagline>
								<p>
									Dogation isn’t just a place to relax. With our unique
									services, you and your buddy will create unforgettable
									memories together.
								</p>
							</div>
						</div>
					</motion.div>

					{/* Services Lists */}
					<Service />
				</motion.div>
			</div>
		</section>
	);
};

export default Services;

import { SelectedPage } from '@/types/types';
import { motion } from 'framer-motion';
import { faShieldDog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Facility from './Facility';
import TitleText from '@/shared/TitleText';
import Tagline from '@/shared/Tagline';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Facilities = ({ setSelectedPage }: Props) => {
	return (
		<section
			id='facilities'
			className='min-h-full w-full bg-sand-80 py-52 sm:py-48'
		>
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.Facilities)}
			>
				<motion.div
					className='mx-auto w-5/6'
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
							<span className='text-dark-blue-50'>Our </span>Facilities{' '}
							<FontAwesomeIcon
								icon={faShieldDog}
								className='text-dark-blue-100'
							/>
						</TitleText>
						<div className='my-5 w-full text-xl leading-relaxed sm:leading-8'>
							<Tagline>- Enjoy every moment, Day and Night! -</Tagline>
							Our facilities are designed to make your stay unforgettable.
							<br />- You’ll wish you had more than just one day! -
						</div>
					</div>
				</motion.div>

				{/* Swiper */}
				<Facility />
			</motion.div>
		</section>
	);
};

export default Facilities;

import { SelectedPage } from '@/types/types';
import { motion } from 'framer-motion';
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Facility from './Facility';
import TitleText from '@/shared/TitleText';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Facilities = ({ setSelectedPage }: Props) => {
	return (
		<section
			id='facilities'
			className='min-h-full w-full bg-sand-80 py-28 sm:py-36'
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
					<div className='md:w-3/5'>
						<TitleText>
							All <span className='text-dark-blue-50'>day</span> , All{' '}
							<span className='text-dark-blue-50'>Night </span>
							<FontAwesomeIcon
								icon={faMartiniGlassCitrus}
								className='align-baseline text-banana-yellow-200'
							/>
						</TitleText>
						<p className='my-5 text-sm leading-5 text-dark-blue-50'>
							You guys must have fun all day, all night. We have many facilities
							to enjoy your staying. <br />
							Not enough time is just only a day!
						</p>
					</div>
				</motion.div>

				{/* Swiper */}
				<Facility />
			</motion.div>
		</section>
	);
};

export default Facilities;

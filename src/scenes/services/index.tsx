import { SelectedPage, ServicesType } from '@/types/types';
import { motion } from 'framer-motion';
import TitleText from '@/shared/TitleText';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Service from './Service';
import { ServicesLists } from './ServicesLists';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.3 },
	},
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
						className='md:my-5 md:w-3/5'
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
							Not Only Chill Out{' '}
							<FontAwesomeIcon
								icon={faUmbrellaBeach}
								className='align-baseline text-light-green-100'
							/>
						</TitleText>
						<p className='my-5 text-sm leading-5'>
							Dogation is not only for chilling out. We have many services.
							<br />
							You and your buddy have an unforgettable time.
						</p>
					</motion.div>

					{/* Services */}
					<motion.div
						className='mt-24 items-center justify-center sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-12'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.3 }}
						variants={container}
					>
						{ServicesLists.map((service: ServicesType) => (
							<Service
								key={service.id}
								icon={service.icon}
								title={service.title}
								description={service.description}
							/>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Services;

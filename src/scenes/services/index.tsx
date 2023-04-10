import { SelectedPage, ServicesType } from '@/types/types';
import dogHotel from '@/assets/icons/dog-hotel.png';
import dogPhoto from '@/assets/icons/dog-photo.png';
import dogTraining from '@/assets/icons/dog-training.png';
import dogTrimming from '@/assets/icons/dog-trimming.png';
import { motion } from 'framer-motion';
import TitleText from '@/shared/TitleText';
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Service from './Service';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const services: Array<ServicesType> = [
	{
		id: 1,
		icon: dogHotel,
		title: 'Hotel',
		description:
			"You can stay at our hotel with your buddy everywhere you want! We have a Huge dog run. Your dog can run anytime. Are you guys tired? Don't worry! We allow sleeping on the couch and bed with your dog there. And We also have perfect dog amenities. You don't have to bring heavy stuff. But don't forget to bring your buddy's favorite toys!  ",
	},
	{
		id: 2,
		icon: dogPhoto,
		title: 'Photo Studio',
		description:
			"We have a perfect photo studio. You can choose two courses, Selfie or Pro-style. Just make a reservation and pick the course using Dogation App. We rent cute and funny costumes for you guys. Selfie style is open 24/7. Pro-style is a little more expensive than a selfie. But worth it!! Let's take a picture for the most memorable time.",
	},
	{
		id: 3,
		icon: dogTrimming,
		title: 'Trimming Salon',
		description:
			"Did you forget to clean up your dog? Do you want to change your buddy's hairstyle? Don't worry about it! We have a perfect trimming salon! During a drink at the bar, your dog will change cuter. And we are located right next door to the photo studio. You guys take a picture with a New Style! We also give a 10% discount to hotel guests.",
	},
	{
		id: 4,
		icon: dogTraining,
		title: 'Training Room',
		description:
			'Do you want your dog to smatter? Is your dog get into all kinds of trouble at home? We have classes for dogs. We have great dog trainers. We take a walk with your dog and training at outside. And inside, training commands, like sit, down, stay. Also, we have an advanced class. Teach more complex commands. And the most fun part is Play-Time! Your dog makes a best friend.',
	},
];

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
								icon={faMartiniGlassCitrus}
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
						viewport={{ once: true, amount: 0.5 }}
						variants={container}
					>
						{services.map((service: ServicesType) => (
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

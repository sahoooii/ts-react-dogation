import TitleText from '@/shared/TitleText';
import { FacilitiesType, SelectedPage } from '@/types/types';
import { motion } from 'framer-motion';
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dogRunJump from '@/assets/facilities/dogRunJump.jpg';
import photoStudio from '@/assets/facilities/photo_studio.jpg';
import training from '@/assets/facilities/training.jpg';
import dogCafe from '@/assets/facilities/dogCafe.jpg';
import trimming from '@/assets/facilities/trimming.jpg';
import React from 'react';
import Facility from './Facility';

const OurFacilities: Array<FacilitiesType> = [
	{
		title: 'Dog Run',
		description:
			"We have many expansive dog runs. There are four types of dog runs. These are  Large breeds, Medium breeds, Small breeds, and For all dogs. There is also a pond to swim each dog runs. When your buddy is wet, don't worry, we have a self-shampoo room!",
		image: dogRunJump,
	},
	{
		title: 'Photo Studio',
		description:
			'How cute this dog is! Yes, this is my dog Haha. We have a perfect photo studio. Selfie style is open 24/7. You can take a picture anytime you want! Do you want to take an anniversary photo? Of course, we have a pro cameraman too! You can make a reservation using Dogation app.',
		image: photoStudio,
	},
	{
		title: 'Trimming Salon',
		description:
			'We have a cute trimming salon right next to a Photo studio. When your buddy gets dirty, you can ask trimmers to clean. To make a reservation, use our app. We have many courses you can pick from them. Also, we have a self-shampoo room!',
		image: trimming,
	},
	{
		title: 'Training Class',
		description:
			'There is the Training room. Many kinds of dogs learn together just like this. We make an original curriculum for each dog. We have two courses, a Nursery course and a Play course which is a Nursery course teaching basic commands to advanced ones. And a Play course is just having fun with other dogs! Of course, trainers take a walk between both courses.',
		image: training,
	},
	{
		title: 'Dog Cafe',
		description:
			'We have a stylish dog cafe. We have a great chef and barista. They cook for you and your best friend! During the daytime, there is also a coworking space. You do your job during the day. And in the nighttime, we are changing a fancy Bar! Of course, you can take your buddy there. We make a Mocktail for your buddy!',
		image: dogCafe,
	},
];

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Facilities = ({ setSelectedPage }: Props) => {
	return (
		<section id='facilities' className='min-h-full w-full bg-orange-300 py-36'>
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
							All day , All Night{' '}
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

				<div className='mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden'>
					<ul className='w-[2400px] whitespace-nowrap'>
						{OurFacilities.map((facility, index) => (
							<Facility
								key={index}
								title={facility.title}
								description={facility.description}
								image={facility.image}
							/>
						))}
					</ul>
				</div>
			</motion.div>
		</section>
	);
};

export default Facilities;

import TitleText from '@/shared/TitleText';
import { FacilitiesType, SelectedPage } from '@/types/types';
import { motion } from 'framer-motion';
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Images
import dogRunJump from '@/assets/facilities/dogRunJump.jpg';
import photoStudio from '@/assets/facilities/photo_studio.jpg';
import training from '@/assets/facilities/training.jpg';
import dogCafe from '@/assets/facilities/dogCafe.jpg';
import trimming from '@/assets/facilities/trimming.jpg';
import Facility from './Facility';

import { Swiper, SwiperSlide } from 'swiper/react';
import { IonIcon } from '@ionic/react';
import { chevronBack, chevronForward } from 'ionicons/icons';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

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
			'We have a cute trimming salon right next to a Photo studio. When your buddy gets dirty, you can ask trimmers to clean. To make a reservation, use our Dogation App. We have many courses you can pick from them. Also, we have a self-shampoo room!',
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
		<section
			id='facilities'
			className='min-h-full w-full bg-sand-80 sm:py-36 py-28'
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
							<span className='text-dark-blue-50'>Night{' '}</span>
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

				{/* swiper images */}
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					loop={true}
					slidesPerView={'auto'}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: false,
					}}
					pagination={{ el: '.swiper-pagination', clickable: true }}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
					modules={[EffectCoverflow, Pagination, Navigation]}
					className='relative h-[27rem] w-full pt-8 sm:h-[34rem] md:h-[37rem]'
				>
					{OurFacilities.map((facility, index) => (
						<SwiperSlide
							key={index}
							className='relative h-[20rem] w-[17rem] sm:h-[26rem] sm:w-[30rem] md:h-[30rem] md:w-[34rem]'
						>
							<Facility
								title={facility.title}
								description={facility.description}
								image={facility.image}
							/>
						</SwiperSlide>
					))}
					{/* slider-controller */}
					<div className='relative bottom-12 flex items-center justify-center'>
						<div className='swiper-button-prev group left-[20%] h-14 w-14 translate-x-[-20%] rounded-full bg-light-green-100 drop-shadow-md transition after:hidden after:content-none sm:left-[28%] sm:translate-x-[-28%] md:left-[35%] md:translate-x-[-35%]'>
							<IonIcon
								icon={chevronBack}
								className='text-4xl text-white opacity-60 transition duration-500 group-hover:-translate-x-2'
							></IonIcon>
						</div>
						<div className='swiper-button-next group left-[80%] h-14 w-14 translate-x-[-80%] rounded-full bg-light-green-100 drop-shadow-md transition after:hidden after:content-none sm:left-[72%] sm:translate-x-[-72%] md:left-[65%] md:translate-x-[-65%]'>
							<IonIcon
								icon={chevronForward}
								className='text-4xl text-white opacity-60 transition duration-500 group-hover:translate-x-2'
							></IonIcon>
						</div>
						<div className='swiper-pagination relative top-1 w-60 drop-shadow-md [&_.swiper-pagination-bullet-active]:drop-shadow-md'></div>
					</div>
				</Swiper>
			</motion.div>
		</section>
	);
};

export default Facilities;

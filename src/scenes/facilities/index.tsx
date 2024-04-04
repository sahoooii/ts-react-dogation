import { SelectedPage } from '@/types/types';
import { motion } from 'framer-motion';
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Facility from './Facility';
import { FacilitiesLists } from './FacilitiesLists';
import TitleText from '@/shared/TitleText';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IonIcon } from '@ionic/react';
import { chevronBack, chevronForward } from 'ionicons/icons';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

				{/* swiper images */}
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					loop={true}
					slidesPerView={'auto'}
					coverflowEffect={{
						rotate: 10,
						stretch: 0,
						depth: 100,
						modifier: 2.5,
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
					{FacilitiesLists.map((facility, index) => (
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

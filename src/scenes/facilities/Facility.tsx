import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { IonIcon } from '@ionic/react';
import { chevronBack, chevronForward } from 'ionicons/icons';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FacilitiesLists } from './FacilitiesLists';

const Facility = () => {
	const overlayStyles = `py-12 px-10 sm:px-12 absolute z-30 flex flex-col whitespace-normal bg-light-blue-50 text-center opacity-0 transition items-center justify-center duration-500 hover:opacity-90`;

	const imagesSize =
		'h-[30rem] w-[24rem] rounded-3xl sm:shadow-2xl shadow-l sm:h-[30rem] sm:w-[34rem] object-cover';

	return (
		<motion.div
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.5 }}
			transition={{ delay: 0.4, duration: 0.8 }}
			variants={{
				hidden: { opacity: 0, y: -50 },
				visible: { opacity: 1, y: 0 },
			}}
		>
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
				className='relative w-full overflow-visible pt-8'
				// className='relative h-[27rem] w-full overflow-visible pt-8 sm:h-[30rem] md:h-[37rem]'
			>
				{FacilitiesLists.map((facility, index) => (
					<SwiperSlide
						key={`${index}-${facility.title}`}
						className='relative h-[30rem] w-[24rem] sm:h-[26rem] sm:w-[30rem] md:h-[30rem] md:w-[34rem]'
					>
						<li
							className={`${imagesSize} relative inline-block h-[30rem] w-[24rem] rounded-3xl`}
						>
							<div className={`${overlayStyles} ${imagesSize}`}>
								<h4 className='-mt-4 font-title-serif text-3xl font-bold sm:text-4xl '>
									{facility.title}
								</h4>
								{/* <p className='sm:text-md mt-3 text-lg leading-relaxed sm:mt-6 sm:leading-8 text-start'>
									{facility.description}
								</p> */}
								{Array.isArray(facility.description) ? (
									<div className='mt-3'>
										{facility.description.map((text, index) => (
											<p
												key={index}
												className='sm:text-md mt-3 text-start text-lg sm:text-xl leading-relaxed sm:mt-6 sm:leading-8 mb-2'
											>
												{text}
											</p>
										))}
									</div>
								) : (
									<p>{facility.description}</p>
								)}
							</div>
							<img
								src={facility.image}
								alt={facility.image}
								className={imagesSize}
							/>
						</li>
					</SwiperSlide>
				))}
				{/* slider-controller */}
				<div className='absolute -bottom-8 sm:-bottom-40 md:-bottom-24 left-1/2 -mb-12 flex w-full -translate-x-1/2 items-center justify-center gap-6 sm:mb-10 md:mb-6'>
					<div className='swiper-button-prev group left-[20%] flex h-16 w-16 translate-x-[-20%] items-center justify-center rounded-full bg-light-green-100 drop-shadow-md transition after:hidden after:content-none sm:left-[28%] sm:translate-x-[-28%] md:left-[35%] md:translate-x-[-35%]'>
						<IonIcon
							icon={chevronBack}
							className='text-4xl text-white opacity-60 transition duration-500 group-hover:-translate-x-2'
						></IonIcon>
					</div>
					<div className='swiper-button-next group left-[80%] flex h-16 w-16 translate-x-[-80%] items-center justify-center rounded-full bg-light-green-100 drop-shadow-md transition after:hidden after:content-none sm:left-[72%] sm:translate-x-[-72%] md:left-[65%] md:translate-x-[-65%]'>
						<IonIcon
							icon={chevronForward}
							className='text-4xl text-white opacity-60 transition duration-500 group-hover:translate-x-2'
						></IonIcon>
					</div>
					<div className='swiper-pagination relative top-1 w-60 drop-shadow-md [&_.swiper-pagination-bullet-active]:drop-shadow-md'></div>
				</div>
			</Swiper>
		</motion.div>
	);
};

export default Facility;

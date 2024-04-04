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
	const overlayStyles = `p-4 absolute z-30 flex flex-col whitespace-normal bg-light-blue-50 text-center opacity-0 transition items-center justify-center duration-500 hover:opacity-90`;

	const imagesSize =
		'h-[18rem] w-[17rem] rounded-3xl sm:shadow-2xl shadow-l sm:h-[26rem] sm:w-[30rem] md:h-[30rem] md:w-[34rem] object-cover';

	return (
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
					<li
						className={`${imagesSize} relative inline-block h-[20rem] w-[17rem] rounded-3xl`}
					>
						<div className={`${overlayStyles} ${imagesSize}`}>
							<h4 className='-mt-4 font-title-serif text-lg font-bold sm:text-3xl '>
								{facility.title}
							</h4>
							<p className='sm:text-md mt-3 text-xs sm:mt-6 sm:text-base'>
								{facility.description}
							</p>
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
	);
};

export default Facility;

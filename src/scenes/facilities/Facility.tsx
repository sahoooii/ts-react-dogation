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
	const overlayStyles = `absolute inset-0 flex flex-col items-center justify-center bg-light-blue-50 opacity-0 transition duration-500 hover:opacity-90 rounded-3xl px-6 py-4 sm:px-8 sm:py-8`;

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
			className='relative mt-10 pb-[4rem]'
		>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				slidesPerView={1.4} // モバイル
				breakpoints={{
					640: { slidesPerView: 1.8 }, // タブレット
					1024: { slidesPerView: 3.2 }, // PC
				}}
				coverflowEffect={{
					rotate: 0,
					stretch: -10,
					depth: 200,
					modifier: 1.2,
					slideShadows: false,
				}}
				// pagination={{ el: '.swiper-pagination', clickable: true }}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				pagination={{ clickable: true }}
				// navigation={true}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className='relative w-full overflow-hidden'
			>
				{FacilitiesLists.map((facility, index) => (
					<SwiperSlide key={`${index}-${facility.title}`} className='relative'>
						<li className='relative mx-auto inline-block h-[32rem] w-full max-w-[400px] sm:h-[32rem] sm:max-w-full md:h-[36rem]'>
							<div className={overlayStyles}>
								<h4 className='font-title-serif text-3xl font-bold sm:text-4xl text-center'>
									{facility.title}
								</h4>
								{Array.isArray(facility.description) ? (
									<div className='mt-6'>
										{facility.description.map((text, index) => (
											<p
												key={index}
												className='sm:text-md mb-2 text-lg leading-relaxed sm:text-xl sm:leading-8'
											>
												{text}
											</p>
										))}
									</div>
								) : (
									<p className='text-start text-lg leading-relaxed sm:text-xl sm:leading-7'>
										{facility.description}
									</p>
								)}
							</div>
							<img
								src={facility.image}
								alt={facility.image}
								className='h-full w-full rounded-3xl object-cover'
							/>
						</li>
					</SwiperSlide>
				))}

				{/* 矢印 */}
				<div className='absolute bottom-1/2 left-1/2 z-50 hidden w-full -translate-x-1/2 items-center justify-between md:flex'>
					{/* 前へボタン */}
					<div className='swiper-button-prev flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white transition after:hidden hover:bg-gray-600'>
						<IonIcon icon={chevronBack} className='text-2xl' />
					</div>
					{/* 次へボタン */}
					<div className='swiper-button-next flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white transition after:hidden hover:bg-gray-600'>
						<IonIcon icon={chevronForward} className='text-2xl' />
					</div>
				</div>
				{/* ページネーション */}
				<div className='pagination-container absolute bottom-0 left-1/2 z-50 flex -translate-x-1/2 justify-center pb-4'>
					<div className='swiper-pagination'></div>
				</div>
			</Swiper>
		</motion.div>
	);
};

export default Facility;

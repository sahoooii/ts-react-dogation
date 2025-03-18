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
	// const overlayStyles = `py-12 px-10 sm:px-12 absolute z-30 flex flex-col whitespace-normal bg-light-blue-50 text-center opacity-0 transition items-center justify-center duration-500 hover:opacity-90`;
	const overlayStyles = `absolute inset-0 flex flex-col items-center justify-center bg-light-blue-50 text-center opacity-0 transition duration-500 hover:opacity-90 rounded-3xl  px-6 py-8 sm:px-8 sm:py-10`;

	// 	const overlayStyles = `absolute z-30 flex flex-col whitespace-normal bg-light-blue-50
	// text-center opacity-0 transition items-center justify-center duration-500 hover:opacity-90
	// px-6 py-8 sm:px-8 sm:py-10 overflow-y-auto max-h-full rounded-3xl`;

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
				slidesPerView={1.4} // モバイル
				breakpoints={{
					640: { slidesPerView: 1.8 }, // タブレット
					1024: { slidesPerView: 3.2 }, // PC
				}}
				coverflowEffect={{
					rotate: 0,
					stretch: -50,
					depth: 180,
					modifier: 1.2,
					slideShadows: false,
				}}
				pagination={{ el: '.swiper-pagination', clickable: true }}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className='relative w-full overflow-hidden'
			>
				{FacilitiesLists.map((facility, index) => (
					<SwiperSlide key={`${index}-${facility.title}`} className='relative'>
						<li className='relative inline-block h-[20rem] w-full sm:h-[24rem] md:h-[30rem]'>
							<div className={overlayStyles}>
								<h4 className='font-title-serif text-3xl font-bold sm:text-4xl'>
									{facility.title}
								</h4>
								{Array.isArray(facility.description) ? (
									<div className='mt-3'>
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
									<p className='text-start text-lg leading-relaxed sm:text-xl sm:leading-8'>
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
				{/* 矢印 & ペジネーションコンテナ */}
				<div className='absolute bottom-[-3rem] left-1/2 z-50 flex -translate-x-1/2 items-center gap-4'>
					{/* 前へボタン */}
					<div className='swiper-button-prev block flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white after:hidden'>
						<IonIcon icon={chevronBack} className='text-2xl' />
					</div>

					{/* ペジネーション */}
					<div className='swiper-pagination block flex justify-center'></div>

					{/* 次へボタン */}
					<div className='swiper-button-next block flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white after:hidden'>
						<IonIcon icon={chevronForward} className='text-2xl' />
					</div>
				</div>
			</Swiper>
		</motion.div>
	);
};

export default Facility;

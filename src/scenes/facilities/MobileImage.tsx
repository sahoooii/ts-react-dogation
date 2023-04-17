import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IonIcon } from '@ionic/react';
import { chevronBack, chevronForward } from 'ionicons/icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

type Props = {
	title: string;
	description: string;
	image: string;
};

const MobileImage = ({ title, description, image }: Props) => {
	return (
		<>
			<img
				src={image}
				alt={image}
				className='block h-[24rem] w-[20rem] rounded-3xl sm:h-[30rem] sm:w-[34rem] md:h-[34rem] md:w-[38rem]'
			/>
		</>
	);
};

export default MobileImage;

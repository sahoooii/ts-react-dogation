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
	const arrowStyle = `absolute top-[calc(50%-20px)] h-[40px] w-[40px] rounded-full bg-white flex justify-center items-center select-none cursor-pointer font-bold text-2xl z-20`;

	return (
		<>
			<img src={image} alt={image} />
		</>
	);
};

export default MobileImage;

import { SelectedPage } from '@/types/types';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
	icon: string;
	title: string;
	description: string;
	setSelectedPage: (value: SelectedPage) => void;
};

const Service = ({ icon, title, description, setSelectedPage }: Props) => {
	return (
		<div className='mt-20 sm:mt-8 sm:h-[400px] sm:max-w-[400px] rounded-md border-2 border-sand-80 px-5 py-8 text-center justify-center'>
			<div className='mb-4 flex justify-center'>
				<div className='rounded-full border-2 border-sun-300 bg-banana-yellow-50 p-4 -mt-20'>
					<img src={icon} alt={icon} className='' />
				</div>
			</div>
			<h4 className='font-title-serif text-lg font-bold text-sun-300'>
				{title}
			</h4>
			<p className='my-3 text-sm leading-6'>{description}</p>
		</div>
	);
};

export default Service;

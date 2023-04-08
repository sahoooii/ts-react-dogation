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
		<div className='mt-20 justify-center rounded-md border-2 border-sand-80 px-5 py-8 text-center sm:mt-8 sm:h-[400px] sm:max-w-[500px]'>
			<div className='mb-4 flex justify-center'>
				<div className='-mt-20 rounded-full border-2 border-sun-300 bg-banana-yellow-50 p-4'>
					<img src={icon} alt={icon} className='hover:scale-110' />
				</div>
			</div>
			<h4 className='font-title-serif text-xl font-bold text-sun-300 hover:scale-125 md:text-2xl'>
				{title}
			</h4>
			<p className='my-3 text-sm leading-6 md:my-5 md:text-base'>
				{description}
			</p>
		</div>
	);
};

export default Service;

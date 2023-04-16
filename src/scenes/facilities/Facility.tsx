import React from 'react';
type Props = {
	title: string;
	description: string;
	image: string;
};

const Facility = ({ title, description, image }: Props) => {
	const overlayStyles = `p-4 absolute z-30 flex h-[380px] w-[450px] flex-col whitespace-normal bg-light-blue-50 text-center opacity-0 transition items-center justify-center duration-500 hover:opacity-90`;
	return (
		<li className='relative mx-5 inline-block h-[380px] w-[450px]'>
			<div className={overlayStyles}>
				<h4 className='-mt-4 text-2xl font-bold'>{title}</h4>
				<p className='mt-5'>{description}</p>
			</div>
			<img src={`${image}`} alt={image} />
		</li>
	);
};

export default Facility;

import React from 'react';

type Props = {
	title: string;
	description: string;
	image: string;
};

const Facility = ({ title, description, image }: Props) => {
	const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col whitespace-normal bg-light-blue-20 text-center opacity-0 transition items-center justify-center duration-500 hover:opacity-90`;
	return (
		<li className='relative mx-5 inline-block h-[380px] w-[450px]'>
			<div className={overlayStyles}>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
			<img src={`${image}`} alt={image} />
		</li>
	);
};

export default Facility;

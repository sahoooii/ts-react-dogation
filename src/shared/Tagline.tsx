import React from 'react';

type Props = {
	children: React.ReactNode;
};

const Tagline = ({ children }: Props) => {
	return (
		<p className='my-5 text-center text-2xl font-extrabold capitalize text-light-blue-100 md:text-start sm:text-3xl'>
			{children}
		</p>
	);
};

export default Tagline;

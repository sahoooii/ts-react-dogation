import React from 'react';

type Props = {
	children: React.ReactNode;
};

const TitleText = ({ children }: Props) => {
	return (
		<h1 className='basis-3/5 font-title-serif sm:text-5xl text-[40px] font-bold text-sun-300'>
			{children}
		</h1>
	);
};

export default TitleText;

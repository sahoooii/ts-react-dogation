import { SelectedPage } from '@/types/types';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
	children: React.ReactNode;
	setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
	return (
		<AnchorLink
			className='rounded-md bg-banana-yellow-50 px-10 py-2 font-title-serif text-sun-300 transition duration-500 hover:bg-sun-300 hover:text-banana-yellow-50'
			onClick={() => setSelectedPage(SelectedPage.ContactUs)}
			href={`#${SelectedPage.ContactUs}`}
		>
			{children}
		</AnchorLink>
	);
};

export default ActionButton;

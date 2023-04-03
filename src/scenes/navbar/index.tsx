import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/logo/logo-circle.png';
import Link from './Link';
import { LinksType, SelectedPage } from '@/types/types';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
	const links: Array<LinksType> = [
		{
			id: 1,
			link: 'Home',
		},
		{
			id: 2,
			link: 'Services',
		},
		{
			id: 3,
			link: 'Facilities',
		},
		{
			id: 4,
			link: 'Contact Us',
		},
	];

	const flexBetween = 'flex items-center justify-between';
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px');

	return (
		<nav>
			<div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
				<div className={`${flexBetween} mx-auto w-5/6`}>
					<div className={`${flexBetween} w-full gap-16`}>
						{/* Left Side */}
						<img src={Logo} alt='logo' className='h-24 w-24 rounded-full' />

						{/*Right Side */}
						{isAboveMediumScreens ? (

						<div className={`${flexBetween} w-full`}>
							<div className={`${flexBetween} gap-8 font-nav-cursive text-lg`}>
								{links.map(({ id, link }) => (
									<Link
										key={id}
										page={link}
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
								))}
							</div>
							<div>
								<button className='font-title-serif'>Become A Member</button>
							</div>
						</div>
						) : (
							<button className='rounded-full bg-sun-300 p-2'>
								{/* 1h2 */}
							</button>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

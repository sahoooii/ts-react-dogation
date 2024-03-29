import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import LogoCircle from '@/assets/logo/dogation-logo-circle.png';
import Link from './Link';
import { LinksType, SelectedPage } from '@/types/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

type Props = {
	isTopOfPage: boolean;
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
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
	const isAboveMediumScreen = useMediaQuery('(min-width: 1060px');
	const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);
	const navbarBackground = isTopOfPage ? '' : 'bg-light-blue-50 drop-shadow';

	return (
		<nav>
			<div
				className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
			>
				<div className={`${flexBetween} mx-auto w-5/6`}>
					<div className={`${flexBetween} w-full gap-16`}>
						{/* Left Side */}
						<img src={LogoCircle} alt='logo' className='h-20 w-20' />

						{isAboveMediumScreen ? (
							<div className={`${flexBetween} w-full`}>
								<div
									className={`${flexBetween} gap-8 font-nav-cursive text-lg`}
								>
									{links.map(({ id, link }) => (
										<Link
											key={id}
											page={link}
											selectedPage={selectedPage}
											setSelectedPage={setSelectedPage}
										/>
									))}
								</div>
								{/* Right Side */}
								<div>
									<ActionButton setSelectedPage={setSelectedPage}>
										Become A Member
									</ActionButton>
								</div>
							</div>
						) : (
							<button
								className='rounded-full bg-sun-300 p-2'
								onClick={() => setIsMenuToggle(!isMenuToggle)}
							>
								<Bars3Icon className='h-6 w-6 font-bold text-banana-yellow-200' />
							</button>
						)}
					</div>
				</div>
			</div>

			{/* Mobile Menu Modal */}
			{!isAboveMediumScreen && isMenuToggle && (
				<div className='fixed bottom-0 right-0 z-40 h-full w-[300px] bg-sun-300 drop-shadow-xl'>
					{/* Close Icon */}
					<div className='flex justify-end p-12'>
						<button onClick={() => setIsMenuToggle(!isMenuToggle)}>
							<XMarkIcon className='h-6 w-6 text-sand-50' />
						</button>
					</div>
					<div className='ml-[33%] flex flex-col gap-10 font-nav-cursive text-2xl'>
						{links.map(({ id, link }) => (
							<Link
								key={id}
								page={link}
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;

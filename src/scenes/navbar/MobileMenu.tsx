import { useEffect, useState } from 'react';
import Link from './Link';
import { Links } from './Links';
import { SelectedPage } from '@/types/types';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

type Props = {
	isTopOfPage: boolean;
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
};

const MobileMenu = ({ selectedPage, setSelectedPage }: Props) => {
	const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	// After load a page, show hamburger icon
	useEffect(() => {
		setIsLoaded(true);
	}, []);

	const mobileMenuVariant = {
		opened: {
			y: '0%',
			transition: {
				delay: 0.15,
				duration: 0.7,
				ease: [0.74, 0, 0.19, 1.02],
			},
		},
		closed: {
			y: '-100%',
			transition: {
				delay: 0.35,
				duration: 0.7,
				ease: [0.74, 0, 0.19, 1.02],
			},
		},
	};

	const ulVariant = {
		opened: {
			transition: {
				delayChildren: 0.8,
				staggerChildren: 0.18,
			},
		},
		closed: {
			transition: {
				staggerChildren: 0.06,
				staggerDirection: -1,
			},
		},
	};

	const liVariant = {
		opened: {
			opacity: 1,
			y: '0%',
			transition: {
				duration: 0.65,
				ease: 'easeOut',
			},
		},
		closed: {
			opacity: 0,
			y: '100%',
			transition: {
				duration: 0.25,
				ease: 'easeInOut',
			},
		},
	};

	return (
		<>
			<button
				className={`rounded-full bg-sun-300 p-2 transition-opacity duration-500 ${
					isLoaded ? 'opacity-100' : 'opacity-0'
				}`}
				onClick={() => setIsMenuToggle(!isMenuToggle)}
			>
				<Bars3Icon className='h-6 w-6 font-bold text-banana-yellow-200' />
			</button>

			{/* overlay Bg */}
			<div
				className={`${
					isMenuToggle &&
					`fixed left-0 top-0 h-full w-full overflow-auto bg-slate-400 opacity-40`
				}`}
				onClick={() => setIsMenuToggle(!isMenuToggle)}
			/>
			{/* Side Menu */}
			<motion.div initial='closed' animate={isMenuToggle ? 'opened' : 'closed'}>
				<motion.div
					className='x-10 fixed bottom-0 right-0 top-0 z-40 h-full w-[300px] items-center bg-sun-300'
					variants={mobileMenuVariant}
					onClick={() => setIsMenuToggle(!isMenuToggle)}
				>
					{/* Close Icon */}
					<div className='flex justify-end p-12'>
						<motion.button
							variants={mobileMenuVariant}
							onClick={() => setIsMenuToggle(!isMenuToggle)}
						>
							<XMarkIcon className='h-6 w-6 text-sand-50' />
						</motion.button>
					</div>

					<motion.ul
						className='mx-auto flex flex-col items-center justify-center gap-12 font-title-serif text-3xl'
						variants={ulVariant}
					>
						{Links.map(({ id, link }) => (
							<motion.li
								key={id}
								className='list-none'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.7 }}
								variants={liVariant}
							>
								<Link
									page={link}
									selectedPage={selectedPage}
									setSelectedPage={setSelectedPage}
								/>
							</motion.li>
						))}
					</motion.ul>
				</motion.div>
			</motion.div>
		</>
	);
};

export default MobileMenu;

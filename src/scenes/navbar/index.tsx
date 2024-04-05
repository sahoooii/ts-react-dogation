import LogoCircle from '@/assets/logo/dogation-logo-circle.png';
import Link from './Link';
import { SelectedPage } from '@/types/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import MobileMenu from './MobileMenu';
import { Links } from './Links';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
	isTopOfPage: boolean;
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
	const flexBetween = 'flex items-center justify-between';
	const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');
	const navbarBackground = isTopOfPage ? '' : 'bg-light-blue-50';

	return (
		<nav>
			<div
				className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
			>
				<div className={`${flexBetween} mx-auto w-5/6`}>
					<div className={`${flexBetween} w-full gap-16`}>
						{/* Left Side */}
						<AnchorLink href={`#${SelectedPage.Home}`}>
							<img
								src={LogoCircle}
								alt='logo'
								className='h-20 w-20 object-contain'
							/>
						</AnchorLink>

						{isAboveMediumScreen ? (
							<div className={`${flexBetween} w-full`}>
								<div
									className={`${flexBetween} gap-8 font-nav-cursive text-lg`}
								>
									{Links.map(({ id, link }) => (
										<li
											key={id}
											className='list-none transition duration-500 hover:scale-110'
										>
											<Link
												page={link}
												selectedPage={selectedPage}
												setSelectedPage={setSelectedPage}
											/>
										</li>
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
							<div className='flex w-full items-center justify-end'>
								<MobileMenu
									isTopOfPage={isTopOfPage}
									selectedPage={selectedPage}
									setSelectedPage={setSelectedPage}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

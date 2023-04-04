import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/types/types';
import logo from '@/assets/logo/dogation-sm-logo.png';
import hawaii from '@/assets/sponsors/hawaii.png';
import kauai from '@/assets/sponsors/kauai.png';
import patagonia from '@/assets/sponsors/patagonia.png';
import wholeFoods from '@/assets/sponsors/wholeFoods.png';
import topImg from '@/assets/home/beach-walk.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMartiniGlassCitrus, faPaw } from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px');
// 2h2
	return (
		<section id='home' className='bg-light-green-20 py-10 md:h-full md:pb-0'>
			{/* Img and Main Header */}
			<div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
				{/* Main header */}
				<div className='z-10 mt-32 md:basis-3/5'>
					{/* Heading */}
					<div className='md:-mt-20'>
						<div>
							<div>
								<img src={logo} alt='logo' />
							</div>
						</div>

						<p>
							This place is for All dogs and all dog lovers. You can spend time
							all day with your buddy! Our concepts are vacation and dog.
							<br />
							Yes, "DOGATION"!! You can feel like Hawaii beach resorts. We have
							a fancy cafe and hotels and some more. <br />
							Let's chill out on your vacation{' '}
							<FontAwesomeIcon
								icon={faMartiniGlassCitrus}
								className='align-baseline text-sun-300'
							/>
						</p>
					</div>

					{/* Actions */}
					<div>
						<ActionButton setSelectedPage={setSelectedPage}>
							Join Now
						</ActionButton>
						<AnchorLink
							className='text-sun group font-title-serif text-sm font-bold text-light-blue-100  transition duration-500 hover:text-sun-300'
							onClick={() => setSelectedPage(SelectedPage.Services)}
							href={`#${SelectedPage.Services}`}
						>
							Details{' '}
							<FontAwesomeIcon
								icon={faPaw}
								className='group-transition group-duration-500 group-hover:text-sun-300'
							/>
						</AnchorLink>
					</div>
				</div>

				{/* Image */}
				<div>
					<img src={topImg} alt="Top Image" className='md:w-[400px] md:h-[580px]' />
				</div>
			</div>

			{/* Sponsors */}
			{isAboveMediumScreens && (
				<div>
					<div>
						<div>
							<img src={hawaii} alt="hawaii flag" />
							<img src={kauai} alt="kauai" />
							<img src={wholeFoods} alt="wholeFoods" />
							<img src={patagonia} alt="patagonia" />
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Home;

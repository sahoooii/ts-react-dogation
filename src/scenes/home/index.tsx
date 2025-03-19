import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/types/types';
import logo from '@/assets/logo/dogation-logo.png';
import tripAdvisor from '@/assets/sponsors/tripadvisor.png';
import kauai from '@/assets/sponsors/kauai.png';
import patagonia from '@/assets/sponsors/patagonia.png';
import wholeFoods from '@/assets/sponsors/wholeFoods.png';
import topImg from '@/assets/home/beach-walk.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMartiniGlassCitrus, faPaw } from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import Tagline from '@/shared/Tagline';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
	const isAboveMediaScreen = useMediaQuery('(min-width:1060px)');
	return (
		<section
			id='home'
			className='gap-16 bg-light-green-20 py-10 md:min-h-screen md:pb-0'
		>
			{/* Img and Main Header */}
			<motion.div
				className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'
				onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
			>
				{/* Main header */}
				<div className='z-10 mt-32 md:basis-3/5'>
					{/* Heading */}
					<motion.div
						className='md:-mt-20'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.8 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<div className='mt-8 flex justify-center'>
							<img src={logo} alt='dogation logo' />
						</div>

						<div className='mt-6 text-xl leading-relaxed sm:leading-8'>
							This is a paradise for all dogs and dog lovers!
							<br />
							Here, you can spend the entire day with your furry friend. Our
							concept blends vacation and dogs!
							<p className='my-5 text-center text-2xl font-extrabold capitalize text-light-blue-100 sm:text-3xl'>
								- Welcome to DOGATION -
							</p>
							Located in the heart of Waikiki, the beach is just steps away.
							Enjoy our stylish café, bar, and more.
							<br />
							Relax and make unforgettable memories on your next vacation!{' '}
							<FontAwesomeIcon
								icon={faMartiniGlassCitrus}
								className='align-baseline text-[24px] text-sun-300'
							/>
						</div>
					</motion.div>

					{/* Actions */}
					<motion.div
						className='mb-12 mt-8 flex items-center gap-8'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<ActionButton setSelectedPage={setSelectedPage}>
							Join Now
						</ActionButton>
						<AnchorLink
							className='group font-title-serif text-xl font-bold text-light-blue-100 underline transition duration-500 hover:text-sun-300'
							onClick={() => setSelectedPage(SelectedPage.Services)}
							href={`#${SelectedPage.Services}`}
						>
							About Us{' '}
							<FontAwesomeIcon
								icon={faPaw}
								className='group-hover:text-sun-300'
							/>
						</AnchorLink>
					</motion.div>
				</div>

				{/* Image */}
				<motion.div
					className='mb-12 mt-8 flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-24 md:justify-items-end'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 0.8 }}
					variants={{
						hidden: { opacity: 0, y: -50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<img
						src={topImg}
						alt='Top Image'
						className='h-[530px] w-[360px] rounded-t-[400px] object-cover shadow-2xl transition duration-500 hover:saturate-200 hover:filter md:h-[500px] md:w-[360px] md:rounded-lg'
					/>
				</motion.div>
			</motion.div>

			{/* Sponsors */}
			{isAboveMediaScreen && (
				<div className='min-h-[250px] w-full bg-light-blue-100'>
					<div className='mx-auto w-5/6'>
						<div className='flex min-h-[250px] items-center justify-between gap-6'>
							<img src={tripAdvisor} alt='hawaii flag' />
							<img src={kauai} alt='kauai' />
							<img src={wholeFoods} alt='wholeFoods' />
							<img src={patagonia} alt='patagonia' />
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Home;

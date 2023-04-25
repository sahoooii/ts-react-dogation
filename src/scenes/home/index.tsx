import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/types/types';
import logo from '@/assets/logo/dogation-logo-green.jpg';
import tripAdvisor from '@/assets/sponsors/tripadvisor.png';
import kauai from '@/assets/sponsors/kauai.png';
import patagonia from '@/assets/sponsors/patagonia.png';
import wholeFoods from '@/assets/sponsors/wholeFoods.png';
import topImg from '@/assets/home/beach-walk.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMartiniGlassCitrus, faPaw } from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
	const isAboveMediaScreen = useMediaQuery('(min-width:1060px)');
	return (
		<section
			id='home'
			className='gap-16 bg-light-green-20 py-10 md:h-full md:pb-0'
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
						<div className='relative'>
							<div className='before:absolute before:-top-16 before:left-40 md:before:content-pow '>
								<img src={logo} alt='dogation green logo' />
							</div>
						</div>

						<p className='mt-8 text-sm leading-5'>
							This place is for All dogs and All dog lovers. You can spend time
							all day with your buddy. Our concepts are vacation and dog. Yes,
							"DOGATION"!!
							<br />
							We are located in central Waikiki. The beach is just around the
							corner. We have a fancy cafe and bar and some more. <br />
							Let's chill out on your next vacation{' '}
							<FontAwesomeIcon
								icon={faMartiniGlassCitrus}
								className='align-baseline text-sun-300'
							/>
						</p>
					</motion.div>

					{/* Actions */}
					<motion.div
						className='mt-8 flex items-center gap-8'
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
							className='group font-title-serif text-sm font-bold text-light-blue-100  underline transition duration-500 hover:text-sun-300'
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
						className='h-[550px] w-[360px] rounded-t-[400px] shadow-2xl transition duration-500 hover:saturate-200 hover:filter md:h-[510px] md:w-[370px] md:rounded-lg'
					/>
				</motion.div>
			</motion.div>

			{/* Sponsors */}
			{isAboveMediaScreen && (
				<div className='h-[200px] w-full bg-light-blue-100 py-8'>
					<div className='mx-auto w-5/6'>
						<div className='flex items-center justify-between gap-8'>
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

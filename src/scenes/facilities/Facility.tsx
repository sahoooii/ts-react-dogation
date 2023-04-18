import { motion } from 'framer-motion';

type Props = {
	title: string;
	description: string;
	image: string;
};

const Facility = ({ title, description, image }: Props) => {
	const overlayStyles = `h-[20rem] w-[17rem] rounded-3xl sm:h-[26rem] sm:w-[30rem] md:h-[30rem] md:w-[34rem] p-4 absolute z-30 flex flex-col whitespace-normal bg-light-blue-50 text-center opacity-0 transition items-center justify-center duration-500 hover:opacity-90`;

	return (
		<motion.div
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.5 }}
			transition={{ duration: 0.8 }}
			variants={{
				hidden: { opacity: 0, y: -50 },
				visible: { opacity: 1, y: 0 },
			}}
		>
			<li className='relative inline-block h-[20rem] w-[17rem] rounded-3xl sm:h-[26rem] sm:w-[30rem] md:h-[30rem] md:w-[34rem]'>
				<div className={overlayStyles}>
					<h4 className='-mt-4 font-title-serif text-lg font-bold sm:text-3xl '>
						{title}
					</h4>
					<p className='sm:text-md mt-3 text-xs sm:mt-6 sm:text-base'>
						{description}
					</p>
				</div>
				<img
					src={image}
					alt={image}
					className='h-[20rem] w-[17rem] rounded-3xl shadow-2xl sm:h-[26rem] sm:w-[30rem] md:h-[30rem] md:w-[34rem]'
				/>
			</li>
		</motion.div>
	);
};

export default Facility;

import { motion } from 'framer-motion';

const childVariant = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: { opacity: 1, scale: 1 },
};

type Props = {
	icon: string;
	title: string;
	description: string;
};

const Service = ({ icon, title, description }: Props) => {
	return (
		<motion.div
			className='mt-20 justify-center rounded-md border-2 border-sand-80 px-5 py-8 text-center sm:mt-8 sm:h-[400px] sm:max-w-[500px]'
			variants={childVariant}
		>
			<div className='mb-4 flex justify-center'>
				<div className='-mt-20 rounded-full border-2 border-sun-300 bg-banana-yellow-50 p-4'>
					<img
						src={icon}
						alt={icon}
						className='transition duration-300 hover:scale-110'
					/>
				</div>
			</div>
			<h4 className='font-title-serif text-xl font-bold text-sun-300 transition duration-300 hover:scale-125 md:text-2xl'>
				{title}
			</h4>
			<p className='my-3 text-sm leading-6 md:my-5 md:text-base'>
				{description}
			</p>
		</motion.div>
	);
};

export default Service;

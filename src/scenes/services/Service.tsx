import { motion } from 'framer-motion';
import { ServicesLists } from './ServicesLists';
import { ServicesType } from '@/types/types';

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.3 },
	},
};

const childVariant = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: { opacity: 1, scale: 1 },
};

const Service = () => {
	return (
		<motion.div
			className='items-center justify-center sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-12'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.5 }}
			variants={container}
		>
			{ServicesLists.map((service: ServicesType) => (
				<motion.div variants={childVariant} key={service.id}>
					<div className='mt-16 justify-center rounded-md border-2 border-sand-80 px-5 py-8 text-center sm:mt-8 sm:h-[400px] sm:max-w-[500px]'>
						<div className='mb-4 flex justify-center'>
							<div className='-mt-20 rounded-full border-2 border-sun-300 bg-banana-yellow-50 p-4'>
								<img
									src={service.icon}
									alt={service.icon}
									className='transition duration-300 hover:scale-110'
								/>
							</div>
						</div>
						<h4 className='font-title-serif text-xl font-bold text-sun-300 transition duration-300 hover:scale-125 md:text-2xl'>
							{service.title}
						</h4>
						<p className='mt-2 text-[12px] leading-6 sm:text-sm md:my-5 md:text-base'>
							{service.description}
						</p>
					</div>
				</motion.div>
			))}
		</motion.div>
	);
};

export default Service;

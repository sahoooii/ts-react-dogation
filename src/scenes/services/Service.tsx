import { motion } from 'framer-motion';
import { ServicesLists } from './ServicesLists';
import { ServicesType } from '@/types/types';

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.1 },
	},
};

const childVariant = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
};

const Service = () => {
	return (
		<motion.div
			className='items-center justify-center sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-12'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.2 }}
			variants={container}
		>
			{ServicesLists.map((service: ServicesType) => (
				<motion.div variants={childVariant} key={`${service.id}-${service.title}`}>
					<div className='mt-20 justify-center rounded-md border-2 border-sand-80 px-8 py-8 text-center sm:mt-7 sm:h-[645px] md:h-[440px] sm:max-w-[500px]'>
						<div className='mb-4 flex justify-center'>
							<div className='-mt-20 rounded-full border-2 border-sun-300 bg-banana-yellow-50 p-4'>
								<img
									src={service.icon}
									alt={service.icon}
									className='transition duration-300 hover:scale-110'
								/>
							</div>
						</div>
						<h4 className='font-title-serif text-3xl font-bold text-sun-300 transition duration-300 hover:scale-125 sm:text-3xl'>
							{service.title}
						</h4>
						<p className='mt-5 mb-3 text-start leading-relaxed sm:leading-8 text-xl'>
							{service.description}
						</p>
					</div>
				</motion.div>
			))}
		</motion.div>
	);
};

export default Service;

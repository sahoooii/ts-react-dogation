import { log } from 'console';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import React, { useState } from 'react';

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

type Props = {
	title: string;
	description: string;
	image: string;
};

const MobileImage = ({ title, description, image }: Props) => {
	const [[page, direction], setPage] = useState([0, 0]);
	const imageIndex = wrap(0, 4, page);
	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		<div>
			<AnimatePresence initial={false} custom={direction}>
				<motion.img></motion.img>
			</AnimatePresence>
		</div>
	);
};

export default MobileImage;

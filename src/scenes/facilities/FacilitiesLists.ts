import { FacilitiesType } from '@/types/types';
// Images
import dogRunJump from '@/assets/facilities/dogRunJump.jpg';
import photoStudio from '@/assets/facilities/photo_studio.jpg';
import training from '@/assets/facilities/training.jpg';
import dogCafe from '@/assets/facilities/dogCafe.jpg';
import trimming from '@/assets/facilities/trimming.jpg';

export const FacilitiesLists: Array<FacilitiesType> = [
	{
		title: 'Dog Run',
		description: [
			'Spacious dog runs designed for different breeds.',
			'Four areas: Large, Medium, Small breeds, and All-Dogs. 🐶',
			'Each run has a pond for cooling off—plus a self-service shampoo room!',
		],
		image: dogRunJump,
	},
	{
		title: 'Photo Studio',
		description: [
			'Capture your dog’s most adorable moments! 📸',
			'Our 24/7 selfie studio lets you snap pictures whenever you want.',
			'Looking for something extra special? Book a professional photo session through the Dogation app and create a perfect memory!',
		],
		image: photoStudio,
	},
	{
		title: 'Trimming Salon',
		description: [
			'Next to the Photo Studio, our Trimming Salon keeps your dog fresh and clean. ✂️',
			'Our skilled trimmers offer various grooming courses, all bookable through the Dogation App. Prefer to do it yourself? Check out our self-service shampoo station! 🧴',
		],
		image: trimming,
	},
	{
		title: 'Training Class',
		description: [
			'In our Training Room, dogs of all sizes learn in a fun and structured way. 🐶',
			'・Nursery Course: Covers basic to advanced commands.',
			'・Play Course: Focuses on socialization and playtime.',
			'Trainers also take dogs for walks to reinforce real-world learning.',
		],
		image: training,
	},
	{
		title: 'Dog Cafe',
		description: [
			'A stylish Dog Café by day, a cozy bar by night! 🍽️☕ Enjoy delicious meals crafted for both you and your furry friend.',
			'Need a workspace? Our café doubles as a co-working spot. In the evening, unwind at the bar with your dog—yes, we even serve mocktails for pups! 🐾🍹',
		],
		image: dogCafe,
	},
];

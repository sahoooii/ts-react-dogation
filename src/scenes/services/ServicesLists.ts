import { ServicesType } from '@/types/types';
import dogHotel from '@/assets/icons/dog-hotel.png';
import dogPhoto from '@/assets/icons/dog-photo.png';
import dogTraining from '@/assets/icons/dog-training.png';
import dogTrimming from '@/assets/icons/dog-trimming.png';

export const ServicesLists: Array<ServicesType> = [
	{
		id: 1,
		icon: dogHotel,
		title: 'Hotel',
		description:
			"You can stay at our hotel with your buddy everywhere you want! We have a Huge dog run. Your dog can run anytime. Are you guys tired? Don't worry! We allow sleeping on the couch and bed with your dog there. And We also have perfect dog amenities. You don't have to bring heavy stuff. But don't forget to bring your buddy's favorite toys!  ",
	},
	{
		id: 2,
		icon: dogPhoto,
		title: 'Photo Studio',
		description:
			"We have a perfect photo studio. You can choose two courses, Selfie or Pro-style. Just make a reservation and pick the course using Dogation App. We rent cute and funny costumes for you guys. Selfie style is open 24/7. Pro-style is a little more expensive than a selfie. But worth it!! Let's take a picture for the most memorable time.",
	},
	{
		id: 3,
		icon: dogTrimming,
		title: 'Trimming Salon',
		description:
			"Did you forget to clean up your dog? Do you want to change your buddy's hairstyle? Don't worry about it! We have a perfect trimming salon! During a drink at the bar, your dog will change cuter. And we are located right next door to the photo studio. You guys take a picture with a New Style! We also give a 10% discount to hotel guests.",
	},
	{
		id: 4,
		icon: dogTraining,
		title: 'Training Room',
		description:
			'Do you want your dog to smatter? Is your dog get into all kinds of trouble at home? We have classes for dogs. We have great dog trainers. We take a walk with your dog and training at outside. And inside, training commands, like sit, down, stay. Also, we have an advanced class. Teach more complex commands. And the most fun part is Play-Time! Your dog makes a best friend.',
	},
];

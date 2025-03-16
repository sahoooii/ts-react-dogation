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
			"Stay anywhere with your furry friend! Our hotel features a huge dog run, open anytime for your pup to play freely. Your dog is welcome on the couch and bed, just like at home. We also provide full dog amenities, so you don't have to carry heavy supplies—just bring your buddy’s favorite toys!",
	},
	{
		id: 2,
		icon: dogPhoto,
		title: 'Photo Studio',
		description:
			"Capture unforgettable moments with your dog in our photo studio! Choose between a selfie session (open 24/7) or a pro-style shoot for a high-quality keepsake. Book your session through the Dogation App and enjoy our selection of cute and funny costumes. The pro session costs a bit more, but it's totally worth it!",
	},
	{
		id: 3,
		icon: dogTrimming,
		title: 'Trimming Salon',
		description:
			'Need a quick refresh for your pup? Our trimming salon is here for you! While you relax at the bar, our groomers will make your dog look even cuter. Conveniently located next to the photo studio, so after a fresh trim, you can head straight in for a stylish photoshoot. Hotel guests get 10% off!',
	},
	{
		id: 4,
		icon: dogTraining,
		title: 'Training Room',
		description:
			'From basic commands to advanced tricks, our training classes help your dog learn and grow! Our expert trainers offer indoor and outdoor sessions, including leash walking, sit, stay, and more. The best part? Play-Time! Your pup will make new friends while having fun.',
	},
];

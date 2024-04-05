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
		description:
			"We have many expansive dog runs. There are four types of dog runs. These are  Large breeds, Medium breeds, Small breeds, and For all dogs. There is also a pond to swim each dog runs. When your buddy is wet, don't worry, we have a self-shampoo room!",
		image: dogRunJump,
	},
	{
		title: 'Photo Studio',
		description:
			'How cute this dog is! Yes, this is my dog Haha. We have a perfect photo studio. Selfie style is open 24/7. You can take a picture anytime you want! Do you want to take an anniversary photo? Of course, we have a pro cameraman too! You can make a reservation using Dogation app.',
		image: photoStudio,
	},
	{
		title: 'Trimming Salon',
		description:
			'We have a cute trimming salon right next to a Photo studio. When your buddy gets dirty, you can ask trimmers to clean. To make a reservation, use our Dogation App. We have many courses you can pick from them. Also, we have a self-shampoo room!',
		image: trimming,
	},
	{
		title: 'Training Class',
		description:
			'There is the Training room. Many kinds of dogs learn together just like this. We make an original curriculum for each dog. We have two courses, a Nursery course and a Play course which is a Nursery course teaching basic commands to advanced ones. And a Play course is just having fun with other dogs! Of course, trainers take a walk between both courses.',
		image: training,
	},
	{
		title: 'Dog Cafe',
		description:
			'We have a stylish dog cafe. We have a great chef and barista. They cook for you and your best friend! During the daytime, there is also a coworking space. You do your job during the day. And in the nighttime, we are changing a fancy Bar! Of course, you can take your buddy there. We make a Mocktail for your buddy!',
		image: dogCafe,
	},
];

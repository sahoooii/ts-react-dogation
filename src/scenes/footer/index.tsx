import LogoCircle from '@/assets/logo/dogation-logo-circle.png';

const Footer = () => {
	return (
		<footer className='bg-gradient-ocean pb-24 pt-2 text-white sm:pb-36 sm:pt-8 md:pt-16'>
			<div className='mx-auto w-5/6 justify-center gap-16 md:flex'>
				<div className='mt-10 basis-1/2 md:mt-0'>
					<img src={LogoCircle} alt='logo' className='h-14 w-14' />
					<p className='py-5 text-lg leading-relaxed'>
						A paradise for all dogs and dog lovers, right in the heart of
						Waikiki.
						<br />
						Just steps from the beach, where unforgettable memories await. Come
						relax, unwind, and enjoy the ultimate dog-friendly getaway.
					</p>
					<p className='font-bold py-5 sm:py-8'>&copy; Dogation Inc. All Rights reserved.</p>
				</div>
				<div className='mt-12 basis-1/2 md:mt-12'>
					<h4 className='text-lg font-bold'>Contact Us</h4>
					<p className='my-5'>364 Seaside Ave, Honolulu, HI 96815 USA</p>
					<p>TEL: (808)-561-6822</p>
					<p>Mail: dogation-hi@gmail.com</p>
				</div>
				<div></div>
			</div>
		</footer>
	);
};

export default Footer;

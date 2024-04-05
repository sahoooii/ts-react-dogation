import LogoCircle from '@/assets/logo/dogation-logo-circle.png';

const Footer = () => {
	return (
		<footer className='bg-gradient-ocean md:pt-16 sm:pb-36 sm:pt-8 pt-2 pb-24 text-white'>
			<div className='mx-auto w-5/6 justify-center gap-16 md:flex'>
				<div className='mt-10 basis-1/2 md:mt-0'>
					<img src={LogoCircle} alt='logo' className='h-14 w-14' />
					<p className='py-5 text-sm'>
						This place is for All dogs and All dog lovers. We are located in
						central Waikiki. The beach is just around the corner. Let's chill
						out on your next vacation.
					</p>
					<p className='font-bold'>
						&copy; Dogation Inc. All Rights reserved.
					</p>
				</div>
				<div className='mt-12 basis-1/2 md:mt-12'>
					<h4 className='font-bold text-lg'>Contact Us</h4>
					<p className='my-5'>
					364 Seaside Ave, Honolulu, HI 96815 USA
					</p>
					<p>TEL: (808)-561-6822</p>
					<p>Mail: dogation-hi@sample.com</p>
				</div>
				<div></div>
			</div>
		</footer>
	);
};

export default Footer;

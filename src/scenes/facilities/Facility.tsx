type Props = {
	title: string;
	description: string;
	image: string;
};

const Facility = ({ title, description, image }: Props) => {
	const overlayStyles = `p-4 absolute z-30 flex flex-col whitespace-normal bg-light-blue-50 text-center opacity-0 transition items-center justify-center duration-500 hover:opacity-90`;

	const imagesSize =
		'h-[18rem] w-[17rem] rounded-3xl shadow-2xl sm:h-[26rem] sm:w-[30rem] md:h-[30rem] md:w-[34rem] object-cover';

	return (
		<li
			className={`${imagesSize} relative inline-block h-[20rem] w-[17rem] rounded-3xl`}
		>
			<div className={`${overlayStyles} ${imagesSize}`}>
				<h4 className='-mt-4 font-title-serif text-lg font-bold sm:text-3xl '>
					{title}
				</h4>
				<p className='sm:text-md mt-3 text-xs sm:mt-6 sm:text-base'>
					{description}
				</p>
			</div>
			<img src={image} alt={image} className={imagesSize} />
		</li>
	);
};

export default Facility;

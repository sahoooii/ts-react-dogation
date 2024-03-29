import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/types/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
	page: string;
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
	const isAboveMediumScreen = useMediaQuery('(min-width: 1060px');
	const MdTextColor = isAboveMediumScreen && 'text-sun-300';

	//to lowercase and delete space
	const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;
	return (
		<AnchorLink
			className={`${
				selectedPage === lowerCasePage
					? `${MdTextColor} text-banana-yellow-200`
					: ''
			} transition duration-500 hover:scale-110 hover:opacity-50`}
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	);
};

export default Link;

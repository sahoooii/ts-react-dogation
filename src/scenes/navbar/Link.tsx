import { SelectedPage } from '@/types/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
	page: string;
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
	//to lowercase and delete space
	const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;
	return (
		<AnchorLink
			className={`${
				selectedPage === lowerCasePage ? 'text-light-blue-50' : ''
			} transition duration-500 hover:text-light-green-100`}
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	);
};

export default Link;

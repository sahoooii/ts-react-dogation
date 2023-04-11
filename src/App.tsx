import { useEffect, useState } from 'react';
import { SelectedPage } from '@/types/types';
import Navbar from '@/scenes/navbar';
import Home from '@/scenes/home';
import Services from '@/scenes/services';
import Facilities from '@/scenes/facilities';

function App() {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(
		SelectedPage.Home
	);
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

	// handle nav bg
  useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
				setSelectedPage(SelectedPage.Home);
			}
			if (window.scrollY !== 0) setIsTopOfPage(false);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className='app bg-light-green-20'>
			<Navbar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<Home setSelectedPage={setSelectedPage} />
			<Services setSelectedPage={setSelectedPage} />
			<Facilities setSelectedPage={setSelectedPage} />

		</div>
	);
}

export default App;

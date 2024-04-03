import { useEffect, useState } from 'react';
import { SelectedPage } from '@/types/types';
import Navbar from '@/scenes/navbar';
import Home from '@/scenes/home';
import Services from '@/scenes/services';
import Facilities from '@/scenes/facilities';
import ContactUs from '@/scenes/contactUs';
import Footer from '@/scenes/footer';

function App() {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(
		SelectedPage.Home
	);

	// handle nav bg color
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
	
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
		<div className='app'>
			<Navbar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<Home setSelectedPage={setSelectedPage} />
			<Services setSelectedPage={setSelectedPage} />
			<Facilities setSelectedPage={setSelectedPage} />
			<ContactUs setSelectedPage={setSelectedPage} />
			<Footer />
		</div>
	);
}

export default App;

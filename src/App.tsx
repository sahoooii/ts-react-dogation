import Navbar from '@/scenes/navbar';
import { useState } from 'react';
import { SelectedPage } from '@/types/types';


function App() {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(
		SelectedPage.Home
	);
	return (
		<div className='app bg-light-green-20'>
			<Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
		</div>
	);
}

export default App;

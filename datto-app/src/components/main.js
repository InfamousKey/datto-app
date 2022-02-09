import { useState, useEffect } from 'react';
import {
	sortCards
} from './methods/methods'
import Header from './header';
import Footer from './footer';
import SideNav from './side-nav';
import Content from './content';
import '../css/App.css';

const App = () => {
	const [items, setItems] = useState([]);
	const [tab, setTab] = useState('');
	const [error, setError] = useState('');

	const setupApp = async data => {
		const sortedCards = await sortCards(data);
		setTab(sortedCards[0]);
		setItems(sortedCards);
	}

	useEffect(() => {
		if (items.length === 0) {
			fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
				.then(response => response.json())
				.then(json => {
					setupApp(json.data);
				})
				.catch(err => setError(err))
		}
	}, [items.length]);

	return (
		<div className="App">
			<Header />
			<SideNav 
				list={items}
				currentTab={tab}
				setTab={tabName => setTab(tabName)}
			/>
			{/* {tab !== '' && (
				<Content
					items={items[tab]}
					// setItems={newList => setItems([
					// 	...items,
					// 	[tab]: ...newList,
					// ])}
				/>
			)} */}
			<Footer />
		</div>
	);
}

export default App;

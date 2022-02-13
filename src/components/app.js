import { useState, useEffect } from 'react';
import {
	sortCards,
} from './methods/methods'
import Header from './header';
import Footer from './footer';
import SideNav from './content/side-nav';
import Content from './content/content';
import './app.css';

const App = () => {
	const [items, setItems] = useState({});
	const [tab, setTab] = useState('');
	// disabling the linter for not using error as it's not in scope
	// eslint-disable-next-line
	const [error, setError] = useState({});

	const setupApp =  data => {
		const sortedCards = sortCards(data);
		setTab(Object.keys(sortedCards)[0]);
		setItems(sortedCards);
	}

	useEffect(() => {
		// on first load, we fetch the card list
		if (Object.keys(items).length === 0 && tab === '') {
			fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?startdate=01/01/2020&enddate=01/01/2021')
				.then(response => response.json())
				.then(json => setupApp(json.data))
				.catch(err => setError(err))
		}
	}, [items, tab]);

	return (
		<div className="app">
			<Header />
			{tab !== '' && Object.keys(items).length > 0 && (
				<div className='app-container'>
					<SideNav
						list={items}
						currentTab={tab}
						setTab={tabName => setTab(tabName)}
					/>
					<Content
						items={items[tab]}
						setItems={newList => setItems({
							...items,
							[tab]: newList,
						})}
					/>
				</div>
			)}
			<Footer />
		</div>
	);
}

export default App;

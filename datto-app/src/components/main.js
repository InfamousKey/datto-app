import { useState } from 'react';
import {
	fetchApi
} from './methods/methods'
import Header from './header';
import Footer from './footer';
import SideNav from './side-nav';
import Content from './content'
import '../css/App.css';

const App = () => {
	const apiData = fetchApi('https://www.freetogame.com/api/games?platform=pc&sort-by=release-date');
	console.log(apiData)
	const [items, setItems] = useState(apiData);
	const [tab, setTab] = useState(apiData);

	return (
		<div className="App">
			<Header />
			<SideNav 
				list={items}
				currentTab={tab}
				setTab={tabName => setTab(tabName)}
			/>
			<Content
				items={items[tab]}
				// setItems={newList => setItems([
				// 	...items,
				// 	[tab]: ...newList,
				// ])}
			/>
			<Footer />
		</div>
	);
}

export default App;

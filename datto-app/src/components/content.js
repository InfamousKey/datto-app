import '../css/App.css';

const Footer = ({items, setItems}) => {
	console.log(items)
	return (
		<div className="App-content">
			{items.map(({
				name,
				type,
				desc,
				race,
			}) => (
				<div>

				</div>
			))}
		</div>
	);
}

export default Footer;

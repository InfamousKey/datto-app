import PropTypes from 'prop-types';
import '../css/App.css';

const Content = ({ items, setItems }) => {
	console.log(items)
	return (
		<div className="App-content">
			{items.map(({
				card_images,
				name,
				type,
				desc,
				race,
				id,
			}) => (
				<div key={id}>
					<img src={card_images[0].image_url} alt={name} />
					<div>{name}</div>
					<div>{type}</div>
					<div>{race}</div>
					<div>{desc}</div>
				</div>
			))}
		</div>
	);
}

export default Content;

Content.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
	setItems: PropTypes.func.isRequired,
};

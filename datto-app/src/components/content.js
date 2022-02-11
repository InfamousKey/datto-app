import { useState } from 'react';
import PropTypes from 'prop-types';
import Edit from '../images/edit.svg';
import Delete from '../images/delete.svg';
import Confirm from '../images/confirm.svg';
import { ReactSVG } from 'react-svg'
import '../css/content.css';

const Content = ({ items, setItems }) => {
	const [editActive, setEditActive] = useState(-1);
	const [editName, setEditName] = useState('');

	const updateCard = index => {
		const currentCard = items[index];
		const newCard = {
			...currentCard,
			name: editName,
		};
		const newItems = [
			...items,
		];
		newItems[index] = newCard;
		setItems(newItems);
		setEditActive(-1);
	};

	const removeItem = index => {
		const newArr = [...items];
		newArr.splice(index, 1);
		setItems(newArr);
	}

	return (
		<div className="content">
			{items.map(({
				card_images,
				name,
				type,
				desc,
				race,
				id,
			}, index) => (
				<div key={id}>
					<img src={card_images[0].image_url_small} alt={name} />
					{editActive === index && (
						<div>
							Name:
							<input
								type="textarea"
								value={editName}
								onChange={e => setEditName(e.target.value)}
							/>	
						</div>
					)}
					{editActive !== index && (
						<div>Name: {name}</div>
					)}
					<div>Type: {type}</div>
					<div>Race: {race}</div>
					<div>Description: {desc}</div>
					{editActive !== index && (
						<div
							onClick={() => {
								setEditActive(index);
								setEditName(name);
							}}
						>
							<ReactSVG src={Edit} />
						</div>
					)}
					{editActive === index && (
						<div onClick={() => updateCard(index)}>
							<ReactSVG src={Confirm} />
						</div>
					)}
					<div onClick={() => removeItem(index)}>
						<ReactSVG src={Delete} />
					</div>
				</div>
			))}
			{items.length === 0 && (
				<h2>This set contains no cards!</h2>
			)}
		</div>
	);
}

export default Content;

Content.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	setItems: PropTypes.func.isRequired,
};

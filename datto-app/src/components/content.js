import { useState } from 'react';
import PropTypes from 'prop-types';
import { truncateDesc } from './methods/methods';
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
		<div className='container'>
			<div className='row'>
				{items.map(({
					card_images,
					name,
					type,
					desc,
					race,
					id,
				}, index) => (
					<div className='card col-sm-6 col-md-3' key={id}>
						<img className='card-img-top'  src={card_images[0].image_url_small} alt={name} />
						{editActive === index && (
							<h5 className='card-title'>
								Name:
								<input
									type='textarea'
									value={editName}
									onChange={e => setEditName(e.target.value)}
								/>	
							</h5>
						)}
						<div className='card-body'>
							{editActive !== index && (
								<h5 className='card-title'>Name: {name}</h5>
							)}
							<div className='card-text'>
								<span className='font-weight-bold'>Type: </span>
								{type}
							</div>
							<div className='card-text'>
								<span className='font-weight-bold'>Race: </span>
								{race}
							</div>
							<div className='card-text' title={desc} >
								<span className='font-weight-bold'>Description: </span>
								{truncateDesc(desc)}
							</div>
						</div>
						<div className='row p-2'>
							{editActive !== index && (
								<div
									onClick={() => {
										setEditActive(index);
										setEditName(name);
									}}
									className='col-2'
								>
									<ReactSVG src={Edit} />
								</div>
							)}
							{editActive === index && (
								<div
									onClick={() => updateCard(index)}
									className='col-2'
								>
									<ReactSVG src={Confirm} />
								</div>
							)}
							<div
								onClick={() => removeItem(index)}
								className='col-2'
							>
								<ReactSVG src={Delete} />
							</div>
						</div>
					</div>
				))}
				{items.length === 0 && (
					<h2>This set contains no cards!</h2>
				)}
			</div>
		</div>
	);
}

export default Content;

Content.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	setItems: PropTypes.func.isRequired,
};

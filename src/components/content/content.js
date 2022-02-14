import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { truncateDesc } from '../methods/methods';
import Edit from '../../images/edit.svg';
import Delete from '../../images/delete.svg';
import Confirm from '../../images/confirm.svg';
import './content.css';

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

	useEffect(() => {
		// sets edit to false when we swap between tabs
		setEditActive(false);
	}, [items]);

	return (
		<div className='content container overflow-auto'>
			<div className='row justify-content-center'>
				{items.map(({
					card_images,
					name,
					type,
					desc,
					race,
					id,
				}, index) => (
					<div className='card pt-3 m-2 col-sm-6 col-md-3' key={id}>
						<img className='card-img-top'  src={card_images[0].image_url} alt={name} />
						<div className='card-body'>
							{editActive === index ? (
								<h5 className='card-title'>
									Name:
									<input
										type='textarea'
										value={editName}
										onChange={e => setEditName(e.target.value)}
									/>	
								</h5>
							) : <h5 className='card-title'>{name}</h5>}
							<div className='card-text p-1'>
								<span>Type: </span>
								{type}
							</div>
							<div className='card-text p-1'>
								<span>Race: </span>
								{race}
							</div>
							<div className='card-text p-1' title={desc} >
								<span>Description: </span>
								{truncateDesc(desc)}
							</div>
						</div>
						<div className='row p-2 justify-content-center'>
							{editActive !== index ? (
								<div
									onClick={() => {
										setEditActive(index);
										setEditName(name);
									}}
									className='col-2'
								>
									<img className='action' src={Edit} alt='edit' />
								</div>
							) :
								<div
									onClick={() => updateCard(index)}
									className='col-2'
								>
									<img className='action' src={Confirm} alt='confirm' />
								</div>
							}
							<div
								onClick={() => removeItem(index)}
								className='col-2'
							>
								<img className='action' src={Delete} alt='delete' />
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

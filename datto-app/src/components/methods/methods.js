export const sortCards = list => {
	let sortedCards = {};
	// for each object in our array (list)
	// we're going to rebuild an object sorted by archetype
	for (let index = 0; index < list.length; index++) {
		const {
			archetype,
		} = list[index];
		if (sortedCards[archetype]) {
			// Check if it already exists and push into existing array
			sortedCards[archetype].push(list[index])
		} else {
			// else reassign the object with the new archtype and card
			sortedCards = {
				...sortedCards,
				[archetype]: [
					list[index],
				],
			}
		}
	}
	return sortedCards;
}

export const truncateDesc = desc => {
	// return the string if it's less than our desired amount
	if (desc.length <= 64) {
		return desc
	}
	// return our cut down string with ... added
	return desc.slice(0, 126) + '...'
}

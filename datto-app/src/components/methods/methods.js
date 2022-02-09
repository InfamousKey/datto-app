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

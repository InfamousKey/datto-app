export const sortCards = async list => {
	let sortedCards = {};
	for (let index = 0; index < list.length; index++) {
		const {
			archetype,
		} = list[index];
		if (sortedCards[archetype]) {
			sortedCards[archetype].push(list[index])
		} else {
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

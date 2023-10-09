export function duplicateCards(array) {
	let newArray = array.concat(array);
	return newArray;
}

export function shuffleCards(array) {
	let newArray = array.sort(() => Math.random() - 0.5);
	return newArray;
}

export function setRandomId(array) {
	let newArray = array.map((e) => {
		return {
			...e,
			id: Math.random().toString(30).slice(2, 34),
		};
	});
	return newArray;
}

export function resetDeck(array) {
	let newArray = shuffleCards(setRandomId(duplicateCards(array)));
	return newArray;
}

// function that returns an action type and a text value
export function setSpecialText(text) {
	return {
		type: 'SET_SPECIAL_TEXT',
		value: text,
	};
}

// action creator to increase the counter
export function increaseCounter() {
	return {
		type: 'INCREASE_COUNTER',
	};
}

// action creator to decrease the counter
export function decreaseCounter() {
	return {
		type: 'DECREASE_COUNTER',
	};
}

export function searchUserByFirstName(firstName) {
	return {
		type: 'SEARCH_USER_BY_FIRSTNAME',
		value: firstName,
	};
}

export function sortUsers(currentUserSort) {
	return {
		type: 'CURRENT_USER_SORT',
		value: currentUserSort,
	};
}

export function addUser(user) {
	return {
		type: 'ADD_USER',
		value: user,
	};
}

export function removeUser() {
	return {
		type: 'REMOVE_USER',
	};
}

export function setCurrentCity(currentCity) {
	return {
		type: 'SET_CURRENT_CITY',
		value: currentCity,
	};
}

export function setCurrentTemp(temperature) {
	return {
		type: 'SET_CURRENT_TEMP',
		value: temperature,
	};
}

export function setImageUrl(url) {
	return {
		type: 'SET_IMAGE_URL',
		value: url,
	};
}

export function setImageScale(scale) {
	return {
		type: 'SET_IMAGE_SCALE',
		value: scale,
	};
}

export function toggleModal() {
	return {
		type: 'TOGGLE_MODAL',
	};
}

export function getUsers() {
	return async (dispatch) => {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
		const users = await response.json();
		dispatch({
			type: 'GET_USERS',
			value: users,
		});
	};
}

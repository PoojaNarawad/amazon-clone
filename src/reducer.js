export const initialState = {
	basket: [
		// {
		// 	id: '123456',
		// 	title:
		// 		'Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)',
		// 	price: 3999,
		// 	rating: 4,
		// 	image: 'https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY218_.jpg',
		// },
	],
	user: null,
};

export const getBasketTotal = (basket) =>
	basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'ADD_TO_BASKET':
			//logic for adding items to basket
			return {
				...state,
				basket: [...state.basket, action.item],
			};

		case 'REMOVE_FROM_BASKET':
			//LOGIC for removing items from basket

			//we cloned the basket...
			let newBasket = [...state.basket];
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);

			if (index >= 0) {
				//item exits in basket,remove it...
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`can't remove product(id:${action.id}) as its not in basket! `
				);
			}
			return {
				...state,
				basket: newBasket,
			};

		default:
			return state;
	}
};

export default reducer;

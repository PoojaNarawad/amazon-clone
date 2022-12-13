import React from 'react';
import '../Styles/subtotal.css';
import {useStateValue} from '../StateProvider';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from '../reducer.js';

export default function Subtotal() {
	const [{basket}, dispatch] = useStateValue();
	// var CurrencyFormat = require('react-currency-format');
	return (
		<div className="subtotal">
			<CurrencyFormat
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'₹'}
				renderText={(value) => (
					<>
						<p>
							Subtotal({basket.length}items):<strong>{value}</strong>
						</p>
						<small className="subtotal_gift">
							<input type="checkbox" />
							This order contains a gift
						</small>
					</>
				)}
			/>
			<button>Proceed To Checkout</button>
		</div>
	);
}

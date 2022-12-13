import React from 'react';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from '../StateProvider';

function Header() {
	const [{basket}] = useStateValue();
	console.log(basket);

	return (
		<nav className="header">
			{/* Logo on left side */}
			<Link to="/">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBZsOV_lhvC7eymRovQqQ4bbxGVZ_JfgBWA&usqp=CAU"
					className="header_logo"
					alt=""
				/>
			</Link>
			{/* searchBar */}
			<div className="header_search">
				<input type="text" className="header_searchInput" />
				<SearchIcon className="header_searchIcon" />
			</div>
			{/* 3 Links */}
			<div className="header_nav">
				{/* 1st Link */}
				<Link to="/login" className="header_link">
					<div className="header_option">
						<span className="header_optionLineOne">Hello</span>
						<span className="header_optionLineTwo">SignUp</span>
					</div>
				</Link>
				{/* 2nd Links  */}
				<Link to="/" className="header_link">
					<div className="header_option">
						<span className="header_optionLineOne">Returns</span>
						<span className="header_optionLineTwo">& Orders</span>
					</div>
				</Link>
				{/* 3rd Link */}
				<Link to="/" className="header_link">
					<div className="header_option">
						<span className="header_optionLineOne">Your</span>
						<span className="header_optionLineTwo">Prime</span>
					</div>
				</Link>
				{/* 4th Link */}
				<Link to="/checkout" className="header_link">
					<div className="header_optionBasket">
						{/* Shopping Basket Icon  */}
						<ShoppingBasketIcon />
						{/* Number Of Items In The Basket  */}
						<span className="header_optionLineTwo header_basketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
			{/* Cart icon with number */}
		</nav>
	);
}

export default Header;

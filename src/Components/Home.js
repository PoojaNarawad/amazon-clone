import React from 'react';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			{/* image Banner */}
			<img
				className="home_image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt=""
			/>
			{/* product id,title,image,price,rating */}
			<div className="home_row">
				<Product
					id="123456"
					title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)"
					price={3999}
					rating={4}
					image="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY218_.jpg"
				/>
				<Product
					id="323457"
					title="HP 15s 12th Gen Intel Core i5 8GB RAM/512GB SSD 15.6inches(39.6cm) FHD, Anti-Glare, Micro-Edge Display/Intel Iris Xe Graphics/Dual Speakers/Windows 11 Home/Alexa Built-in/MSO 2021/1.69kg, 15s-fq5009TU"
					price={59600}
					rating={4}
					image="https://m.media-amazon.com/images/I/419CsUXodAL._SX300_SY300_QL70_FMwebp_.jpg"
				/>
			</div>
			<div className="home_row">
				<Product
					id="23489"
					title="HP 15s 12th Gen Intel Core i5 8GB RAM/512GB SSD 15.6inches(39.6cm) FHD, Anti-Glare, Micro-Edge Display/Intel Iris Xe Graphics/Dual Speakers/Windows 11 Home/Alexa Built-in/MSO 2021/1.69kg, 15s-fq5009TU"
					price={59600}
					rating={4}
					image="https://m.media-amazon.com/images/I/419CsUXodAL._SX300_SY300_QL70_FMwebp_.jpg"
				/>
				<Product
					id="223498"
					title="The Power of Your Subconscious Mind Paperback - 1 February 2015"
					price={179}
					rating={4}
					image="https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY218_.jpg"
				/>
				<Product
					id="345678"
					title="Your Time Will Come Paperback - 8 April 2022"
					price={175}
					rating={5}
					image="https://m.media-amazon.com/images/I/71HFsu2fywL._AC_UY218_.jpg"
				/>
			</div>
			<div className="home_row">
				<Product
					id="9345690"
					title="Noise ColorFit Pro 4 Bluetooth Calling Smart Watch with 1.72' TruView Display Fully-Functional Digital Crown, 311 PPI, 60Hz Refresh Rate, 500 NITS Brightness (Charcoal Black), OneSize"
					price={3499}
					rating={4}
					image="https://m.media-amazon.com/images/I/61IZd8JAnWL._AC_UY218_.jpg"
				/>
				<Product
					id="6767666"
					title="Samsung Galaxy Tab A8 26.69cm (10.5 inch) Display, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet, Gray, (SM-X200NZAEINU)"
					price={7998}
					rating={4}
					image="https://m.media-amazon.com/images/I/91veRYPjpeL._AC_UY218_.jpg"
				/>
				<Product
					id="6987654"
					title="Ferrero Collection - Assorted Chocolates - 24 Pieces"
					price={1240}
					rating={4}
					image="https://m.media-amazon.com/images/I/7190VJZZuyL._AC_UL320_.jpg"
				/>
			</div>
			<div className="home_row">
				<Product
					id="2345068"
					title="Samsung 123 cm (49 Inches) Full HD LED Smart TV UA49N5300AR (Black)"
					price={45999}
					rating={5}
					image="https://m.media-amazon.com/images/I/81KmQgqAcfL._AC_UY218_.jpg"
				/>
				<Product
					id="5432689"
					title="Samsung 138 cm (55 inches) Crystal 4K Series Ultra HD Smart LED TV UA55AUE60AKLXL (Black)"
					price={89999}
					rating={5}
					image="https://m.media-amazon.com/images/I/61sPE6CnkVL._AC_UY218_.jpg"
				/>
				<Product
					id="7543211"
					title="Samsung 139.7 cm (55 inches) 8 Series 55NU8000 4K LED Smart TV (Black)"
					price={42999}
					rating={5}
					image="https://m.media-amazon.com/images/I/61uk5gA8XOS._AC_UY218_.jpg"
				/>
				<Product
					id="4338765"
					title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X75K (Black) (2022 Model) | with Alexa Compatibility"
					price={68390}
					rating={5}
					image="https://m.media-amazon.com/images/I/71+7bU+fkVL._AC_UY218_.jpg"
				/>
			</div>
			<div className="home_row">
				<Product
					id="8799999"
					title="Rooh Dream Catcher ~ Pastel 4 Tier with Pretty Lights ~ Handmade Hangings for Positivity ( Can be Used as Home Decor, Gift, Wall Hangings, Wind Chime & Car Hanging )"
					price={949}
					rating={5}
					image="https://m.media-amazon.com/images/I/61ZVGaiZvuL._AC_UL320_.jpg"
				/>
				<Product
					id="9090876"
					title="Lamina Set of 4 Little Baby Monk Buddha Showpiece (Small Multicolor | Resin) for Home Decoration, Office, Car Dashboard, Festive, Birthday, Housewarming, Wedding or Return Gift (with Gifting Box)"
					price={349}
					rating={5}
					image="https://m.media-amazon.com/images/I/71CtcKCCiWL._AC_UL320_.jpg"
				/>
				<Product
					id="9900887"
					title="STITCHNEST Unique Cute Elephant Cartoon Blue Printed Canvas Cotton Cushion Covers, Set of 5 (16 x 16 Inches)"
					price={439}
					rating={5}
					image="https://m.media-amazon.com/images/I/913WH9wAnrL._AC_UL320_.jpg"
				/>
				<Product
					id="4567433"
					title="AEROHAVEN Merry Christmas Decorative Polyester Throw Pillow/Cushion Covers - CC162 - (16 x 16 inch, Red, Set of 4)"
					price={434}
					rating={5}
					image="https://m.media-amazon.com/images/I/713U1boZoKL._AC_UL320_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;

import './PricingPlans.css';

function PricingPlans() {
	return (
		<div className="price-plan-container">
			<div className="prices-container">
				<div className="prices">
					<div className="amateur">
						<h2>AMATEUR</h2>
						<p>Our starter package</p>
						<p>that earns</p>
						<p className="over-sized-percentage">3%</p>
						<p>of the total purchase price</p>
						<p>towards your point value!</p>
						<p className="over-sized-price">Price: $9.99</p>
					</div>
				</div>
				<div className="sign-up-button">
					<a href="#home">Sign Up</a>
				</div>
			</div>

			<div className="prices-container">
				<div className="prices">
					<div className="rookie">
						<h2>ROOKIE</h2>
						<p>The start of an</p>
						<p>Illustrious career earns</p>
						<p className="over-sized-percentage">10%</p>
						<p>of the total purchase price</p>
						<p>towards your point value!</p>
						<p className="over-sized-price">Price: $49.99</p>
					</div>
				</div>
				<div className="sign-up-button">
					<a href="#home">Sign Up</a>
				</div>
			</div>

			<div className="prices-container">
				<div className="prices">
					<div className="goat">
						<h2>THE GOAT</h2>
						<p>The "Greatest Of All Time"</p>
						<p>package that earns</p>
						<p className="over-sized-percentage">20%</p>
						<p>of the total purchase price</p>
						<p>towards your point value!</p>
						<p className="over-sized-price">Price: $99.99</p>
					</div>
				</div>
				<div className="sign-up-button">
					<a href="#home">Sign Up</a>
				</div>
			</div>
		</div>
	);
}

export default PricingPlans;

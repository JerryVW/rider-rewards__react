import './Sponsors.css';

function Sponsors() {
	return (
		<div>
			<section className="brands-container">
				<h2 className="brands-phrase">
					Nothing but the best brands in house!
				</h2>
				<div className="brand-logos">
					<a href="#fox">
						<img
							className="brand-logo"
							src={require('../images/logos/fox.png')}
							alt="Fox Logo"
						/>
					</a>
					<a href="#seven">
						<img
							className="brand-logo"
							src={require('../images/logos/seven.png')}
							alt="Seven Logo"
						/>
					</a>
					<a href="#thor">
						<img
							className="brand-logo"
							src={require('../images/logos/thor.png')}
							alt="Thor Logo"
						/>
					</a>
					<a href="#oneal">
						<img
							className="brand-logo"
							src={require('../images/logos/oneal.png')}
							alt="Oneal Logo"
						/>
					</a>
					<a href="#alpine-star">
						<img
							className="brand-logo"
							src={require('../images/logos/alpine-stars.png')}
							alt="Alpine Stars Logo"
						/>
					</a>
				</div>

				<div className="brand-logos">
					<a href="#acebris">
						<img
							className="brand-logo"
							src={require('../images/logos/acerbis.png')}
							alt="Acerbis Logo"
						/>
					</a>
					<a href="#fox">
						<img
							className="brand-logo"
							src={require('../images/logos/leat.png')}
							alt="Leat Logo"
						/>
					</a>
					<a href="#fox">
						<img
							className="brand-logo"
							src={require('../images/logos/oakley.png')}
							alt="Oakly Logo"
						/>
					</a>
					<a href="#fox">
						<img
							className="brand-logo"
							src={require('../images/logos/scott.png')}
							alt="Scott Logo"
						/>
					</a>
				</div>

				{/* <div class="brand-logos">
      <a href="#"><img class="brand-logo" src="./images/logos/oakley.png" alt="Fox Logo" /></a>
      <a href="#"><img class="brand-logo" src="./images/logos/troy-lee.png" alt="Fox Logo" /></a>
      <a href="#"><img class="brand-logo" src="./images/logos/msr.png" alt="Fox Logo" /></a>
      <a href="#"><img class="brand-logo" src="./images/logos/leat.png" alt="Fox Logo" /></a>
      <a href="#"><img class="brand-logo" src="./images/logos/evs.png" alt="Fox Logo" /></a>
    </div>

    <div class="brand-logos">
      <a href="#"><img class="brand-logo" src="./images/logos/shoei.png" alt="Fox Logo" /></a>
      <a href="#"><img class="brand-logo" src="./images/logos/asterisk.png" alt="Fox Logo" /></a>
      <a href="#"><img class="brand-logo" src="./images/logos/spy.png" alt="Fox Logo" /></a>
      <a href="#"><img class="brand-logo" src="./images/logos/bell.png" alt="Fox Logo" /></a>
    </div> */}

				<h3 className="brands-phrase2">And many more.....</h3>
			</section>
		</div>
	);
}

export default Sponsors;

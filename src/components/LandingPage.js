import './LandingPage.css';
import SearchBar from '../components/LandingPage/SearchBar';
import MemberAccount from '../components/LandingPage/MemberAccount';
import NavBar from '../components/LandingPage/NavBar';
import HeaderInfo from './LandingPage/HeaderInfo';
import PricingPlans from './LandingPage/PricingPlans';

function LandingPage() {
	return (
		<div>
			<header className="landing-page">
				<div className="container">
					<a className="logo-container" href="#home">
						<img
							className="logo"
							src={require('../images/Logo.png')}
							alt="Site Logo"
						/>
					</a>
					<SearchBar />
					<MemberAccount />
				</div>
				<NavBar />
				<HeaderInfo />
				<PricingPlans />
			</header>
		</div>
	);
}

export default LandingPage;

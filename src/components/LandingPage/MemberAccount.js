import './MemberAccount.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function MemberAccount() {
	return (
		<div className="member-container">
			<div className="shopping-cart">
				<a className="member-essentials" href="#cart">
					<span className="shopping-cart">Cart</span>
					<FontAwesomeIcon icon={faCartShopping} />
					<span className="cart-count">0</span>
				</a>
			</div>
			<div className="wish-list">
				<a className="member-essentials" href="#wish-list">
					Wish List{' '}
					<FontAwesomeIcon
						className="heart-beat"
						icon={faHeartPulse}
					/>
				</a>
			</div>
			<div className="account">
				<a className="member-essentials" href="#account">
					Account{' '}
					<FontAwesomeIcon
						className="user-circle"
						icon={faCircleUser}
					/>
				</a>
			</div>
		</div>
	);
}

export default MemberAccount;

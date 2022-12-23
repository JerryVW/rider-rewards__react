import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
	// const search = document.getElementById('search').value;
	// const searchIcon = document.getElementById('search-icon');

	// searchIcon.addEventListener('click', function () {
	// 	console.log(search);
	// });

	return (
		<div className="search-container">
			<input
				id="Search"
				className="search-box"
				type="text"
				placeholder="Search"
			/>
			<button id="search-icon" className="gear-search" type="search">
				<FontAwesomeIcon
					className="magnifying-glass"
					icon={faMagnifyingGlass}
				/>
			</button>
		</div>
	);
}

export default SearchBar;

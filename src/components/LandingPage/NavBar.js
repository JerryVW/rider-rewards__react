import './NavBar.css';

function NavBar() {
	return (
		<div className="nav-container">
			<nav className="nav-bar">
				<ul>
					<li>
						<a href="#home">HOME</a>
					</li>
					<select className="selection">
						<option className="selected-option" value="">
							GEAR
						</option>
						<option className="selected-option" value="men">
							MEN
						</option>
						<option className="selected-option" value="woman">
							WOMAN
						</option>
						<option className="selected-option" value="youths">
							YOUTHS
						</option>
					</select>
					<li>
						<a href="#protection">PROTECTION</a>
					</li>

					<li>
						<a href="#packages">PACKAGES</a>
					</li>
					<li>
						<a href="#sponsors"> SPONSORS</a>
					</li>
				</ul>
			</nav>

			<hr />
		</div>
	);
}

export default NavBar;

/* <li>
						<a href="#gloves">GLOVES</a>
					</li>
					<li>
						<a href="#goggles">GOGGLES</a>
					</li>
					<li>
						<a href="#mens">MENS</a>
					</li>
					<li>
						<a href="#womans">WOMANS</a>
					</li>
					<li>
						<a href="#youth">YOUTH</a>
					</li>
                
					<li>
						<a href="#jerseys">JERSEYS</a>
					</li>
					<li>
						<a href="#pants">PANTS</a>
					</li>
					<li>
						<a href="#boots">BOOTS</a>
					</li> */

import React from 'react';

const Header = (props) => {
		return ( 
			<header className="top">
			<h1>
			Catch
			<span className="ofThe">
			<span className="of">Of</span>
			<span class="the">The</span>
			</span>
			Day
			</h1>
			<h3 class="tagline"><span> {props.tagline}</span> </h3>
			</header>
		)
}

export default Header;
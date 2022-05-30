import React from "react";
import "./header.css";

const Header = () => {
	return (
		<header>
			<div className='container header__container'></div>
			<h1>Raised Frame</h1>
			<h5>Elevate Your Footage</h5>
			<h5 className='text-light'>Certified Drone Sevices</h5>
		</header>
	);
};

export default Header;

import React from "react";
import "./header.css";
import CTA from "../header/CTA";
import mainhero from "../../assets/mainhero.mp4";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
	return (
		<header>
			<div className='container header__container'>
				<h1>Raised Frame</h1>
				<h5>Elevate Your Footage</h5>
				<h5 className='text-light'>Certified Drone Sevices</h5>
				<CTA />
				<HeaderSocials />

				<div className='mainHero'>
					<video src={mainhero} autoPlay loop muted />
				</div>

				<a href='#contact' className='scroll__down'>
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;

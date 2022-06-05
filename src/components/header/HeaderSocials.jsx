import React from "react";
import { BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a href='https://tiktok.com' target='_blank'>
				<SiTiktok />
			</a>
			<a href='https://instagram.com' target='_blank'>
				<BsInstagram />
			</a>
			<a href='https://youtube.com' target='_blank'>
				<BsYoutube />
			</a>
			<a href='https://twitter.com' target='_blank'>
				<BsTwitter />
			</a>
		</div>
	);
};

export default HeaderSocials;

import React from "react";

const Footer = () => {
	let today = new Date();
	return (
		<footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-gray-400 py-4">
			<div className="container mx-auto text-center">
				<p className="mb-2 text-sm">Connect with us on social media</p>
				<div className="flex justify-center space-x-4 mb-4">
					<a href="#" className="text-blue-500 hover:text-blue-400">Facebook </a>
					<a href="#" className="text-blue-500 hover:text-blue-400">Twitter</a>
					<a href="#" className="text-blue-500 hover:text-blue-400">Instagram</a>
					<a href="#" className="text-blue-500 hover:text-blue-400">LinkedIn</a>
				</div>
				<p className="text-xs text-gray-500">&copy; {today.getFullYear()} Cryptex. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;

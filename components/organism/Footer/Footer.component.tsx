import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandTwitter,
	IconMail,
	IconPhone,
} from "@tabler/icons-react";
import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-800 text-white py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-between">
					{/* Branding and Logo */}
					<div className="w-full sm:w-1/2 md:w-1/4 mb-6">
						<img src="/path/to/logo.png" alt="Logo" className="h-10 mb-2" />
						<p className="text-gray-400">
							Building innovative solutions for a better tomorrow.
						</p>
					</div>

					{/* Quick Links */}
					<div className="w-full sm:w-1/2 md:w-1/4 mb-6">
						<h3 className="font-semibold mb-2">Quick Links</h3>
						<ul className="text-gray-400">
							<li>
								<a href="#home" className="hover:text-white">
									Home
								</a>
							</li>
							<li>
								<a href="#about" className="hover:text-white">
									About Us
								</a>
							</li>
							<li>
								<a href="#services" className="hover:text-white">
									Services
								</a>
							</li>
							<li>
								<a href="#contact" className="hover:text-white">
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Information */}
					<div className="w-full sm:w-1/2 md:w-1/4 mb-6">
						<h3 className="font-semibold mb-2">Contact Us</h3>
						<p className="text-gray-400 flex items-center">
							<IconMail className="mr-2" /> info@example.com
						</p>
						<p className="text-gray-400 flex items-center">
							<IconPhone className="mr-2" /> +1 (123) 456-7890
						</p>
					</div>

					{/* Social Media Icons */}
					<div className="w-full sm:w-1/2 md:w-1/4 mb-6">
						<h3 className="font-semibold mb-2">Follow Us</h3>
						<div className="flex space-x-4">
							<a
								href="https://twitter.com"
								className="text-gray-400 hover:text-white"
							>
								<IconBrandTwitter className="w-6 h-6" />
							</a>
							<a
								href="https://facebook.com"
								className="text-gray-400 hover:text-white"
							>
								<IconBrandFacebook className="w-6 h-6" />
							</a>
							<a
								href="https://instagram.com"
								className="text-gray-400 hover:text-white"
							>
								<IconBrandInstagram className="w-6 h-6" />
							</a>
						</div>
					</div>
				</div>
				<div className="text-center text-gray-400 mt-6">
					&copy; {new Date().getFullYear()} Your Company. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;

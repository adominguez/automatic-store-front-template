import PropTypes from "prop-types";
import React from "react";

const HeadingRowWithLinks = ({ headingType, heading, text, color, colorSize, textColor, textColorSize }) => {

	return (
		<section className="text-gray-700 body-font">
			<div className="container flex flex-wrap items-center px-5 py-24 mx-auto">
				<div className="pb-10 mb-10 border-b border-gray-300 md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0">
					<h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">Pitchfork Kickstarter Taxidermy</h1>
					<p className="text-base leading-relaxed">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.</p>
					<a className="inline-flex items-center mt-4 text-orange-500">Learn More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</a>
				</div>
				<div className="flex flex-col md:w-1/2 md:pl-12">
					<h2 className="mb-3 text-sm font-medium tracking-widest text-gray-800 title-font">CATEGORIES</h2>
					<nav className="flex flex-wrap -mb-1 list-none">
						<li className="w-1/2 mb-1 lg:w-1/3">
							<a className="text-gray-600 hover:text-gray-800">First Link</a>
						</li>
						<li className="w-1/2 mb-1 lg:w-1/3">
							<a className="text-gray-600 hover:text-gray-800">Second Link</a>
						</li>
						<li className="w-1/2 mb-1 lg:w-1/3">
							<a className="text-gray-600 hover:text-gray-800">Third Link</a>
						</li>
						<li className="w-1/2 mb-1 lg:w-1/3">
							<a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
						</li>
						<li className="w-1/2 mb-1 lg:w-1/3">
							<a className="text-gray-600 hover:text-gray-800">Fifth Link</a>
						</li>
						<li className="w-1/2 mb-1 lg:w-1/3">
							<a className="text-gray-600 hover:text-gray-800">Sixth Link</a>
						</li>
						<li className="w-1/2 mb-1 lg:w-1/3">
							<a className="text-gray-600 hover:text-gray-800">Seventh Link</a>
						</li>
						<li className="w-1/2 mb-1 lg:w-1/3">
							<a className="text-gray-600 hover:text-gray-800">Eighth Link</a>
						</li>
					</nav>
				</div>
			</div>
		</section>
	)
}

HeadingRowWithLinks.propTypes = {
	headingType: PropTypes.number,
	text: PropTypes.string,
	heading: PropTypes.string,
	color: PropTypes.string,
	colorSize: PropTypes.number,
	textColor: PropTypes.string,
	textColorSize: PropTypes.number,
}

HeadingRowWithLinks.defaultProps = {
	headingType: 2,
	text: `Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.`,
	heading: `Pitchfork Kickstarter Taxidermy`,
	color: `red`,
	colorSize: 700,
	textColor: `gray`,
	textColorSize: 700,
}

export default HeadingRowWithLinks;
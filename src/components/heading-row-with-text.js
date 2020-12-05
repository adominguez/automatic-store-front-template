import PropTypes from "prop-types";
import React from "react";

const HeadingRowWithText = ({headingType, heading, text, color, colorSize, textColor, textColorSize}) => {	

	return (
		<div className="flex flex-wrap w-full">
			<div className="w-full mb-6 lg:w-1/2 lg:mb-0">
				{
					headingType === 1 && 
					<h1 className={`sm:text-3xl text-2xl font-medium title-font mb-2 text-${color}-${colorSize}`}>
						{heading}
					</h1>
				}
				{
					headingType === 2 && 
					<h2 className={`sm:text-3xl text-2xl font-medium title-font mb-2 text-${color}-${colorSize}`}>
						{heading}
					</h2>
				}
				{
					headingType === 3 && 
					<h2 className={`sm:text-3xl text-2xl font-medium title-font mb-2 text-${color}-${colorSize}`}>
						{heading}
					</h2>
				}
				<div className={`h-1 w-20 bg-${color}-${colorSize - 200} rounded`}></div>
			</div>
			<p className={`lg:w-1/2 w-full leading-relaxed text-base text-${textColor}-${textColorSize}`}>{text}</p>
		</div>
	)
}

HeadingRowWithText.propTypes = {
	headingType: PropTypes.number,
	text: PropTypes.string,
	heading: PropTypes.string,
	color: PropTypes.string,
	colorSize: PropTypes.number,
	textColor: PropTypes.string,
	textColorSize: PropTypes.number,
}

HeadingRowWithText.defaultProps = {
	headingType: 2,
	text: `Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.`,
	heading: `Pitchfork Kickstarter Taxidermy`,
	color: `red`,
	colorSize: 700,
	textColor: `gray`,
	textColorSize: 700,
}

export default HeadingRowWithText;
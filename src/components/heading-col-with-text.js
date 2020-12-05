import PropTypes from "prop-types";
import React from "react";

const HeadingColWithText = ({ headingType, heading, text, color, colorSize, textColor, textColorSize, preHeading }) => {

	return (
		<div className="flex flex-col w-full mb-20 text-center">
			{
				preHeading &&
				<span className={`text-xs text-${color}-${colorSize - 200} tracking-widest font-medium title-font mb-1`}>{preHeading}</span>
			}
			{
				headingType === 1 &&
				<h1 className={`sm:text-3xl text-2xl font-medium title-font mb-4 text-${color}-${colorSize}`}>
					{heading}
				</h1>
			}
			{
				headingType === 2 &&
				<h2 className={`sm:text-3xl text-2xl font-medium title-font mb-4 text-${color}-${colorSize}`}>
					{heading}
				</h2>
			}
			{
				headingType === 3 &&
				<h2 className={`sm:text-3xl text-2xl font-medium title-font mb-4 text-${color}-${colorSize}`}>
					{heading}
				</h2>
			}
			<p className={`lg:w-2/3 mx-auto leading-relaxed text-base text-${textColor}-${textColorSize}`}>{text}</p>
		</div>
	)
}

HeadingColWithText.propTypes = {
	headingType: PropTypes.number,
	text: PropTypes.string,
	heading: PropTypes.string,
	color: PropTypes.string,
	colorSize: PropTypes.number,
	textColor: PropTypes.string,
	textColorSize: PropTypes.number,
	preHeading: PropTypes.string
}

HeadingColWithText.defaultProps = {
	headingType: 2,
	text: `Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.`,
	heading: `Pitchfork Kickstarter Taxidermy`,
	color: `red`,
	colorSize: 700,
	textColor: `gray`,
	textColorSize: 700,
	preHeading: null,
}

export default HeadingColWithText;
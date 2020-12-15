import PropTypes from "prop-types";
import React from "react";
import Parser from 'html-react-parser';

const HeadingColWithText = ({ headingType, heading, text, preHeading }) => {

	return (
		<div className="flex flex-col w-full text-center">
			{
				preHeading &&
				<span className={`text-xs text-secondary-300 tracking-widest font-medium title-font mb-1`}>{preHeading}</span>
			}
			{
				headingType === 1 &&
				<h1 className={`sm:text-3xl text-secondary-300 text-2xl px-2 md:px-5 font-medium title-font mb-4`}>
					{Parser(heading)}
				</h1>
			}
			{
				headingType === 2 &&
				<h2 className={`sm:text-3xl text-secondary-300 text-2xl px-2 md:px-5 font-medium title-font mb-4`}>
					{Parser(heading)}
				</h2>
			}
			{
				headingType === 3 &&
				<h2 className={`sm:text-3xl text-2xl px-2 md:px-5 font-medium title-font mb-4 text-secondary-color`}>
					{Parser(heading)}
				</h2>
			}
			<p className={`w-full leading-relaxed text-base text-textColor-500  px-2 md:px-5`}>{Parser(text)}</p>
		</div>
	)
}

HeadingColWithText.propTypes = {
	headingType: PropTypes.number,
	text: PropTypes.string,
	heading: PropTypes.string,
	preHeading: PropTypes.string
}

HeadingColWithText.defaultProps = {
	headingType: 2,
	text: `Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.`,
	heading: `Pitchfork Kickstarter Taxidermy`,
	preHeading: null,
}

export default HeadingColWithText;
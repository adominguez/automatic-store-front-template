import PropTypes from "prop-types";
import React from "react";
import Parser from 'html-react-parser';

const HeadingRowWithText = ({headingType, heading, text}) => {	

	return (
		<div className="flex flex-wrap w-full">
			<div className="w-full mb-6 lg:w-1/2 lg:mb-0">
				{
					headingType === 1 && 
					<h1 className={`sm:text-3xl text-2xl font-medium title-font mb-2 text-secondary-500`}>
						{Parser(heading)}
					</h1>
				}
				{
					headingType === 2 && 
					<h2 className={`sm:text-3xl text-2xl font-medium title-font mb-2 text-secondary-500`}>
						{Parser(heading)}
					</h2>
				}
				{
					headingType === 3 && 
					<h3 className={`sm:text-2xl text-2xl font-medium title-font mb-2 text-secondary-500`}>
						{Parser(heading)}
					</h3>
				}
				<div className={`h-1 w-20 bg-secondary-200 rounded`}></div>
			</div>
			<p className={`lg:w-1/2 w-full leading-relaxed text-base text-textColor-500`}>{Parser(text)}</p>
		</div>
	)
}

HeadingRowWithText.propTypes = {
	headingType: PropTypes.number,
	text: PropTypes.string,
	heading: PropTypes.string,
}

HeadingRowWithText.defaultProps = {
	headingType: 2,
	text: `Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.`,
	heading: `Pitchfork Kickstarter Taxidermy`,
}

export default HeadingRowWithText;
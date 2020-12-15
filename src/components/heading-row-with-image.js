import PropTypes from "prop-types";
import React from "react";
import HeadingColWithText from './heading-col-with-text';

const HeadingRowWithImage = ({headingType, heading, text, image = {}, preHeading}) => {	

	return (
		<div className="container flex flex-col items-center md:flex-row">
			<div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 md:pr-8 md:items-start md:text-left md:mb-0">
				<HeadingColWithText headingType={headingType} heading={heading} text={text} preHeading={preHeading} />
			</div>
			<div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
				{
					image &&
					<picture>
						<source media="(max-width: 480px)" srcSet={`${image.src}._AC_SY300_.${image.extension}`}></source>
						<source media="(max-width: 768px)" srcSet={`${image.src}._AC_SY400_.${image.extension}`}></source>
						<img loading="lazy" className="flex-shrink-0 object-cover object-center w-full mb-4 rounded-lg" alt={heading} src={`${image.src}._AC_SY500_.${image.extension}`} />
					</picture>
				}
			</div>
		</div>
	)
}

HeadingRowWithImage.propTypes = {
	headingType: PropTypes.number,
	text: PropTypes.string,
	heading: PropTypes.string,
	image: PropTypes.object,
	preHeading: PropTypes.string,
}

HeadingRowWithImage.defaultProps = {
	headingType: 2,
	text: `Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.`,
	heading: `Pitchfork Kickstarter Taxidermy`,
	image: null,
	preHeading: null
}

export default HeadingRowWithImage;
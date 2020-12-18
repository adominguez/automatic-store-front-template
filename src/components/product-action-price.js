import PropTypes from "prop-types";
import React from "react";
import ProductsStars from "./product-stars";
import { Link } from "gatsby";

const ProductActionPrice = ({ product, buttonText, hideAmazonRatings, hideAmazonRate, useAction, relativePath, tag }) => {
	return (
		<div className="flex">
			<div className="flex items-center flex-grow">
				<span className="pr-4 text-2xl text-center text-primary-500">{product.price.replace('.', ',')}</span>
				<ProductsStars hideAmazonRatings={hideAmazonRatings} hideAmazonRate={hideAmazonRate} amazonRate={product.amazonRate} amazonRatings={product.amazonRatings} />
			</div>
			{
				useAction ? 
				<Link className="flex items-center w-auto px-4 py-2 text-white border-0 rounded bg-primary-500 focus:outline-none hover:bg-primary-700 focus:bg-primary-700" to={`${relativePath ? '../' : ''}goto?url=${product.link}&tag=${tag}`}>
					{buttonText}
					<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
						<path d="M5 12h14M12 5l7 7-7 7"></path>
					</svg>
				</Link>
				: 
				<button className="flex items-center w-auto px-4 py-2 text-white border-0 rounded bg-primary-500 focus:outline-none hover:bg-primary-700 focus:bg-primary-700">
					{buttonText}
					<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
						<path d="M5 12h14M12 5l7 7-7 7"></path>
					</svg>
				</button>
			}
		</div>
	)
}

ProductActionPrice.propTypes = {
	product: PropTypes.object,
	buttonText: PropTypes.string,
	hideAmazonRate: PropTypes.bool,
	hideAmazonRatings: PropTypes.bool,
	useAction: PropTypes.bool,
	relativePath: PropTypes.bool,
	tag: PropTypes.string
}

ProductActionPrice.defaultProps = {
	buttonText: 'Ver más información',
	hideAmazonRate: false,
	hideAmazonRatings: false,
	useAction: false,
	relativePath: false
}

export default ProductActionPrice;
import PropTypes from "prop-types";
import React from "react";
import ProductActionPrice from "./product-action-price";

const BasicProductsList = ({products, tag}) => {
	return (
		<div className="flex flex-wrap px-2 bg-white rounded-lg lg:p-0">
			{
				products.map((product, index) => (
					product.featureImage &&
					<a rel="nofollow noopener noreferrer" target="_blank" href={`${product.link}/tag=${tag}&language=es_ES`}  key={`product-${index}`} className="w-full p-4 border-2 border-transparent outline-none cursor-pointer lg:w-1/4 md:w-1/2 focus:border-secondary-100 hover:border-secondary-100">
						<div className="relative flex flex-col justify-center h-56 overflow-hidden rounded">
							<picture>
								<source media="(max-width: 480px)" srcSet={`${product.featureImage.src}._AC_SY400_.${product.featureImage.extension}`}></source>
								<source media="(max-width: 768px)" srcSet={`${product.featureImage.src}._AC_SY300_.${product.featureImage.extension}`}></source>
								<img loading="lazy" className="flex-shrink-0 object-cover object-center w-full mb-4 rounded-lg h-70 :hover:h-none" src={`${product.featureImage.src}._AC_SY300_.${product.featureImage.extension}`} alt={product.name} />
							</picture>
						</div>
						<div className="mt-4">
							<h3 title={product.name} className="mb-2 overflow-hidden font-medium text-s title-font text-secondary-500 truncate-3-lines">
								{product.name}
							</h3>
							<ProductActionPrice buttonText="Más info" hideAmazonRatings hideAmazonRate product={product} />
						</div>
					</a>
				))
			}
		</div>
	)
}

BasicProductsList.propTypes = {
	products: PropTypes.array,
	tag: PropTypes.string
}

BasicProductsList.defaultProps = {
	products: [],
	tag: ``
}

export default BasicProductsList;
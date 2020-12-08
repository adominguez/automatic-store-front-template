import PropTypes from "prop-types";
import { Link } from "gatsby";
import React from "react";

const BasicProductsList = ({products, tag}) => {

	return (
		<div className="flex flex-wrap">
			{
				products.map((product, index) => (
					product.featureImage &&
					<Link rel="nofollow noopener noreferrer" target="_blank" to={`${product.link}/tag=${tag}&language=es_ES`}  key={`product-${index}`} className="w-full p-4 border-2 border-transparent outline-none lg:w-1/4 md:w-1/2 focus:border-secondary-100 hover:border-secondary-100">
						<div className="relative flex flex-col justify-center h-56 overflow-hidden rounded">
							<picture>
								<source media="(max-width: 480px)" srcSet={`${product.featureImage.src}._AC_SY400_.${product.featureImage.extension}`}></source>
								<source media="(max-width: 768px)" srcSet={`${product.featureImage.src}._AC_SY300_.${product.featureImage.extension}`}></source>
								<img loading="lazy" className="flex-shrink-0 object-cover object-center w-full mb-4 rounded-lg h-70 :hover:h-none" src={`${product.featureImage.src}._AC_SY300_.${product.featureImage.extension}`} alt={product.name} />
							</picture>
						</div>
						<div className="mt-4">
							<h3 title={product.name} className="overflow-hidden text-xs font-medium title-font text-secondary-500 truncate-3-lines">
								{product.name}
							</h3>
							<p className="mt-1 text-lg text-primary-500">{product.price.replace('.', ',')}</p>
						</div>
					</Link>
				))
			}
		</div>
	)
}

BasicProductsList.propTypes = {
	pluralPrincipalKeyword: PropTypes.string,
	singularPrincipalKeyword: PropTypes.string,
	categories: PropTypes.array,
	content: PropTypes.string
}

BasicProductsList.defaultProps = {
	pluralPrincipalKeyword: 'los productos',
	singularPrincipalKeyword: 'producto',
	categories: [],
	content: ``
}

export default BasicProductsList;
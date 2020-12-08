import PropTypes from "prop-types";
import React from "react";
import CategoriesList from '../components/categories-list';
import BasicProductsList from '../components/basic-products-list';
import Parser from 'html-react-parser';

const HomePage = ({categories, pluralPrincipalKeyword, singularPrincipalKeyword, products, tag}) => {

	const calculateCheaperProducts = () => {
		const productsPriceTransformed = products.map(product => ({
			...product,
			price: parseFloat(product.price.replace(' €'))
		}));
		const cheaper =  productsPriceTransformed.sort((a, b) => a.price - b.price).filter(item => item.price > 0)
		return cheaper.map(product => ({
			...product,
			price: `${product.price} €`
		})).slice(0, 4);
	}

	return (
		<>
			{(
				categories && categories.length && 
				<div className="px-3 py-10">
					<CategoriesList categories={categories} pluralPrincipalKeyword={pluralPrincipalKeyword} singularPrincipalKeyword={singularPrincipalKeyword} />
				</div>
        	)}
			{
				calculateCheaperProducts() && calculateCheaperProducts().length &&
				<div className="container px-3 full-width">
					<div className="flex flex-col w-full mb-10 text-center">
						<h2 className="mb-4 text-2xl font-medium text-primary-500 title-font">{`Encuentra ${pluralPrincipalKeyword} al mejor precio`}</h2>
						<p className="w-full text-base text-text-textColor-500">
							{/* Realizar spintax para esta página de catálogo de productos */}
							{Parser(
								`
									En este sitio podrás encontrar todo un <b>catálogo completo de ${pluralPrincipalKeyword}</b>, Hay infinidad de modelos y marcas, por lo que es natural que no sepas <b>que ${singularPrincipalKeyword} comprar</b> que mejor se adapte a tus necesidades, no te preocupes, Aquí podrás encontrar todo lo que necesitas saber para realizar la mejor elección.
								`)
							}
						</p>
					</div>
					<div className="py-10">
						<BasicProductsList products={calculateCheaperProducts()} tag={tag} />
					</div>
				</div>
			}
		</>
	)
}

HomePage.propTypes = {
	pluralPrincipalKeyword: PropTypes.string,
	singularPrincipalKeyword: PropTypes.string,
	categories: PropTypes.array,
	products: PropTypes.array,
	content: PropTypes.string
}

HomePage.defaultProps = {
	pluralPrincipalKeyword: 'los productos',
	singularPrincipalKeyword: 'producto',
	categories: [],
	products: [],
	content: ``
}

export default HomePage;
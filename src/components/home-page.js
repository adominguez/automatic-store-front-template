import PropTypes from "prop-types";
import React from "react";
import EntitiesList from '../components/entities-list';
import { calculateCheaperProducts, isOdd } from '../utils/utils'
import TextBlock from "./text-block";
import ComparisonProducts from './comparison-products';
import FeatureProduct from './feature-product';

const HomePage = ({categories, pluralPrincipalKeyword, singularPrincipalKeyword, products, interlinking, productsToCompare, bestProducts}) => {

const headingCategoryText = `Categorías de ${pluralPrincipalKeyword}`;
const categoryText = `Si estás buscando un sitio en el que puedas encontrar <b>todo lo relacionado con ${pluralPrincipalKeyword}</b> estás en el sitio adecuado. Aquí cuentas con una gran variedad de categorías, en cada una de ellas encontrarás productos interesantes, échale un vistazo a toda nuestra web, y encuentra tu ${singularPrincipalKeyword}.`;

const cheaperProductsHeading = `Los productos más baratos`
const cheaperProductsText = `En este sitio podrás encontrar todo un <b>catálogo completo de ${pluralPrincipalKeyword}</b>, Hay infinidad de modelos y marcas, por lo que es natural que no sepas <b>que ${singularPrincipalKeyword} comprar</b> que mejor se adapte a tus necesidades, no te preocupes, Aquí podrás encontrar todo lo que necesitas saber para realizar la mejor elección.`

const bestProductsHeading = `Los 10 mejores ${pluralPrincipalKeyword}`
const bestProductsText = `Hemos preparado para tí los mejores ${pluralPrincipalKeyword} que vas a encontrar actualmente en el mercado`

	return (
		<>
			{(
				categories && categories.length && 
				<>
					<div className="py-12">
						<TextBlock heading={headingCategoryText} text={categoryText} headingSize={2} />
					</div>
					<div className="mb-12">
						<EntitiesList entities={categories} />
					</div>
				</>
        	)}
			{
				calculateCheaperProducts(products) && calculateCheaperProducts(products).length &&
				<>
					<div className="mb-12">
						<TextBlock heading={cheaperProductsHeading} text={cheaperProductsText} headingSize={2} />
					</div>
					<div className="mb-12">
						<EntitiesList entities={calculateCheaperProducts(products)} showAsProducts />
					</div>
				</>
			}
			{
				!!bestProducts.length &&
					<>
						<div className="mb-12">
							<TextBlock heading={bestProductsHeading} text={bestProductsText} headingSize={2} />
						</div>
						<div className="mb-12">
							{
								bestProducts.map((product, index) => (
									<FeatureProduct key={`best-product-${index}`} product={product} rowReverse={isOdd(index)} useAction />
								))
							}
						</div>
					</>
			}
			{
				!!productsToCompare.length &&
					<div className="mb-12">
						<ComparisonProducts products={calculateCheaperProducts(productsToCompare, productsToCompare.length)} />
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
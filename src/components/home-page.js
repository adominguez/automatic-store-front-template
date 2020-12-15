import PropTypes from "prop-types";
import React from "react";
import CategoriesList from '../components/categories-list';
import BasicProductsList from '../components/basic-products-list';
import { calculateCheaperProducts } from '../utils/utils'
import HeadingColWithText from "./heading-col-with-text";
import HeadingRowWithText from "./heading-row-with-text";
import HeadingRowWithImage from "./heading-row-with-image";

const HomePage = ({categories, pluralPrincipalKeyword, singularPrincipalKeyword, products, tag}) => {

const headingCategoryText = `Categorías de ${pluralPrincipalKeyword}`;
const categoryText = `Si estás buscando un sitio en el que puedas encontrar <b>todo lo relacionado con ${pluralPrincipalKeyword}</b> estás en el sitio adecuado. Aquí cuentas con una gran variedad de categorías, en cada una de ellas encontrarás productos interesantes, échale un vistazo a toda nuestra web, y encuentra tu ${singularPrincipalKeyword}.`;

const cheaperProductsHeading = `Los productos más baratos`
const cheaperProductsText = `En este sitio podrás encontrar todo un <b>catálogo completo de ${pluralPrincipalKeyword}</b>, Hay infinidad de modelos y marcas, por lo que es natural que no sepas <b>que ${singularPrincipalKeyword} comprar</b> que mejor se adapte a tus necesidades, no te preocupes, Aquí podrás encontrar todo lo que necesitas saber para realizar la mejor elección.`

const renderHeading = (heading, text, headingType, preHeading, image) => {
	return text.length < 300 ? (<HeadingRowWithText headingType={headingType} heading={heading} text={text} />) 
	: text.length >= 300 && text.length > 700 && image ? (<HeadingRowWithImage headingType={headingType} heading={heading} text={text} preHeading={preHeading} image={image} />)
	: (<HeadingColWithText headingType={headingType} heading={heading} text={text} preHeading={preHeading} />)
}

	return (
		<>
			{(
				categories && categories.length && 
				<>
					<div className="py-12">
						{renderHeading(headingCategoryText, categoryText, 2)}
					</div>
					<div className="px-3 mb-12">
						<CategoriesList categories={categories} pluralPrincipalKeyword={pluralPrincipalKeyword} singularPrincipalKeyword={singularPrincipalKeyword} />
					</div>
				</>
        	)}
			{
				calculateCheaperProducts(products) && calculateCheaperProducts(products).length &&
				<>
					<div className="mb-12">
						{renderHeading(cheaperProductsHeading, cheaperProductsText, 2)}
					</div>
					<div className="mb-12">
						<BasicProductsList products={calculateCheaperProducts(products)} tag={tag} />
					</div>
				</>
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
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import HeadingRowWithText from './heading-row-with-text';
import HeadingRowWithImage from './heading-row-with-image';
import HeadingColWithText from './heading-col-with-text';
import BasicProductsList from './basic-products-list'
import ComparisonProducts from './comparison-products'
import {calculateCheaperProducts, comparisonProducts, getFeaturedProduct} from '../utils/utils'
import FeatureProduct from "./feature-product";
import BasicFeatureProduct from "./basic-feature-product";
import CategoriesList from "./categories-list";

const CategoryPage = ({content, products, tag, categories, id}) => {
	const {firstContent = {}, secondContent = {}, thirdContent = {}, fourthContent = {}} = content;
	const [productsToCompare, setProductsToCompare] = useState([]);
	const [featureProduct, setFeatureProducts] = useState(null);

	useEffect(() => {
		setProductsToCompare(comparisonProducts(products));
		setFeatureProducts(getFeaturedProduct(products));
	}, []);

	const calculateImage = () => {
		let image = null;
		products.forEach(product => {
			if(product.images && product.images.length > 1) {
				image = product.images[0];
			}
		});
		return image;
	}
	
	const renderHeading = (heading = '', text = '', headingType = 2, preHeading, image) => {
		return text.length < 300 ? (<HeadingRowWithText headingType={headingType} heading={heading} text={text} />) 
		: text.length >= 300 && text.length > 700 && image ? (<HeadingRowWithImage headingType={headingType} heading={heading} text={text} preHeading={preHeading} image={image} />)
		: (<HeadingColWithText headingType={headingType} heading={heading} text={text} preHeading={preHeading} />)
	}
	
	return (
		<>
			<div className="py-12">
				{renderHeading(firstContent.title, firstContent.content, 2, null, calculateImage())}
			</div>
			<div className="mb-12">
				<BasicProductsList products={products} tag={tag} />
			</div>
			<div className="mb-12">
				{renderHeading(secondContent.title, secondContent.content, 2)}
			</div>
			{
				!!productsToCompare.length &&
					<div className="mb-12">
						<ComparisonProducts products={calculateCheaperProducts(productsToCompare, productsToCompare.length)} />
					</div>
			}
			<div className="mb-12">
				{renderHeading(thirdContent.title, thirdContent.content, 2)}
			</div>
			{
				featureProduct && featureProduct.length &&
					<div className="mb-12">
						{
							!!featureProduct.productData.length ?
							<FeatureProduct product={featureProduct} />
							:
							<BasicFeatureProduct product={featureProduct} />
						}
					</div>
			}
			<div className="mb-12">
				{renderHeading(fourthContent.title, fourthContent.content, 2)}
			</div>
			{
				!!categories.filter(category => category.id !== id).length &&
					<div className="mb-12">
						{
							<CategoriesList categories={categories.filter(category => category.id !== id)} />
						}
					</div>
			}
		</>
	)
}

CategoryPage.propTypes = {
	content: PropTypes.object
}

CategoryPage.defaultProps = {
	content: {}
}

export default CategoryPage;
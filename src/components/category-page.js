import PropTypes from "prop-types";
import React from "react";
import TextBlock from './text-block';
import ComparisonProducts from './comparison-products'
import {calculateCheaperProducts} from '../utils/utils';
import FeatureProduct from "./feature-product";
import EntitiesList from "./entities-list";

const CategoryPage = ({content, products, categories, id, productsToCompare, bestProducts = [], interlinking = [], image, tag}) => {
	const {firstContent = {}, secondContent = {}, thirdContent = {}, fourthContent = {}} = content;

	const calculateImage = () => {
		let image = null;
		products.forEach(product => {
			if(product.images && product.images.length > 1) {
				image = product.images[0];
			}
		});
		return image;
	}
	
	return (
		<>
			{
				firstContent.title && firstContent.content && 
				<div className="py-12">
					<TextBlock heading={firstContent.title} text={firstContent.content} headingSize={2} image={calculateImage()} />
				</div>
			}
			{
				products.length > 1 &&
				<div className="mb-12">
					{products && products.length && <EntitiesList entities={products} showAsProducts dummyImage={image} relativePath tag={tag} />}
				</div>
			}
			{
				secondContent.title && secondContent.content &&
				<div className="mb-12">
					<TextBlock heading={secondContent.title} text={secondContent.content} headingSize={2} />
				</div>
			}
			{
				!!productsToCompare.length &&
					<div className="mb-12">
						<ComparisonProducts products={calculateCheaperProducts(productsToCompare, productsToCompare.length)} relativePath tag={tag} />
					</div>
			}
			{
				thirdContent.title && thirdContent.content && 
				<div className="mb-12">
					<TextBlock heading={thirdContent.title} text={thirdContent.content} headingSize={2} />
				</div>
			}
			{
				!!bestProducts.length &&
					<>
						<div className="mb-12">
							<TextBlock heading={`Título de feature product`} text={`El mejor producto calidad precio`} headingSize={2} />
						</div>
						<div className="mb-12">
							{
								bestProducts.map((product, index) => (
									<FeatureProduct key={`best-product-${index}`} product={product} useAction relativePath tag={tag} />
								))
							}
						</div>
					</>
			}
			{
				fourthContent.title && fourthContent.content &&
					<div className="mb-12">
						<TextBlock heading={fourthContent.title} text={fourthContent.content} headingSize={2} />
					</div>
			}
			{
				!!interlinking.length &&
					<>
						<div className="mb-12">
							<TextBlock heading={`Más entradas de la categoría`} text={`Contenido de las keywords de interlinking`} headingSize={2} />
						</div>
						<div className="mb-12">
							<EntitiesList entities={interlinking} relativePath inverseClass dummyImage={image} />
						</div>
					</>
			}
			{
				!!categories.filter(category => category.id !== id).length &&
					<>
						<div className="mb-12">
							<TextBlock heading={`Título para categoría`} text={`Contenido de Categoría`} headingSize={2} />
						</div>
						<div className="mb-12">
							<EntitiesList entities={categories.filter(category => category.id !== id)} relativePath dummyImage={image} />
						</div>
					</>
			}
		</>
	)
}

CategoryPage.propTypes = {
	content: PropTypes.object,
	products: PropTypes.array,
	categories: PropTypes.array,
	id: PropTypes.string,
	productsToCompare: PropTypes.array,
	bestProducts: PropTypes.array,
	interlinking: PropTypes.array,
	image: PropTypes.object,
	tag: PropTypes.string
}

CategoryPage.defaultProps = {
	content: {},
	bestProducts: [],
	interlinking: []
}

export default CategoryPage;
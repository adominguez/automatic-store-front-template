import PropTypes from "prop-types";
import React, {useState, useEffect} from "react";
import ProductActionPrice from "./product-action-price";

const FeatureProduct = ({ product }) => {
	const [tabSelected, setTabSelected] = useState('description');
	const [imageSelected, setImageSelected] = useState(null);

	useEffect(()=> {
		if(product.featureImage && product.featureImage.src && !imageSelected) {
			setImageSelected(product.featureImage)
		}
	})

	const calculateBrandProduct = () => {
		const { productData = [] } = product;
		const brand = productData.length && productData.find(item => item.key.toLowerCase().includes('marca'))
		return brand ? brand.value : null;
	}

	const isProductFeature = () => product.feature && !!product.feature.length;

	const isProductData = () => product.productData && !!product.productData.length;

	return (
		<div className="flex flex-wrap w-full px-2 mx-auto lg:p-0">
			<div className="w-full mb-6 lg:w-1/2 lg:pr-10 lg:py-6 lg:mb-0">
				<span className="text-sm tracking-widest text-textColor-300 title-font">{calculateBrandProduct()}</span>
				<h3 className="mb-4 text-xl font-medium text-primary-500 title-font truncate-3-lines" title={product.name}>{product.name}</h3>
				<div className="flex mb-4">
					{
						isProductFeature() && <button className={`flex-grow px-1 py-2 text-lg border-b-2  ${tabSelected === 'description' ? 'text-secondary-500 border-secondary-500' : 'text-textColor-300 cursor-pointer hover:text-primary-300 focus:text-primary-300'} focus:outline-none`} onClick={() => setTabSelected('description')}>Descripción</button>
					}
					{
						isProductData() && <button className={`flex-grow px-1 py-2 text-lg border-b-2  ${tabSelected === 'details' ? 'text-secondary-500 border-secondary-500' : 'text-textColor-300 cursor-pointer hover:text-primary-300 focus:text-primary-300'} focus:outline-none`} onClick={() => setTabSelected('details')}>Detalles</button>
					}
					
				</div>
				{
					isProductFeature() && tabSelected === 'description' &&
						<ul className="pl-6 mb-4 leading-relaxed text-textColor-500 lg:h-60 lg:overflow-auto">
							{
								product.feature.map((item, index) => (
									!!item.length && <li key={`feature-${index}`} className="pb-4 list-disc">{item}</li>
								))
							}
						</ul>
				}
				{
					isProductData() && tabSelected === 'details' &&
						<ul className="mb-4 leading-relaxed text-textColor-500">
							{
								product.productData && product.productData.map((item, index) => (
									<li key={`product-data-${index}`} className="flex py-2 border-b border-gray-300">
										<span className="text-gray-500">{item.key}</span>
										<span className="ml-auto text-textColor-500">{item.value}</span>
									</li>
								))
							}
						</ul>
				}
				<ProductActionPrice product={product} />
			</div>
			<div className="flex-col items-center mt-4 principal-container lg:w-1/2 lg:mt-0">
				{
					imageSelected && 
					<picture>
						<img loading="lazy" className="flex-shrink-0 object-cover object-center" src={`${imageSelected.src}._AC_SY500_.${imageSelected.extension}`} alt={product.name} />
					</picture>
				}
				{
					product.images && product.images.length ?
					(
						<div className="flex-wrap mt-4 space-x-3 principal-container">
							{
								product.images.map((image, index) => (
									<img key={`image-${index}`} loading="lazy" className="flex-shrink-0 object-cover object-center cursor-pointer focus:border-secondary-100 hover:border-secondary-100" src={`${image.src}._AC_SY50_.${image.extension}`} alt={product.name} onClick={() => setImageSelected(image)} />
								))
							}
						</div>
					)
					: null
				}
			</div>
		</div>
	)
}

FeatureProduct.propTypes = {
	product: PropTypes.object,
}

FeatureProduct.defaultProps = {
	product: null,
}

export default FeatureProduct;
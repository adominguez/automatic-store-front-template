import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const ProductDetailInfo = () => {

	return (
		<div className="flex flex-wrap mx-auto lg:w-4/5">
			<div className="w-full mb-6 lg:w-1/2 lg:pr-10 lg:py-6 lg:mb-0">
				<span className="text-sm tracking-widest text-gray-500 title-font">BRAND NAME</span>
				<h1 className="mb-4 text-3xl font-medium text-gray-900 title-font">Animated Night Hill Illustrations</h1>
				<div className="flex mb-4">
					<a className="flex-grow px-1 py-2 text-lg text-orange-500 border-b-2 border-orange-500">Description</a>
					<a className="flex-grow px-1 py-2 text-lg border-b-2 border-gray-300">Reviews</a>
					<a className="flex-grow px-1 py-2 text-lg border-b-2 border-gray-300">Details</a>
				</div>
				<p className="mb-4 leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
				<div className="flex py-2 border-t border-gray-300">
					<span className="text-gray-500">Color</span>
					<span className="ml-auto text-gray-900">Blue</span>
				</div>
				<div className="flex py-2 border-t border-gray-300">
					<span className="text-gray-500">Size</span>
					<span className="ml-auto text-gray-900">Medium</span>
				</div>
				<div className="flex py-2 mb-6 border-t border-b border-gray-300">
					<span className="text-gray-500">Quantity</span>
					<span className="ml-auto text-gray-900">4</span>
				</div>
				<div className="flex">
					<span className="text-2xl font-medium text-gray-900 title-font">$58.00</span>
					<button className="flex px-6 py-2 ml-auto text-white bg-orange-500 border-0 rounded focus:outline-none hover:bg-orange-600">Button</button>
					<button className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full">
						<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
							<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
						</svg>
					</button>
				</div>
			</div>
			<img alt="ecommerce" loading="lazy" className="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto" src="https://dummyimage.com/400x400" />
		</div>
	)
}

ProductDetailInfo.propTypes = {
	showResults: PropTypes.bool,
}

ProductDetailInfo.defaultProps = {
	showResults: false,
}

export default ProductDetailInfo;
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import TransformText from '../components/transform-text';

const CategoriesList = ({categories}) => {

	const templateHigherTen = (category, index) => {
		return (
		<div key={index} className="p-4 xl:w-1/4 lg:w-1/3 md:w-1/2">
			<div className="flex flex-col items-center h-full text-center">
				<Link className="flex flex-col justify-center h-56 mb-4 border-2 border-transparent outline-none md:mb-0 focus:border-primary-100" to={category.url}>
					<picture>
						<source media="(max-width: 480px)" srcSet={`${category.image.src}._AC_SY400_.${category.image.extension}`}></source>
						<source media="(max-width: 768px)" srcSet={`${category.image.src}._AC_SY300_.${category.image.extension}`}></source>
						<img loading="lazy" className="flex-shrink-0 object-cover object-center w-full mb-4 rounded-lg" src={`${category.image.src}._AC_SY300_.${category.image.extension}`} alt={category.name} />
					</picture>
				</Link>
				<div className="w-full bg-white">
					<h3 className="text-lg font-medium title-font">
						<Link className="outline-none text-primary-300 hover:text-primary-600 focus:text-secondary-500" to={category.url}>
							<TransformText uppercaseFirstLetter text={category.name} />
						</Link>
					</h3>
					<p className="mb-4 text-xs text-textColor-300 truncate-3-lines" title={category.description}>{category.description}</p>
				</div>
			</div>
		</div>)
	}

	const templateLowerTen = (category, index) => {
		return (
			<div key={index} className="p-4 lg:w-1/2">
				<div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
					<Link className="w-full border-2 border-transparent outline-none md:w-1/2 focus:border-primary-100" to={category.url}>
						<picture>
							<source media="(max-width: 480px)" srcSet={`${category.image.src}._AC_SY400_.${category.image.extension}`}></source>
							<source media="(max-width: 768px)" srcSet={`${category.image.src}._AC_SY300_.${category.image.extension}`}></source>
							<img className="flex-shrink-0 object-cover object-center mb-4 rounded-lg sm:mb-0" src={`${category.image.src}._AC_SY300_.${category.image.extension}`} alt={category.name} />
						</picture>
					</Link>
					<div className="flex-col flex-grow w-full space-x-2 md:w-1/2 sm:pl-8">
						<h3 className="text-lg font-medium title-font">
							<Link className="outline-none text-primary-300 hover:text-primary-600 focus:text-secondary-500" to={category.url}>
								<TransformText uppercaseFirstLetter text={category.name} />
							</Link>
						</h3>
						<p className="mb-4 text-xs text-textColor-300 truncate-3-lines" title={category.description}>{category.description}</p>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="flex flex-wrap py-2 bg-white rounded-lg">
			{
				categories.length ?
					(
						categories.map((category, index) => {
							return categories.length > 10 ? templateHigherTen(category, index) : templateLowerTen(category, index);
						})
					)
				: (
					<div>
						Actualmente no existe ninguna categoría
					</div>
				)
			}
		</div>
	)
}

CategoriesList.propTypes = {
	categories: PropTypes.array,
}

CategoriesList.defaultProps = {
	categories: [],
}

export default CategoriesList;
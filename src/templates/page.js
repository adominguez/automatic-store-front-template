import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import AmazonSearch from "../components/amazon-search";
import HomePage from '../components/home-page';
import CategoryPage from '../components/category-page';
import KeywordPage from '../components/keyword-page';
import '../css/index.css';

export default ({ pageContext: { page = {}, design, categories, products, tag, pluralPrincipalKeyword, singularPrincipalKeyword, genrePrincipalKeyword }, pageContext }) => {
  const { useAmazonSearch } = design;
  const { content = {}, entity } = page;

  const productsPriceValues = () => {
    const productsFiltered = []
    products.forEach(product => {
      parseFloat(product.price) > 0 && productsFiltered.push(parseFloat(product.price));
    });
    return productsFiltered;
  };

  const getMinProductsPrice = () => {
    const minProductPrice = getInitialMinProductsPrice();
    const productStringified = minProductPrice.toString();
    const productLength = productStringified.length;
    let suma = '1';
    for(var i = 0; i < productLength - 1; i++) {
      suma += 0;
    }
    return minProductPrice - parseInt(suma) < 0 ? 0 : minProductPrice - parseInt(suma);
  }

  const getMaxProductsPrice = () => {
    const maxProductPrice = getInitialMaxProductsPrice();
    const productStringified = maxProductPrice.toString();
    const productLength = productStringified.length;
    let suma = '1';
    for(var i = 0; i < productLength - 1; i++) {
      suma += 0;
    }
    return maxProductPrice + parseInt(suma);
  }

  const getInitialMinProductsPrice = () => (parseInt(Math.min(...productsPriceValues())));

  const getInitialMaxProductsPrice = () => (parseInt(Math.max(...productsPriceValues()) + 1));

  return (
    <Layout>
      <SEO title={page.title} description={page.description} />
      {/* <h1 className="page-title">{page.name.charAt(0).toUpperCase() + page.name.slice(1)}</h1> */}
      {useAmazonSearch ? <AmazonSearch
        min={getMinProductsPrice()}
        max={getMaxProductsPrice()}
        initialMin={getInitialMinProductsPrice()}
        initialMax={getInitialMaxProductsPrice()}
        tagAffiliate={tag}
        keyword={page.name} /> : null}
        {page.useHomePage ?
          (
            <HomePage categories={categories} pluralPrincipalKeyword={pluralPrincipalKeyword} singularPrincipalKeyword={singularPrincipalKeyword} products={products} genrePrincipalKeyword={genrePrincipalKeyword} tag={tag} />
          ) :
            entity === 'keywords' ? (<KeywordPage products={products} />) : (
              <>
                <CategoryPage content={content} products={products} tag={tag} categories={categories} id={page.id} />
              </>
            )
        }
    </Layout>
  )
};
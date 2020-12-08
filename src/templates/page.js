import React from 'react';
import { Link } from 'gatsby';
import Parser from 'html-react-parser';
import Layout from "../components/layout";
import SEO from "../components/seo";
import AmazonSearch from "../components/amazon-search";
// import ProductDetail from "../components/product-detail.js"
// import ProductDetailInfo from "../components/product-detail-info.js"
// import HeadingRowWithText from '../components/heading-row-with-text';
// import HeadingColWithText from '../components/heading-col-with-text';
// import HeadingRowWithLinks from '../components/heading-row-with-links';
import HomePage from '../components/home-page';
import '../css/index.css';

export default ({ pageContext: { page = {}, design, categories, products, tag, pluralPrincipalKeyword, singularPrincipalKeyword, genrePrincipalKeyword }, pageContext }) => {
  const { useAmazonSearch } = design;
  const { content: {firstContent, secondContent, thirdContent, fourthContent} = {} } = page;

  console.log(pageContext);

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
          (
          <div className="page-content">
            {/* <HeadingRowWithLinks />
            <HeadingRowWithText />
            <HeadingColWithText />
            <ProductDetailInfo />
            <ProductDetail /> */}
            <div>
              { firstContent && firstContent.content && 
                firstContent && firstContent.title && Parser(firstContent.title)
              }
              { firstContent && firstContent.content && 
                firstContent && firstContent.title && Parser(firstContent.content)
              }
            </div>
            <div>
              { secondContent && secondContent.content && 
                secondContent && secondContent.title && Parser(secondContent.title)
              }
              { secondContent && secondContent.content && 
                secondContent && secondContent.title && Parser(secondContent.content)
              }
            </div>
            <div>
              { thirdContent && thirdContent.content && 
                thirdContent && thirdContent.title && Parser(thirdContent.title)
              }
              { thirdContent && thirdContent.content && 
                thirdContent && thirdContent.title && Parser(thirdContent.content)
              }
            </div>
            <div>
              { fourthContent && fourthContent.content && 
                fourthContent && fourthContent.title && Parser(fourthContent.title)
              }
              { fourthContent && fourthContent.content && 
                fourthContent && fourthContent.title && Parser(fourthContent.content)
              }
            </div>
            <Link to="/">Go to home</Link>
          </div>)
        }
    </Layout>
  )
};
import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'gatsby';
import Parser from 'html-react-parser';
import Layout from "../components/layout";
import SEO from "../components/seo";
import AmazonSearch from "../components/amazon-search";
import {getDevice} from "../utils/utils";

export default ({ pageContext: { page = {}, colors, design, categories, products, tag }, pageContext }) => {
  const { amazonWidthValue, useAmazonSearch } = design;
  const { secondaryColor, primaryColor } = colors;
  const { content: {firstContent, secondContent, thirdContent, fourthContent} = {} } = page;

  console.log(pageContext);
  
  const [device, setDevice] = useState(getDevice());

  useLayoutEffect(() => {
    const updateSize = () => {
      const newDevice = getDevice();
      setDevice(newDevice);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

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

  const categoryItem = (item, index) => {
    const {url, name, image: { src, extension } = {}} = item;
    return (
      <Link key={index} to={url}>
        <img src={`${src}._AC_UL200_SR200,200_.${extension}`} />
        <span className="category-text-link">{name}</span>
      </Link>
  )}

  const productItem = (item, index) => {
    const {link, name, featureImage: { src, extension } = {}} = item;
    return (
      <Link key={index} to={link}>
        <img src={`${src}._AC_UL200_SR200,200_.${extension}`} />
        <span className="category-text-link">{name}</span>
      </Link>
  )}

  return (
    <Layout>
      <SEO title={page.title} description={page.description} />
      <h1 className="page-title">{page.name.charAt(0).toUpperCase() + page.name.slice(1)}</h1>
      {useAmazonSearch ? <AmazonSearch
        min={getMinProductsPrice()}
        max={getMaxProductsPrice()}
        initialMin={getInitialMinProductsPrice()}
        initialMax={getInitialMaxProductsPrice()}
        tagAffiliate={tag}
        device={device} secondaryColor={secondaryColor} primaryColor={primaryColor} width={amazonWidthValue} keyword={page.name} /> : null}
      <div className="page-content">
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
        <div className="categories-grid-container">
          {products.length ? (
            products.map((item, index) => (productItem(item, index)))
          ) : null}
        </div>
      </div>
      {page.useHomePage ?
      (<div className="categories-grid-container">
        {categories.length ? (
          categories.map((item, index) => (item.name !== page.name && categoryItem(item, index)))
        ) : null}
      </div>) : 
      (<Link to="/">Go to home</Link>)
      }
    </Layout>
  )
};


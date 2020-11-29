const axios = require('axios');

const opts = {
  userId: `userToReplace`,
  siteId: `siteToReplace`,
}

const get = ({query, url}) => axios.get(`http://localhost:3127/${url}/${opts.userId}/${opts.siteId}${query ? '?' + query : ''}`);

const getThirdServices = ({url, param}) => axios.get(`http://localhost:3127/${url}/${opts.userId}/${param}`);

const getDataByEntity = async ({query, url}) => {
  return await new Promise(async (resolve) => {
    const { data} = await get({query, url});
    resolve(data);
  });
}

const getThirdServicesByEntity = async ({url, param}) => {
  return await new Promise(async (resolve) => {
    const {data} = await getThirdServices({url, param})
    resolve(data);
  })
}

exports.createPages = async ({
  actions: { createPage }}) => {
  const urlSite = 'site';
  const urlTagAmazon = 'amazon-tag'
  const urlTagAnalytics = 'analytics-tag'
  const {colors, design, categories, keywords, amazon, analytics} = await getDataByEntity({url: urlSite});
  const { tag } = await getThirdServicesByEntity({url: urlTagAmazon, param: amazon });
  const { analyticId } = await getThirdServicesByEntity({url: urlTagAnalytics, param: analytics });
  const allPages = await categories.concat(keywords);
  // Create a page for each page.
  allPages.forEach(async page => {
    const { relatedProductsAsin } = page;
    let products = [];
    if(relatedProductsAsin) {
      const query = `products=${relatedProductsAsin.join(',')}`;
      const url = 'products-by-asin';
      products = await getDataByEntity({url, query});
    }
    console.log(`Creating ... ${page.name}`);
    await createPage({
      path: page.useHomePage ? `/` : `/${page.url}`,
      component: require.resolve('./src/templates/page.js'),
      context: {
        page,
        colors,
        design,
        categories,
        products,
        tag,
        analyticId
      }
    });
  });
};
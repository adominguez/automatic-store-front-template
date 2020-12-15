export const typesOfDevices = {
    mobile: {
        name: 'mobile',
        maxWidth: 480
    },
    tablet: {
        name: 'tablet',
        maxWidth: 768
    },
    display: {
        name: 'display'
    }
}

const extractProductsToCompare = (products, productDataToCompare) => {
    const productsToCompare = [];
    products.forEach(product => {
        const { productData = [] } = product;
        const productDataStringified = productData.map(item => item.key).sort((a, b) => a.localeCompare(b)).toString().toLowerCase();
        if(productDataStringified === productDataToCompare) {
            productsToCompare.push(product);
        }
    });
    return productsToCompare
}

export const calculateCheaperProducts = (products = [], numberOfProducts = 4) => {
    const productsPriceTransformed = products.length && products.map(product => ({
        ...product,
        price: parseFloat(product.price.replace(' €'))
    }));
    const cheaper =  productsPriceTransformed.length && productsPriceTransformed.sort((a, b) => a.price - b.price).filter(item => item.price > 0)
    return cheaper.map(product => ({
        ...product,
        price: `${product.price} €`
    })).slice(0, numberOfProducts <= cheaper.length ? numberOfProducts : cheaper.length);
}

export const comparisonProducts = (products) => {
    const productsWithData = products.filter(product => product.productData);
    let productsGrouped = {}
    productsWithData.forEach(product => {
        productsGrouped = {
            ...productsGrouped,
            [product.productData.length]: {
                ...productsGrouped[product.productData.length],
                [product.asin]: {
                    ...product
                }
            }
        }
    });
    const productsGroupedConvertedToArray = Object.values(productsGrouped)
    const asinConvertedToArray = Object.values(productsGroupedConvertedToArray).map(item => Object.values(item))
    const possibleValues = asinConvertedToArray.filter(item => item.length > 1);
    const productsData = {};
    possibleValues.forEach((item, index) => {
        const productDataStringified = [];
        item.map(data => data.productData).forEach(product => {
            productDataStringified.push(product.map(item => item.key).sort((a, b) => a.localeCompare(b)).toString().toLowerCase());
        });
        productsData[index] = productDataStringified;
    })
    const items = {};
    Object.values(productsData).forEach((item, ind) => {
        const productsList = [];
        const newFilter = item;
        newFilter.forEach((key, index) => {
            const dataFiltered = newFilter.filter(newItem => newItem === key)
            if(dataFiltered.length > 1 && !productsList.includes(key)) {
                productsList.push(key);
            }
        });
        if(productsList.length) {
            items[ind] = productsList;
        }
    });
    return Object.values(items).length ? extractProductsToCompare(products, Object.values(items)[0][0]) : [];
}

export const getFeaturedProduct = (products) => {
    return products[1];
}

export const getDevice = () => {
    var device = typesOfDevices.display.name;
    if (typeof window !== `undefined`) {
        const width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
        if(width <= typesOfDevices.mobile.maxWidth) {
            device = typesOfDevices.mobile.name;
        } else if(width > typesOfDevices.mobile.maxWidth && width < typesOfDevices.tablet.maxWidth) {
            device = typesOfDevices.tablet.name;
        } else {
            device = typesOfDevices.display.name;
        }
    }
    return device;
}

export const isMobileOrTabletDevice = (device) => {
    return device === typesOfDevices.tablet.name || device === typesOfDevices.mobile.name
}

export const logoPosition = {
    0: 'start',
    50: 'center',
    100: 'end'
}
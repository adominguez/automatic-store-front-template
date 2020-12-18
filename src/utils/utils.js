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

export const getBestProducts = (products, number = 1) => {
    return products && products.length && products.sort((a, b) => b.score - a.score).slice(0, number);
}

export const isOdd = (num) => num % 2;

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
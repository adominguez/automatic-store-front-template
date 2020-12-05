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

export const widthValue = {
    70: 60,
    80: 40,
    90: 20,
    100: 0, 
}

export const logoPosition = {
    0: 'start',
    50: 'center',
    100: 'end'
}
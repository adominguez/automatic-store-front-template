import PropTypes from "prop-types";
import React, { useLayoutEffect }  from "react";
import $ from 'jquery';
// import 'jquery-ui/ui/widgets/slider';
// import 'jquery-ui/themes/base/theme.css';
// import 'jquery-ui/themes/base/slider.css';
import {isMobileOrTabletDevice, typesOfDevices} from "../utils/utils";

const AmazonSearch = ({width, device, secondaryColor, keyword, buttonText, searchBoxImage, amazonSearchText, brands, min, max, showBrands, initialMin, initialMax, currency, tagAffiliate, country}) => {

    const goToAmazon = () => {
        const firstPrice = `p_36%3A${$("#slider-range").slider("values", 0)}00-`;
        const secondPrice = `${$("#slider-range").slider("values", 1)}00`;
        let selectedBrand = '';
        if(isBrands()) {
          selectedBrand = `p_89%3A${document.querySelector('#brandsList').value}%2C`;
        }
        const url = `https://amazon.${country.toLowerCase()}/s?k=${keyword}&rh=${selectedBrand}${firstPrice}${secondPrice}&linkCode=ll2&tag=${tagAffiliate}`
        window.open(url, '_blank');
    }

    useLayoutEffect(() => {
        $("#amount").val(initialMin + currency + " - " + initialMax + currency);
        if (typeof navigator !== `undefined`) {
            require("jquery-ui/ui/widgets/slider")
            require("jquery-ui/themes/base/theme.css")
            require("jquery-ui/themes/base/slider.css")
          }
        $('#slider-range').slider({
            range: true,
            min: min,
            max: max,
            values: [initialMin, initialMax],
            slide: function (event, ui) {
              $("#amount").val(ui.values[0] + currency + " - " + ui.values[1] + currency);
            }
        });
    }, []);

    const isBrands = () => {
        return !!brands.length && showBrands;
    }

    return (
        <div className="amazonsearch" style={{
            backgroundColor: secondaryColor,
            width: isMobileOrTabletDevice(device) ? '100%' : `${width}%`
        }}>
            {
                amazonSearchText ?
                <p>{amazonSearchText}</p>
            :
                <>
                    <p className="keyword">{keyword}</p>
                    <p>Encuentra los mejores productos</p>
                </>
            }
            {
                isBrands() &&
                <select id="brandsList" name="marcas">
                {
                    brands.map((item, key) => <option key={key} value={item}>{item}</option>)
                }
                </select>
            }
            <input type="text" id="amount" readOnly className="input-prices" disabled />
            <div id="slider-range" className="slider-range" />
            <button className="amazon-slider-button" onClick={goToAmazon}>{buttonText}</button>
        </div>
)}

AmazonSearch.propTypes = {
    width: PropTypes.string,
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    device: PropTypes.string,
    keyword: PropTypes.string,
    buttonText: PropTypes.string,
    amazonSearchText: PropTypes.string,
    brands: PropTypes.array,
    min: PropTypes.number,
    max: PropTypes.number,
    showBrands: PropTypes.bool,
    initialMin: PropTypes.number,
    initialMax: PropTypes.number,
    currency: PropTypes.string,
    tagAffiliate: PropTypes.string,
    country: PropTypes.string
}

AmazonSearch.defaultProps = {
    width: '80',
    primaryColor: '#0097a7',
    secondaryColor: '#424242',
    device: typesOfDevices.display.name,
    buttonText: 'Buscar',
    brands:[],
    min:0,
    max:1000,
    initialMin: 50,
    initialMax: 900,
    currency: '€',
    country: 'es'
}

export default AmazonSearch

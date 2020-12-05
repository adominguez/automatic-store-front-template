import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { widthValue, logoPosition } from "../utils/utils.js";

const Header = ({ siteTitle, logoPositionValue, useHeaderWhite, templateWidthValue }) => {

  return (
    <header
      className={`bg-primary-500`}
    >
      <div className={`md:justify-${logoPosition[logoPositionValue]} justify-center flex p-4 px-${widthValue[templateWidthValue]} pb-4 shadow-lg`}>
          <Link
            to="/"
            className={`leading-none text-2xl px-3`}
          >
            
            <span className={`sm:block sm:text-center no-underline ${useHeaderWhite ? 'text-primary-500' : 'text-white'} hover:${useHeaderWhite ? 'text-primary-700' : 'text-primary-900'}`}>
              {siteTitle}
            </span>
          </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  logoPositionValue: PropTypes.string,
  useHeaderWhite: PropTypes.bool,
  templateWidthValue: PropTypes.string,
  device: PropTypes.string
}

Header.defaultProps = {
  siteTitle: `Default Title`,
  logoPositionValue: '50',
  useHeaderWhite: false,
  templateWidthValue: '80',
}

export default Header

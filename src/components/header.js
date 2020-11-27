import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { isMobileOrTabletDevice, typesOfDevices } from '../utils/utils';

const whiteColor = '#fff';

const logoPosition = {
  0: 'flex-start',
  50: 'center',
  100: 'flex-end'
}

const Header = ({ siteTitle, logoPositionValue, useHeaderWhite, color, templateWidthValue, device }) => {
  return (
  <>
  <header
    className="header"
    style={{
      backgroundColor: useHeaderWhite ? whiteColor : color,
    }}
  >
    <div className="header-container-logo" style={{
      width: isMobileOrTabletDevice(device) ? `${100}%` : `${templateWidthValue}%`,
      justifyContent: logoPosition[logoPositionValue]
    }}>
        <Link
          to="/"
          style={{
            color: useHeaderWhite ? color : whiteColor,
            textDecoration: `none`,
          }}
        >
        <span>
          {siteTitle}
        </span>
      </Link>
    </div>
  </header>
  </>
)}

Header.propTypes = {
  siteTitle: PropTypes.string, 
  logoPositionValue: PropTypes.string,
  useHeaderWhite: PropTypes.bool,
  color: PropTypes.string,
  templateWidthValue: PropTypes.string,
  device: PropTypes.string
}

Header.defaultProps = {
  siteTitle: `Default Title`,
  logoPositionValue: '50',
  useHeaderWhite: false,
  color: '#0097a7',
  templateWidthValue: '80',
  device: typesOfDevices.display.name
}

export default Header

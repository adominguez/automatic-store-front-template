import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import {isMobileOrTabletDevice, typesOfDevices} from "../utils/utils";
import Illustration from '../images/menu.inline.svg'

const Nav = ({useMenuWidth, templateWidthValue, device, color}) => {
    const [menuOpened, setMenuOpened] = useState(false);

    const toggleMenu = () => {
        setMenuOpened(!menuOpened)
    }
    return (
        <nav style={{
            backgroundColor: color,
            width: !useMenuWidth || isMobileOrTabletDevice(device) ? `100%` : `${templateWidthValue}%`,
        }}>
            <button className="responsive-menu" onClick={toggleMenu}><Illustration className="icon" /></button>
            <ul className={`menu ${isMobileOrTabletDevice(device) ? menuOpened ? 'opened' : null : null}`} style={{
                width: useMenuWidth || isMobileOrTabletDevice(device) ? `100%` : `${templateWidthValue}%`
            }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category-2">category 2</Link></li>
                <li><Link to="/post-1">Post 1</Link></li>
                <li><Link to="/post-2">Post 2</Link></li>
            </ul>
        </nav>
    )
}

Nav.propTypes = {
    templateWidthValue: PropTypes.string,
    device: PropTypes.string,
    useMenuWidth: PropTypes.bool,
    color: PropTypes.string
}

Nav.defaultProps = {
    templateWidthValue: '80',
    device: typesOfDevices.display.name,
    useMenuWidth: true,
    color: '#424242'
}

export default Nav

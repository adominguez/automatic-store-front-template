import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState, useLayoutEffect } from "react";
import { widthValue } from "../utils/utils.js";
import SearchInput from "../components/search-input.js"

const Nav = ({templateWidthValue, color}) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [openResults, setOpenResults] = useState(false);

  useLayoutEffect(() => {
    if(!menuOpened) {
      setOpenResults(false);
    }
  }) 

  const toggleMenu = () => {
      setMenuOpened(!menuOpened);
  }
  
  return (
    <nav className={`bg-${color}-400 z-40 md:z-20`}>
      <div className={`flex justify-center flex-col-reverse absolute bg-${color}-400 w-screen px-0 shadow-lg z-10 md:justify-start md:px-${widthValue[templateWidthValue]} md:relative`}>
        <ul className={`${menuOpened ? 'flex flex-col' : 'hidden'} md:flex md:flex-row`}>
          <li className="flex justify-center"><Link to="/" className={`p-3 flex flex-1 justify-center hover:bg-${color}-600 text-center cursor-pointer`}>home</Link></li>
          <li className="flex justify-center"><Link to="#" className={`p-3 flex flex-1 justify-center hover:bg-${color}-600 text-center cursor-pointer`}>Url 1</Link></li>
        </ul>
        <div className={`flex justify-center text-gray-600 px-4 py-2 ${menuOpened ? 'flex flex-col' : 'hidden'}`}>
          <SearchInput />
        </div>
        <button className="flex justify-center p-3 md:hidden" onClick={toggleMenu}>
          {
            menuOpened ?
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            :
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
          }
        </button>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  templateWidthValue: PropTypes.string,
  color: PropTypes.string
}

Nav.defaultProps = {
  templateWidthValue: '80',
  color: '#424242'
}

export default Nav;
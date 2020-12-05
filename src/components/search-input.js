import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, {useState} from "react";
import { itemsToSearch } from "../utils/searcher.js";

const SearchInput = () => {
  const [keyword, setKeyword] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  const filterByKeyword = (event) => {
    const { currentTarget: {value}, keyCode } = event;
    const filteredResults = itemsToSearch.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    setKeyword(value);
    setFilteredResults(filteredResults);
    if(keyCode === 40 && filteredResults.length && keyword.length) {
      const nextSibling = event.currentTarget.nextElementSibling.children[0].children[0].children[0];
      nextSibling.focus()
    }
  }

  const arrowPressKey = (event) => {
    const {keyCode} = event;
    if(keyCode === 40) {
      const nextSibling = event.currentTarget.parentElement.nextElementSibling;
      nextSibling && nextSibling.children.length && nextSibling.children[0].focus()
    }
    if(keyCode === 38) {
      const prevSibling = event.currentTarget.parentElement.previousElementSibling;
      const input = event.currentTarget.parentElement.parentElement.parentElement.previousElementSibling;
      prevSibling && prevSibling.children.length ? prevSibling.children[0].focus() :  input.focus();
    }
  }

  return (
    <div className="relative z-30 flex flex-col flex-1 mx-3">
      <input type="search" name="search" onKeyUp={filterByKeyword} onChange={filterByKeyword} placeholder="Buscar en el sitio..." autoComplete="off" className={`flex-1 px-5 py-3 text-sm bg-white border-2 border-gray-400 border-solid rounded-md border-b-2 focus:outline-none`}/>
        {
          keyword.length ?
            <div className="absolute z-10 flex flex-col w-full mt-10 overflow-y-auto bg-white border-2 border-t-0 border-gray-400 border-solid rounded-b-md max-h-60">
              {
                filteredResults.length ?
                  <ul>
                    {filteredResults.map((item, index) => (
                      <li key={index} className="border-t-2 border-gray-200 border-solid">
                        <Link onKeyUp={arrowPressKey} to={`/${item.url}`} className="flex p-3 hover:bg-gray-200 focus:bg-gray-200">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                :
                  <div className="flex-1 p-3 text-center text-gray-400">
                    No hay resultados para esta consulta
                  </div>
              }
            </div>
          : null
        }
    </div>
  )
}

SearchInput.propTypes = {
}

export default SearchInput;
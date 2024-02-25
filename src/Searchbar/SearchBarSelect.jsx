import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { searchProduct } from "./SearchApi";
import Select from "react-select";
let timer;
const SearchBarSelect = () => {
  const [suggestions, setSuggestions] = useState([]);
  const handleSearch = (searchQuery) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      searchProduct(searchQuery)
        .then((res) => setSuggestions(res?.data?.products))
        .catch((err) => console.log(err));
    }, 1000);
  };
  console.log(suggestions, "sugg");
  return (
    <div>
      <div className="searchbar">
        <div className="input">
          <AsyncSelect
            cacheOptions
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            options={suggestions}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBarSelect;

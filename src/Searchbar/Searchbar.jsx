import React, { useEffect, useState } from "react";
import { searchProduct } from "./SearchApi";
import Select from "react-select";
import CommonButton from "../Components/CommonButton";
import { FaEdit } from "react-icons/fa";

let timer;

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);
  //second way
  const [timer, setTimer] = useState();
  const edit = () => {
    console.log("edit");
  };
  const add = () => {
    console.log("add");
  };
  // const handleSearch = (searchText) => {
  // if (timer) {
  // clearTimeout(timer);
  // }
  // timer = setTimeout(() => {
  // searchProduct(searchText)
  // .then((res) => {
  // console.log(res?.data?.products, "response");
  // setData(res?.data?.products);
  // })
  // .catch((err) => {
  // console.log(err);
  // });
  // }, 1000);
  // };

  // second way
  const handleSearch = (searchText) => {
    clearTimeout(timer);
    const timerId = setTimeout(() => {
      searchProduct(searchText)
        .then((res) => {
          console.log(res?.data?.products, "response");
          setData(res?.data?.products);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
    setTimer(timerId);
  };

  return (
    <div className="searchBarPage">
      <div className="searchbar">
        <div className="input">
          <form action="" className="search-bar">
            <input
              type="search"
              name="search"
              autoComplete="off"
              pattern=".*\S.*"
              required
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
            <button className="search-btn" type="submit">
              <span>Search</span>
            </button>
          </form>
        </div>
      </div>
      <CommonButton text={"Edit"} onClickCallback={edit}>
        <FaEdit />
      </CommonButton>
      <CommonButton text={"Add"} onClickCallback={add} />
    </div>
  );
};

export default Searchbar;

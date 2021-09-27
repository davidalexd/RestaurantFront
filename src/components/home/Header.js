import React, { useState, useEffect, useReducer } from "react";
import { FilterCategory } from "./FilterCategory";
import { TYPES } from "../../acctions/shoppingAction";
import { helpHttp } from "../helpers/helpHttp";
import {
  shoppingReducer,
  shoppingInitialState,
} from "../../reducers/shoppingReducer";

export const Header = ({ filtCategory,removeCategory }) => {
  let url = "https://restaurantrestapi.herokuapp.com/api/categories";
  useEffect(() => {
    //setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (res.length > 0) {
          dispatch({ type: TYPES.READ_ALL_CATEGORY, payload: res });
          //setError(null);
        } else {
          dispatch({ type: TYPES.NO_DATA });
          //setError(res);
        }
        //setLoading(false);
      });
  }, [url]);

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { category } = state;
  return (
    <header className="header">
      <div className="header-info">
        <div className="page-info">
          <h2 className="page-name">{sessionStorage.getItem("username")}</h2>
          <p className="date">Tuesday, 2 Feb 2021</p>
        </div>
        <div className="input-container input-center ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.3415 19.2089C20.7052 19.2089 21 19.498 21 19.8545C21 20.1813 20.7523 20.4514 20.4308 20.4941L20.3415 20.5H13.471C13.1073 20.5 12.8125 20.211 12.8125 19.8545C12.8125 19.5277 13.0602 19.2576 13.3816 19.2148L13.471 19.2089H20.3415ZM13.6592 4.41662C14.906 3.19446 16.9283 3.19446 18.175 4.41662L19.4694 5.6854C20.7162 6.90755 20.7162 8.88985 19.4694 10.112L9.74061 19.6486C9.1843 20.1939 8.43007 20.4999 7.64282 20.4999H3.65854C3.28841 20.4999 2.99098 20.201 3.00021 19.8383L3.10043 15.8975C3.12036 15.1526 3.43127 14.4425 3.96867 13.9157L13.6592 4.41662ZM12.906 6.979L4.89998 14.8287C4.60126 15.1215 4.42814 15.5169 4.41707 15.9305L4.33345 19.2084L7.64282 19.2088C8.03222 19.2088 8.4067 19.0745 8.70228 18.8317L8.8093 18.7357L16.855 10.849L12.906 6.979ZM17.2437 5.32953C16.5113 4.61156 15.323 4.61156 14.5905 5.32953L13.838 6.066L17.786 9.936L18.5381 9.19909C19.2298 8.52101 19.2683 7.44433 18.6534 6.72195L18.5381 6.59831L17.2437 5.32953Z"
              fill="#3B5162"
            />
          </svg>
          <input
            type="text"
            placeholder="Search for food, coffe, etc"
            className="input"
          />
        </div>
      </div>
      <div className="filter">
        <ul className="filter-list">
          <li class="filter-item" onClick={()=>removeCategory(null)}>
            <span>All</span>
          </li>
          {category &&
            category.map((item, index) => (
              <FilterCategory
                key={index}
                data={item}
                filtCategory={filtCategory}
              />
            ))}
        </ul>
      </div>
    </header>
  );
};

import { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import { categories } from "../constants/list";
import { createQueryObject } from "../helpers/helper";

import styles from "./SideBar.module.css";

const SideBar = ({ query, setQuery }) => {
  const [show, setShow] = useState(false);

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };

  const showHandler = () => {
    setShow(() => !show);
  };

  return (
    <>
      <div className={styles.sideBar}>
        <div>
          <FaListUl />
          <p>Categories</p>
        </div>
        <ul onClick={categoryHandler}>
          {categories.map((category) => (
            <li
              key={category.id}
              className={
                category.type.toLowerCase() === query.category
                  ? styles.selected
                  : null
              }
            >
              {category.type}
            </li>
          ))}
        </ul>
      </div>
      <ResponsiveSidebar
        categoryHandler={categoryHandler}
        showHandler={showHandler}
        show={show}
        query={query}
      />
    </>
  );
};

export default SideBar;

const ResponsiveSidebar = ({ categoryHandler, showHandler, show, query }) => {
  return (
    <div className={styles.responsiveSidebar}>
      <div onClick={showHandler} className={styles.sidebarButton}>
        <p>Categories</p>
        <IoIosArrowDown />
      </div>
      {show && (
        <ul onClick={categoryHandler}>
          {categories.map((category) => (
            <li
              key={category.id}
              className={
                category.type.toLowerCase() === query.category
                  ? styles.selected
                  : null
              }
            >
              {category.type}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

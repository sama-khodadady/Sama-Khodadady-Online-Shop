import { Link } from "react-router-dom";

import styles from "./404.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <img src="/404.svg" alt="not-found" />
      <Link to="/products">Go Back Home</Link>
    </div>
  );
};

export default PageNotFound;

import { RotatingLines } from "react-loader-spinner";

import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <RotatingLines
        width="40px"
        height="40px"
        strokeWidth="3"
        strokeColor="#fe5d42"
      />
    </div>
  );
};

export default Loader;

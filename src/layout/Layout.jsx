import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

import styles from "./Layout.module.css";

function Layout({ children }) {
  const state = useSelector((store) => store.cart);

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Shop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        Developed By
        <a href="https://github.com/sama-khodadady">Sama-Khodadady</a>
        &#128150;
      </footer>
    </>
  );
}

export default Layout;

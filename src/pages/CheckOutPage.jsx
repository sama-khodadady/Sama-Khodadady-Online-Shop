import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";

import image from "../assets/Group.png";
import styles from "./CheckOutPage.module.css";

const CheckOutPage = () => {
  const state = useSelector((store) => store.cart);

  return (
    <div className={styles.container}>
      {state.itemsCounter ? (
        <>
          <BasketSidebar state={state} />
          <div className={styles.products}>
            {state.selectedItems.map((product) => (
              <BasketCard key={product.id} data={product} />
            ))}
          </div>
        </>
      ) : (
        <div className={styles.emptyCart}>
          <img src={image} alt="empty cart" />
          <h2>Cart is empty !!</h2>
          <Link to="/products">Go Home Page</Link>
        </div>
      )}
    </div>
  );
};

export default CheckOutPage;

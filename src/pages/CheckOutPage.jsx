// import { useCart } from "../context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";

import image from "../assets/Group.png";
import styles from "./CheckOutPage.module.css";

const CheckOutPage = () => {
  // const [state, dispatch] = useCart();
  const state = useSelector((store) => store.cart);
  // const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter) {
    return (
      <div className={styles.emptyCart}>
        <img src={image} alt="empty cart" />
        <h2>Cart is empty !!</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSidebar state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default CheckOutPage;

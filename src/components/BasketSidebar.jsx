import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";

import styles from "./BasketSidebar.module.css";
import { useDispatch } from "react-redux";
import { checkout as checkOut } from "../features/cart/cartSlice";

function BasketSidebar({ state }) {
  const { total, itemsCounter, checkout } = state;
  const dispatch = useDispatch();

  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total:</p>
        <span>{total} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!checkout && "Pending..."}</span>
      </div>
      <button onClick={() => dispatch(checkOut())}>Checkout</button>
    </div>
  );
}

export default BasketSidebar;

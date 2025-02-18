import React, { useState } from "react";
import styles from "./CartItem.module.css";

// Redux
import { connect } from 'react-redux';
import { adjustQty, removeFromCart } from "../../../redux/shopping/shopping-actions";


const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
    adjustQty(item.id, e.target.value)
  }


  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>$ {item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className={styles.actions__deleteItemBtn}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value))
  }
}

export default connect(null, mapDispatchToProps)(CartItem);

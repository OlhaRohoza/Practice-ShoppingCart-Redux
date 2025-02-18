import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

// Redux
import { connect } from 'react-redux';

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState();
  const [totalItems, setTotalItems] = useState();

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach(item => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);

  }, [cart, totalPrice, totalItems, setTotalItems, setTotalPrice])

  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Cart);

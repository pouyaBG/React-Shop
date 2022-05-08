/** @format */

import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";
import { useEffect } from "react";
const Product = ({ onChange, onDecrement, onIncrement, product, onDelete }) => {
  return (
    <div className={styles.product}>
      <p>prodct name : {product.title} course</p>
      <p>prodct price : {product.price} </p>
      <span className={styles.value}>{product.quantity}</span>
      {/* <input
        className={styles.input}
        type="text"
        onChange={onChange}
        value={product.title}
      /> */}

      <button
        onClick={onDecrement}
        className={`${styles.button} ${
          product.quantity === 1 && styles.remove
        }`}
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>

      <button
        onClick={onIncrement}
        className={`${styles.button} ${styles.inc}`}
      >
        +
      </button>
      <button onClick={onDelete} className={styles.button}>
        delete
      </button>
    </div>
  );
};

export default Product;

import React from "react";
import styles from "./Transaction.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteTransaction, update } from "../../actions/action";

export default function Transaction({ title, amount, id }) {
  const dispatch = useDispatch();
  const color = amount > 0 ? "green" : "red";
  const style = {
    borderRight: `5px solid ${color}`
  };

  const onClick = () => {
    deleteTransaction(dispatch, id).then(() => {
      update(dispatch);
    });
  };

  return (
    <div style={style} className={styles.Transaction}>
      <div className={styles.title}>{title}</div>
      <div className={styles.right}>
        <div className={styles.amount}>${amount}</div>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faTrash} color="black" onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

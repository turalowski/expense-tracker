import React, { useState } from "react";
import styles from "./NewTransaction.module.css";

// Components
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

// Validation
import Transaction from "../../validators/Transaction";

export default function NewTransaction({ addTransaction }) {
  const [transaction, setTransaction] = useState({
    title: "",
    amount: 0
  });
  const [errors, setErrors] = useState({});

  const onChange = e => {
    e.persist();
    setTransaction(prevTransaction => ({
      ...prevTransaction,
      [e.target.name]: e.target.value
    }));
  };

  const handleClick = e => {
    e.preventDefault();
    const { errors, isValid } = Transaction(transaction);
    if (!isValid) {
      setErrors(errors);
      return;
    }
    addTransaction(transaction);
    setTransaction({
      title: "",
      amount: 0
    });
  };
  return (
    <div className={styles.NewTransaction}>
      <div className={styles.header}>Add a new transaction</div>

      <hr />
      <span className={styles.note}>negative - expense, positive - income</span>
      <div>
        <CustomInput
          label="Payment"
          name="title"
          onChange={onChange}
          value={transaction.title}
        />
        <span className={styles.error}>{errors.title ? errors.title : ""}</span>
      </div>
      <div>
        <CustomInput
          label="Amount"
          name="amount"
          onChange={onChange}
          value={transaction.amount}
        />
        <span className={styles.error}>
          {errors.amount ? errors.amount : ""}
        </span>
      </div>
      <CustomButton onClick={handleClick} />
    </div>
  );
}

import React from 'react'
import styles from './TransactionContainer.module.css'
import Transaction from '../Transaction/Transaction'
import { useSelector, useDispatch } from 'react-redux';

export default function TransactionContainer() {

    const {transactions} = useSelector(state => state);
    return (
        <div className={styles.TransactionContainer}>
            <div className={styles.header}>History</div>
            <hr/>
            {
                transactions.map( transaction => (
                <Transaction key={transaction.id}  {...transaction} />
            ))
            }
        </div>
    )
}
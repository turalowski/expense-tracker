import React from 'react'
import styles from './TransactionContainer.module.css'
import Transaction from '../Transaction/Transaction'

export default function TransactionContainer({transactions}) {
    return (
        <div className={styles.TransactionContainer}>
            <div className={styles.header}>History</div>
            <hr/>
            {
                transactions.map( transaction => (
                <Transaction id={Math.random()}  {...transaction} />
            ))
            }
        </div>
    )
}

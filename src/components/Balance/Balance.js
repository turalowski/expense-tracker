import React from 'react'
import styles from './Balance.module.css'

export default function Balance({balance}) {
    return (
        <div className={styles.Balance}>
            <span className={styles.description}>Your Balance</span>
            <span className={styles.amount}>${balance}</span>
        </div>
    )
}

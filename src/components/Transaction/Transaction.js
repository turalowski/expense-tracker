import React from 'react'
import styles from './Transaction.module.css'
export default function Transaction({title, amount}) {
    const color = amount > 0 ? 'green' : 'red';
    const style = {
        borderRight: `5px solid ${color}`
    }
    return (
        <div style={style} className={styles.Transaction}>
            <div className={styles.title}>{title}</div>
            <div className={styles.amount}>${amount}</div>
        </div>
    )
}

import React from 'react'
import styles from './Total.module.css'

export default function Total({color, amount, label}) {
    const style = {
        color: color
    }
    return (
        <div className={styles.Total}>
            <span className={styles.header}>{label}</span>
            <span className={styles.amount} style={style}>${amount}</span>
        </div>
    )
}

import React from 'react'
import { useSelector} from 'react-redux';
import styles from './Balance.module.css'

export default function Balance() {
    const total = useSelector(state => state.total);
    return (
        <div className={styles.Balance}>
            <span className={styles.description}>Your Balance</span>
            <span className={styles.amount}>${total}</span>
        </div>
    )
}

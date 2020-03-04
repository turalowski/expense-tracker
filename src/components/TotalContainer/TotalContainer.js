import React from 'react'
import styles from './TotalContainer.module.css'

// Components
import Total from '../Total/Total'

export default function TotalContainer({income,expense}) {
    return (
        <div className={styles.TotalContainer}>
            <Total color="red" amount={expense} label="Expense"/>
            <span className={styles.border}></span>
            <Total color="green" amount={income} label="Income"/>
        </div>
    )
}

import React from 'react'
import styles from './TotalContainer.module.css'
import { useSelector, useDispatch } from 'react-redux';

// Components
import Total from '../Total/Total'

export default function TotalContainer() {
    const {income, expense} = useSelector(state => state)
    return (
        <div className={styles.TotalContainer}>
            <Total color="red" amount={expense} label="Expense"/>
            <span className={styles.border}></span>
            <Total color="green" amount={income} label="Income"/>
        </div>
    )
}

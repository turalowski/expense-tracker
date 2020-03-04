import React from 'react'
import styles from './CustomButton.module.css'

export default function CustomButton({onClick}) {
    return (
        <div className={styles.CustomButton}>
            <button onClick={onClick}>Add Transaction</button>
        </div>
    )
}

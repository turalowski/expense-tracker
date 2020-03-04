import React from 'react'
import styles from './CustomInput.module.css'
export default function CustomInput({name, value, label, onChange}) {
    return (
        <div className={styles.CustomInput}>
            <input type="text" name={name} value={value} onChange={onChange} required/>
            <label>{label}</label>
        </div>
    )
}

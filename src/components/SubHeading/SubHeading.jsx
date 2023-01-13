import React from 'react'
import styles from "./SubHeading.module.css"

const SubHeading = ({ text }) => {
    return (
        <div>
            <div className={styles.container}>
                <h2 className={styles.text}>{text}</h2>
            </div>
        </div>
    )
}

export default SubHeading
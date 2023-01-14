import React from 'react'
import styles from "./Heading.module.css";

const Heading = ({ text }) => {
    return (
        <div className={styles.heading}>
            <div className={styles.zoomWrapper}>
                <h1 className={styles.title}>{text}</h1>
            </div>
        </div>
    )
}

export default Heading
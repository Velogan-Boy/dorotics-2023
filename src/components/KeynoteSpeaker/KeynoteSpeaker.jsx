import React from "react"

import styles from "./KeynoteSpeaker.module.css"


const KeynoteSpeaker = (props) => {

    return (
          <div className={styles.card}>
            <img src={props.detail.photo} className={styles.image} alt="Speaker"/>
            <div className={styles.title}>{props.detail.speaker}</div>
            <div className={styles.description}>{props.detail.description}</div>
            <div className={styles.institute}>{props.detail.organisation } </div>
          </div>
    )
}


export default KeynoteSpeaker
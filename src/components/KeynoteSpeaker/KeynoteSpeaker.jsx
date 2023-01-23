import React from "react"

import pic from './pic.jpg'

import styles from "./KeynoteSpeaker.module.css"

const KeynoteSpeaker = () => {

    return (
         <div className={styles.card}>
          <img src={pic} className={styles.image} alt="Speaker Image"/> 
          <div className={styles.title}>NAME</div>
          <div className={styles.institute}> INSTITUTE </div>
          </div>
    )
}


export default KeynoteSpeaker
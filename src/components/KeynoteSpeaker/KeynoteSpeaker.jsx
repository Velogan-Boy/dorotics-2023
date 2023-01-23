import React from "react"

import pic from './pic.jpg'

import styles from "./KeynoteSpeaker.module.css"

const KeynoteSpeaker = () => {

    return (
         <>
          <img src={pic} className={styles.image} alt="Moodu"/> 
          <div>TITLE : NAME</div>
          <div> INSTITUTE </div>
        </>
    )
}

export default KeynoteSpeaker
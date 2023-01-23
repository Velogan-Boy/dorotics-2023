import React from "react"

import Heading from "../../components/UI/Heading/Heading"
import SubHeading from "../../components/UI/SubHeading/SubHeading"

import styles from "./Schedule.module.css"

const Schedule = () => {
    return (
        <>
          <Heading text="Schedule" />
          <div className={styles.wrapper}>
            {/* <SubHeading text="Schedule" />  */}
            <div className={styles.update}> Will be updated shortly !</div>
         </div>
        </>
    )
}

export default Schedule
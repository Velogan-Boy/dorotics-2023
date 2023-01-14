import React from "react"
import Heading from "../../components/UI/Heading/Heading"
import SubHeading from "../../components/UI/SubHeading/SubHeading"
import DateTable from "../../components/DateTable/DateTable"
import styles from "./Dates.module.css"

const Dates = () => {
    return (
        <>
            <Heading text="Dates" />
            <div className={styles.wrapper}>
                <SubHeading text="Important Dates" />
                <DateTable />
            </div>
        </>
    )
}

export default Dates
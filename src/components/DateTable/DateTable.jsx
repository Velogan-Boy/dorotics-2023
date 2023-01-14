import React from "react"

import { dates } from "../../data.js"

import styles from "./DateTable.module.css"

const TableItems = (prop) => {

    return (
        <>
            <tr className={styles.content}>
                <td className={styles.events}>{prop.row.event}</td>
                <td className={styles.date}>{prop.row.date}</td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <hr className={`${styles.line}` + (prop.index == dates.length - 1 ? ` ${styles.lastline}` : '')}></hr>
                </td>
            </tr>
        </>
    )
}

const DateTable = () => {

    return (
        <table className={styles.table}>
            <tr className={styles.header}>
                <th className={styles.header_events}>EVENTS</th>
                <th className={styles.header_dates}>DATES</th>
            </tr>
            {dates.map((date, index) => {
                return (
                    <TableItems row={date} index={index} />
                )
            })}
        </table>
    )
}

export default DateTable
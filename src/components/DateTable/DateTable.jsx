import React from "react"

import { dates } from "../../data.js"

import styles from "./DateTable.module.css"

const TableItems = (prop) => {

    return (
        <>
            <tr className={styles.content}>
                <td className={styles.events}>{prop.row.event}</td>
                <td className={styles.date}>
                    {prop.row.date[0]}
                    <sup>{prop.row.date[1]}</sup>
                    {prop.row.date[2]}
                </td>
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
            <thead>

                <tr className={styles.header}>
                    <th className={styles.header_events}>EVENTS</th>
                    <th className={styles.header_dates}>DATES</th>
                </tr>
            </thead>
            <tbody>
                {dates.map((date, index) => {
                    return (
                        <TableItems row={date} key={index} index={index} />
                    )
                })}
            </tbody>
        </table>
    )
}

export default DateTable
import React from "react"
import { HiArrowRight } from 'react-icons/hi'
import { register_details } from "../../data";
import styles from './RegisterTable.module.css';

const TableItems = (prop) => {

    return (
        <>
            <tr className={styles.content}>
                <td className={styles.category}>
                    {prop.row.category}
                </td>
                <td className={styles.presentation}>
                    {prop.row.presentation}
                </td>
                <td className={styles.participation}>
                    {prop.row.participation}
                    <a href={prop.row.link} className={styles.button_mobile_wrapper}>
                        <HiArrowRight className={styles.button_mobile} />
                    </a>
                </td>
                <td>
                    <a href={prop.row.link}>
                        <button className={styles.button}>
                            {prop.row.link_status}
                        </button>
                    </a>
                </td>
            </tr>
            <tr>
                <td colSpan={4}>
                    <hr className={`${styles.line}` + (prop.index == register_details.length - 1 ? ` ${styles.lastline}` : '')}></hr>
                </td>
            </tr>
        </>
    )
}

const RegisterTable = () => {

    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.header}>
                    <th>
                        CATEGORY
                    </th>
                    <th>
                        PRESENTATION
                    </th>
                    <th>
                        PARTICIPATION
                    </th>
                    <th>
                        LINK
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    register_details.map((detail, index) => {
                        return (
                            <TableItems row={detail} key={index} index={index} />
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default RegisterTable;
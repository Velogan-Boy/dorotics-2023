import React from "react"
// import { HiArrowRight } from 'react-icons/hi'
import { register_details } from "../../data";
import styles from './RegisterTable.module.css';

const TableItems = (prop) => {

    return (
        <>
            <tr className={styles.content}>
                <td className={styles.category}>
                    {prop.row.category}
                </td>
                {
                    prop.type !== "mobile2" && <td>
                        {prop.row.presentation}
                    </td>
                }
                {
                    prop.type !== "mobile2" && <td>
                        {prop.row.coAuthor}
                    </td>
                }
                {
                    prop.type !== "mobile1" && <td>
                        {prop.row.participation}
                    </td>
                }
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
        <>
            <table className={styles.table + " " + styles.desktop}>
                <thead className={styles.head}>
                    <tr className={styles.header}>
                        <th>
                            CATEGORY
                        </th>
                        <th>
                            PRESENTER
                        </th>
                        <th>
                            CO-AUTHOR
                        </th>
                        <th>
                            PARTICIPANT
                        </th>
                    </tr>
                </thead>
                <tbody className={styles.body}>
                    {
                        register_details.map((detail, index) => {
                            return (
                                <TableItems type={"laptop"} row={detail} key={index} index={index} />
                            )
                        })
                    }
                </tbody>
            </table>

            <table className={styles.table + " " + styles.mobile}>
                <thead className={styles.head}>
                    <tr className={styles.header}>
                        <th className={styles.category}>
                            CATEGORY
                        </th>
                        <th>
                            PRESENTER
                        </th>
                        <th>
                            CO-AUTHOR
                        </th>
                    </tr>
                </thead>
                <tbody className={styles.body}>
                    {
                        register_details.map((detail, index) => {
                            return (
                                <TableItems type={"mobile1"} row={detail} key={index} index={index} />
                            )
                        })
                    }
                </tbody>
            </table>

            <table className={styles.table + " " + styles.mobile}>
                <thead className={styles.head}>
                    <tr className={styles.header}>
                        <th className={styles.category}>
                            CATEGORY
                        </th>
                        <th>
                            PARTICIPANT
                        </th>
                    </tr>
                </thead>
                <tbody className={styles.body}>
                    {
                        register_details.map((detail, index) => {
                            return (
                                <TableItems type={"mobile2"} row={detail} key={index} index={index} />
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default RegisterTable;
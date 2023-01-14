import React, { useState } from 'react'
import Heading from '../../components/UI/Heading/Heading'
import SubHeading from '../../components/UI/SubHeading/SubHeading'
import styles from "./Committee.module.css";
import { committee_titles, committee_members } from '../../data';

const Committee = () => {
    const [activeCmte, setActiveCmte] = useState("Chief Patron");

    return (
        <div>
            <Heading text="Committees" />
            <div className={styles.section}>
                <div className={styles.container1}>
                    {
                        committee_titles.map((item) => {
                            return <h3 className={activeCmte === item ? styles.active : ''}
                                onClick={() => setActiveCmte(item)}
                            >
                                {item.toUpperCase()}
                            </h3>
                        })
                    }
                </div>
                <div className={styles.container2}>
                    <SubHeading text={activeCmte.toUpperCase()} />
                    <div className={styles.table}>
                        {
                            committee_members[activeCmte].map((item) => {
                                const [name, position, _] = item.split(/,(.*)/s);
                                return <p><i>{name}</i>,{position}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Committee
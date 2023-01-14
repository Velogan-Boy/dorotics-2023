import React, { useState } from 'react'
import Heading from '../../components/UI/Heading/Heading'
import SubHeading from '../../components/UI/SubHeading/SubHeading'
import Footer from '../../components/Footer/Footer';
import FloatNextButton from '../../components/FloatNextButton/FloatNextButton';
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
                            return <h3 key={item} className={activeCmte === item ? styles.active : ''}
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
                            committee_members[activeCmte].map((item, index) => {
                                const [name, position, _] = item.split(/,(.*)/s);
                                return <p key={index}><i>{name}</i>,{position}</p>
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
            <FloatNextButton link="/tracks" />
        </div>
    )
}

export default Committee
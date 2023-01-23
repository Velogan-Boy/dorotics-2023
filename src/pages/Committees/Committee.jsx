import React from 'react'
import Heading from '../../components/UI/Heading/Heading'
import SubHeading from '../../components/UI/SubHeading/SubHeading'
import Footer from '../../components/Footer/Footer';
import FloatNextButton from '../../components/FloatNextButton/FloatNextButton';
import styles from "./Committee.module.css";
import { committee_titles, committee_members } from '../../data';

const Committee = () => {

    return (
        <div>
            <Heading text="Committees" />
            <div className={styles.section}>
                {committee_titles.map((title, index) => {
                    return <div className={styles.container} key={index}>
                        <SubHeading text={title.toUpperCase()} />
                        <div className={styles.table}>
                            {
                                committee_members[title].map((item, index) => {
                                    const [name, position, _] = item.split(/,(.*)/s);
                                    return <p key={index}><i>{name}</i>,{position}</p>
                                })
                            }
                        </div>
                    </div>
                })}
            </div>
            <Footer />
            <FloatNextButton link="/tracks" />
        </div>
    )
}

export default Committee
import React from 'react'
import Heading from '../../components/UI/Heading/Heading'
import SubHeading from '../../components/UI/SubHeading/SubHeading'
import Footer from '../../components/Footer/Footer';
import FloatNextButton from '../../components/FloatNextButton/FloatNextButton';
import { publications } from '../../data'
import styles from "./Publications.module.css"

const Publications = () => {
    return (
        <div>
            <Heading text="Publications" />
            <div className={styles.section}>
                <SubHeading text="Publication in ICTACT Journals" />
                <h3>( International Publications of ICT Academy )</h3>
                <div className={styles.container}>
                    <div>
                        <p>{publications}</p>
                        <p>For more details visit
                            <a href='https://www.ictactjournals.in' target="_blank" rel="noreferrer"> www.ictactjournals.in</a>
                        </p>
                    </div>
                    <div>
                        <img src='/ict-academy.png' alt='ICTACT logo' />
                    </div>
                </div>
            </div>
            <Footer />
            <FloatNextButton link="/register" />
        </div>
    )
}

export default Publications
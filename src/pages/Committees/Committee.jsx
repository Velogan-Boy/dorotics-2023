import React from 'react'
import Heading from '../../components/UI/Heading/Heading'
import SubHeading from '../../components/UI/SubHeading/SubHeading'
import Footer from '../../components/Footer/Footer';
import FloatNextButton from '../../components/FloatNextButton/FloatNextButton';
import styles from "./Committee.module.css";
import { committee_titles, committee_members } from '../../data';

const Table = ({ list }) => {
    return <>
        {
            list.map((title, index) => {
                return <div className={styles.container} key={index}>
                    <div className={styles.center}>
                        <SubHeading text={title.toUpperCase()} />
                    </div>
                    <div className={styles.table}>
                        {
                            committee_members[title].map((item, index) => {
                                const [name, position, _] = item.split(/,(.*)/s);
                                return <p key={index}><i>{name}</i>,{position}</p>
                            })
                        }
                    </div>
                </div>
            })
        }
    </>
}

const Committee = () => {

    const committee_titles1 = committee_titles.slice(0, 2);
    const committee_titles2 = committee_titles.slice(2, 4);
    const committee_titles3 = committee_titles.slice(4);

    return (
        <div>
            <Heading text="Committees" />
            <div className={styles.section}>
                <div className={styles.flex}>
                    <Table list={committee_titles1} />
                </div>
                <div className={styles.flex}>
                    <Table list={committee_titles2} />
                </div>
                <br />
                <br />
                <hr />
                <br />
                <Table list={committee_titles3} />
            </div>
            <Footer />
            <FloatNextButton link="/tracks" />
        </div>
    )
}

export default Committee
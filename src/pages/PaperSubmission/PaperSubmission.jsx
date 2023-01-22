import React from 'react'
import Heading from '../../components/UI/Heading/Heading'
import SubHeading from '../../components/UI/SubHeading/SubHeading'
import Footer from '../../components/Footer/Footer';
import FloatNextButton from '../../components/FloatNextButton/FloatNextButton';
import styles from "./PaperSubmission.module.css";
import { submissionGuidelines, submissionFormat } from '../../data';

const PaperSubmission = () => {
    return (
        <div>
            <Heading text="Paper Submission" />
            <div className={styles.section}>
                <SubHeading text="Submission guidelines" />
                <div className={styles.container}>
                    <div>
                        <ul>
                            {submissionGuidelines.map((point, index) => {
                                if (point.includes("EasyChair")) {
                                    let arr = point.split("EasyChair");
                                    return <li key={index}>
                                        {arr[0]}
                                        <a href='https://easychair.org/conferences/?conf=dorotics2023' target="_blank" rel="noreferrer">EasyChair</a>
                                        {arr[1]}
                                    </li>
                                }
                                return <li key={index}>{point}</li>
                            })}
                        </ul>
                    </div>
                    <div>
                        <img src='/easy-chair.png' alt='Easy chair logo' />
                    </div>
                </div>
                <SubHeading text="Submission format and link" />
                <div className={styles.format}>
                    <ul>
                        {submissionFormat.map((point, index) => {
                            if (point.includes(",")) {
                                let arr = point.split(",");
                                return <li>
                                    {arr[0]}
                                    <a href='https://www.ieee.org/conferences/publishing/templates.html' target="_blank" rel="noreferrer">
                                        {arr[1]}
                                    </a>
                                </li>
                            }
                            return <li key={index}>{point}</li>
                        })}
                    </ul>
                </div>
            </div>

            <Footer />
            <FloatNextButton link="/publications" />
        </div>
    )
}

export default PaperSubmission
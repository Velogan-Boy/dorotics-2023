import React from 'react'
import Heading from '../../components/UI/Heading/Heading'
import SubHeading from '../../components/UI/SubHeading/SubHeading'
import styles from "./PaperSubmission.module.css";
import { submissionGuidelines } from '../../data';

const PaperSubmission = () => {
    return (
        <div>
            <Heading text="Paper Submission" />
            <div className={styles.section}>
                <SubHeading text="Submission guidelines" />
                <div className={styles.container}>
                    <p>
                        {submissionGuidelines.desc[0]}
                        <i>{submissionGuidelines.desc[1]}</i>
                        {submissionGuidelines.desc[2]}
                    </p>
                    <a href={submissionGuidelines.link} target="_blank" rel="noreferrer">
                        {submissionGuidelines.link}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PaperSubmission
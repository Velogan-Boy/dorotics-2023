import React from 'react';
import Heading from '../../components/UI/Heading/Heading';
import SubHeading from '../../components/UI/SubHeading/SubHeading';
import styles from "./About.module.css";

function About() {
    return <div>
        <Heading text="about" />
        <div className={styles.wrapper}>
            <div>
                <SubHeading text="about anna university" />
                <p className={styles.description}>
                    Anna University was established in 1978 as a unitary type of University. This University was named after Late Dr.C.N.Annadurai, former Chief Minister of Tamil Nadu.
                    It offers higher education in Engineering, Technology, Architecture and Applied Sciences relevant to the current and projected needs of the society.
                    Besides promoting research and disseminating knowledge gained therefrom, it fosters cooperation between the academic and industrial communities.
                </p>
            </div>
            <div>
                <SubHeading text="about the symposium" />
                <p className={styles.description}>
                    First National Symposium on Emerging Technologies in DOROTICS (Drones & Robotics) will be held in College of Engineering, Guindy, Anna University,
                    Chennai - 25 from April 4th to April 6th 2023. This event is organized in view with the DOROTICS summit in association with the Board of International
                    Aviation Games(BIAG), CTF and Robotics Club, CEG and Robotics Club, MIT, sponsored by CED, Anna University.
                </p>
            </div>
        </div>
    </div>;
}

export default About;
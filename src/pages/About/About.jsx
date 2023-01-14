import React from 'react';
import Heading from '../../components/UI/Heading/Heading';
import SubHeading from '../../components/UI/SubHeading/SubHeading';
import Footer from '../../components/Footer/Footer';
import FloatNextButton from '../../components/FloatNextButton/FloatNextButton';
import styles from './About.module.css';
import { about } from '../../data';

function About() {
   return (
      <div>
         <Heading text="about" />
         <div className={styles.wrapper}>
            <div>
               <SubHeading text="about anna university" />
               <p className={styles.description}>{about[0]}</p>
            </div>
            <div>
               <SubHeading text="about the symposium" />
               <p className={styles.description}>{about[1]}</p>
            </div>
         </div>
         <Footer />
         <FloatNextButton link="/committee" />
      </div>
   );
}

export default About;

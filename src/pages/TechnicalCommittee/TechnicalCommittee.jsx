import React from 'react';

import Heading from '../../components/UI/Heading/Heading';
import SubHeading from '../../components/UI/SubHeading/SubHeading';
import FloatNextButton from '../../components/FloatNextButton/FloatNextButton';
import Footer from '../../components/Footer/Footer';

import styles from './TechnicalCommittee.module.css';

function TechnicalCommittee() {
   return (
      <>
         <Heading text="Technical Committee" />
         <div className={styles.wrapper}>
            {/* <SubHeading text="Technical Committee" /> */}
            <div className={styles.container}>
               {/* <KeynoteSpeaker /> */}
               <div className={styles.update}>Will be updated shortly!</div>
            </div>
         </div>
         <FloatNextButton link="/keynote" />
         <Footer />
      </>
   );
}

export default TechnicalCommittee;

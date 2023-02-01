import React from 'react';

import Heading from '../../components/UI/Heading/Heading';
import SubHeading from '../../components/UI/SubHeading/SubHeading';
import DateTable from '../../components/DateTable/DateTable';
import FloatNextButton from '../../components/FloatNextButton/FloatNextButton';
import Footer from '../../components/Footer/Footer';

import styles from './Schedule.module.css';

const Schedule = () => {
   return (
      <>
         <Heading text="Dates & Schedule" />
         <div className={styles.wrapper1}>
            <SubHeading text="Important Dates" />
            <DateTable />
            {/* <SubHeading text="Schedule" />
            <div className={styles.container}>
               <div className={styles.update}> Will be updated shortly!</div>
            </div> */}
         </div>
         <div className={styles.wrapper2}>
            <SubHeading text="Schedule" />
            <div className={styles.container}>
               <div className={styles.update}> Will be updated shortly!</div>
            </div>
         </div>
         <FloatNextButton link="/contact-us" />
         <Footer />
      </>
   );
};

export default Schedule;
